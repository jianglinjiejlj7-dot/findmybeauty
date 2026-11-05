#!/usr/bin/env python3
"""Static demo server plus live Pinterest pin lookup via Bing image search."""

from __future__ import annotations

import html
import json
import os
import re
import ssl
import subprocess
import tempfile
import threading
import time
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

try:
    import certifi

    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CTX = ssl._create_unverified_context()

ROOT = os.path.dirname(os.path.abspath(__file__))
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)
PRODUCT_RE = re.compile(
    r"palette|팔레트|swatch|product|packaging|flat\s?lay|still life|youtube|"
    r"unboxing|haul|collection page|lipstick tube|틴트 발색|발색표|제품|"
    r"colorize|commercial photography",
    re.I,
)
LISTICLE_RE = re.compile(
    r"(\b\d+\s*(\+|best|cute|korean|ideas|tips)\b)|ideas to save|outfit ideas|"
    r"you need to copy|perfect for the season|lookbook|infographic|"
    r"outfits for 20|아이디어 찾기",
    re.I,
)
CACHE_LOCK = threading.Lock()
CACHE = {"at": 0, "payload": None}
CACHE_TTL = 15 * 60

MAKEUP_QUERIES = [
    {
        "queries": ["뮤트 로즈 메이크업 룩", "muted rose makeup look korean face"],
        "label": "雾玫瑰低对比妆面",
        "reason": "唇部保留豆沙，面中用雾感粉，不把浆果红铺满脸颊。",
        "keyword": "뮤트 로즈 메이크업",
    },
    {
        "queries": ["밀키 글로우 메이크업", "milky glow korean makeup look"],
        "label": "奶光皮肤妆面",
        "reason": "皮肤保持通透，腮红贴着眼下向外晕开，适合中低对比。",
        "keyword": "밀키 글로우 피부",
    },
    {
        "queries": ["coral blush makeup look korean", "웜톤 코랄 블러셔 메이크업"],
        "label": "暖珊瑚斜向腮红妆面",
        "reason": "眼尾横向延展，腮红斜向铺开，不强调上挑眼线。",
        "keyword": "웜톤 코랄 블러셔",
    },
]
OUTFIT_QUERIES = [
    {
        "queries": ["korean soft autumn outfit", "가을 데일리 코디"],
        "label": "柔秋日常穿搭",
        "reason": "浅暖上装承接柔秋，下装用低饱和颜色降低对比。",
        "keyword": "소프트 어텀 코디",
    },
    {
        "queries": ["beige knit midi skirt korean outfit", "muted beige knit midi skirt outfit"],
        "label": "雾感针织与半裙",
        "reason": "灰调或米色上衣接近次选柔夏，裙装保持中低饱和。",
        "keyword": "소프트 어텀 니트 스커트",
    },
    {
        "queries": ["ivory satin camisole jeans korean outfit", "white satin cami jeans outfit"],
        "label": "象牙缎面上衣穿搭",
        "reason": "高光材质放在上装，下装保持干净，避免高饱和整身。",
        "keyword": "아이보리 새틴 나시 코디",
    },
]


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
        },
    )
    with urllib.request.urlopen(req, timeout=20, context=SSL_CTX) as res:
        return res.read().decode("utf-8", "replace")


def bing_pins(query: str) -> list[dict]:
    url = "https://www.bing.com/images/async?" + urllib.parse.urlencode(
        {"q": query, "first": 0, "count": 35, "mmasync": 1}
    )
    text = html.unescape(fetch(url))
    items = []
    seen = set()
    for raw in re.findall(r'\sm="(\{.*?\})"', text):
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            continue
        src = data.get("murl") or ""
        page = data.get("purl") or ""
        title = re.sub(r"\s+", " ", (data.get("t") or data.get("desc") or "").strip())
        if "i.pinimg.com" not in src and "pinterest.com" not in page:
            continue
        if PRODUCT_RE.search(title) or PRODUCT_RE.search(page):
            continue
        if LISTICLE_RE.search(title) or LISTICLE_RE.search(page):
            continue
        if "youtube.com" in page:
            continue
        key = src.split("?")[0]
        if key in seen:
            continue
        seen.add(key)
        if "/236x/" in src:
            src = src.replace("/236x/", "/736x/")
        items.append(
            {
                "src": src,
                "title": title[:90] or query,
                "page": page or f"https://www.pinterest.com/search/pins/?q={urllib.parse.quote(query)}",
                "keyword": query,
            }
        )
    return items


def pick(query_rows: list[dict]) -> list[dict]:
    chosen = []
    used = set()
    for row in query_rows:
        pin = None
        used_query = row["keyword"]
        for query in row["queries"]:
            pins = bing_pins(query)
            pin = next((p for p in pins if p["src"] not in used), None)
            if pin:
                used_query = query
                break
        if not pin:
            continue
        used.add(pin["src"])
        pin["label"] = row["label"]
        pin["reason"] = row["reason"]
        pin["keyword"] = row["keyword"]
        pin["matched_query"] = used_query
        chosen.append(pin)
    return chosen


def live_pins() -> dict:
    with CACHE_LOCK:
        if CACHE["payload"] and time.time() - CACHE["at"] < CACHE_TTL:
            return CACHE["payload"]
    makeup = pick(MAKEUP_QUERIES)
    outfit = pick(OUTFIT_QUERIES)
    payload = {
        "makeup": makeup,
        "outfit": outfit,
        "fetched_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "source": "Pinterest pins retrieved through live image search",
        "note": "Folder images are style examples only and are not used as report results.",
    }
    with CACHE_LOCK:
        CACHE["at"] = time.time()
        CACHE["payload"] = payload
    return payload


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/pins":
            refresh = urllib.parse.parse_qs(parsed.query).get("refresh", ["0"])[0] == "1"
            try:
                if refresh:
                    with CACHE_LOCK:
                        CACHE["payload"] = None
                payload = live_pins()
                body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            except Exception as exc:
                body = json.dumps({"error": str(exc)}, ensure_ascii=False).encode("utf-8")
                self.send_response(502)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            return
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/api/convert-image":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length") or "0")
        data = self.rfile.read(length) if length else b""
        if not data:
            body = json.dumps({"error": "empty image"}).encode("utf-8")
            self.send_response(400)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        try:
            with tempfile.TemporaryDirectory() as tmp:
                src = os.path.join(tmp, "in.heic")
                dst = os.path.join(tmp, "out.jpg")
                with open(src, "wb") as handle:
                    handle.write(data)
                subprocess.run(
                    ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "80", src, "--out", dst],
                    check=True,
                    capture_output=True,
                )
                with open(dst, "rb") as handle:
                    jpeg = handle.read()
            self.send_response(200)
            self.send_header("Content-Type", "image/jpeg")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(jpeg)))
            self.end_headers()
            self.wfile.write(jpeg)
        except Exception as exc:
            body = json.dumps({"error": str(exc)}, ensure_ascii=False).encode("utf-8")
            self.send_response(502)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

    def log_message(self, fmt, *args):
        print("[%s] %s" % (self.log_date_time_string(), fmt % args))


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8765"))
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Findmybeauty demo http://127.0.0.1:{port}")
    server.serve_forever()
