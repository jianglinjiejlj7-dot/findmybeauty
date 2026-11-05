# Findmybeauty

色彩与妆容分析演示站。页面是静态 HTML/JS，本地 Python 服务负责打开页面、检索 Pinterest 妆面/穿搭图，以及把 iPhone HEIC 照片转成可显示的 JPEG。

## 本地运行

```bash
python3 server.py
```

浏览器打开 http://127.0.0.1:8765

## GitHub 上线（GitHub Pages）

1. 在 GitHub 新建公开仓库，例如 `findmybeauty`。
2. 把本文件夹内容推上去（不要包含 `.git` 以外的压缩包）。
3. 仓库 **Settings → Pages**：Source 选 `Deploy from a branch`，分支 `main`，目录 `/ (root)`。
4. 保存后访问 `https://<你的用户名>.github.io/findmybeauty/`

GitHub Pages 只托管静态文件，**不会运行** `server.py`。因此上线后：

- 页面、色卡、分区示意、示例照片可以打开
- Pinterest 实时检索会失败，页面会走已有妆面/穿搭兜底图
- iPhone HEIC 转换在 Pages 上不可用，建议用户上传 JPG/PNG

若需要完整检索和 HEIC 转换，把同一份代码部署到能跑 Python 的平台（如 Render、Railway），启动命令为 `python3 server.py`，并设置环境变量 `PORT`。
