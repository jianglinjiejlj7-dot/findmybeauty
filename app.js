const COLOR_SWATCHES = [
  { id: "cream", name: "奶油杏", hex: "#F3E2C7" },
  { id: "rose", name: "玫瑰豆沙", hex: "#C08081" },
  { id: "berry", name: "浆果红", hex: "#8B3A4A" },
  { id: "coral", name: "暖珊瑚", hex: "#E08A7A" },
  { id: "peach", name: "蜜桃粉", hex: "#F2B6A0" },
  { id: "olive", name: "橄榄棕", hex: "#8A6B4A" },
  { id: "oat", name: "燕麦奶", hex: "#E8D5C4" },
  { id: "mist", name: "雾霾蓝", hex: "#8FA4B8" },
  { id: "sage", name: "鼠尾草绿", hex: "#7D8B6A" },
  { id: "plum", name: "梅子紫", hex: "#6B3A55" },
  { id: "caramel", name: "焦糖棕", hex: "#A56B4C" },
  { id: "pearl", name: "珍珠白", hex: "#F6F1EA" },
];

const FAQ = [
  {
    q: "免费测试和完整报告有什么区别？",
    a: "免费基础报告包含七个模块：首选与次选季型及依据、五维特征、突出特征与选色建议、基础参考色卡、原配色保留与偏好适配、调整后色卡，以及少量妆容检索词。完整报告在此基础上增加脸型五官分析、本人正脸彩妆分区、局部步骤、妆容与穿搭参考图。完整报告为单次购买，价格暂定 3.99 元，最终价格与付款时点待产品确认。",
  },
  {
    q: "为什么要先选喜欢的颜色？",
    a: "报告会保留你原来的选择，不会替你改写喜好。当喜好与推荐色不完全一致时，会说明冲突点、哪些颜色可以保留、哪些需要调整明度或用法。",
  },
  {
    q: "照片有什么要求？",
    a: "请上传 2 张本人照片：1 张素颜正脸和 1 张 45° 侧脸。拍摄要求：素颜、素眼、自然光，并避免明显偏色或滤镜。系统会逐项反馈是否通过；不合格时需要替换后再进入分析，不会静默混用。",
  },
  {
    q: "提交后可以离开页面吗？",
    a: "可以。确认生成后，报告会在后台继续处理。请保存订单号。刷新、锁屏或暂时离开后，可用同一订单号恢复状态。网络中断只表示暂时查不到进度，不等于报告失败。",
  },
  {
    q: "报告能保存多久？",
    a: "在线查询期方向为 30 天，具体截止规则待产品确认。建议尽早导出长图或 PDF。本地下载的文件不受在线访问期影响。到期后再次获取完整报告需要重新测试。",
  },
  {
    q: "失败了可以退款吗？",
    a: "付费完整报告首次失败可免费重试一次。两次逻辑尝试都失败后，可在客服售后申请原路退款。免费报告不适用付费退款规则。报告已成功交付后，个人喜好不满意不触发自动退款。本页为演示，不会发起真实支付或退款。",
  },
];

const SAMPLE_REPORT = {
  primarySeason: "柔秋",
  secondarySeason: "柔夏",
  primaryWhy:
    "示例观察：面部低对比、暖调倾向更明显，皮肤明浊介于柔和与轻微灰调之间。柔秋作为首选，是因为它更容易同时承接你喜欢的豆沙、焦糖，又不会把五官对比拉得过硬。这不是对性格或审美的定论，只是本次照片与偏好下的探索参考。",
  secondaryWhy:
    "次选柔夏用于解释：若某次妆容更偏雾感、唇色更冷，也可以向柔夏靠。当冷暖不够确定时，报告会保留不确定，而不是给出高确定性标签。",
  dimensions: [
    { name: "冷暖倾向", value: "偏暖，冷暖边界不够锐", note: "示例维度，待产品确认量表。" },
    { name: "饱和度", value: "中低，耐看不抢", note: "高饱和色建议降低面积或加入雾面。" },
    { name: "明浊", value: "柔和、轻微浊感", note: "过亮的瓷白色可能显得跳。" },
    { name: "对比度", value: "中低对比", note: "示例维度。硬黑眼线可能切断五官衔接。" },
    { name: "清透度", value: "适度通透", note: "示例维度。完全哑光或完全水光都可按偏好微调。" },
  ],
  traits:
    "本次照片中更突出的是唇周与面中的暖调、眼周对比不强。彩妆可以先用中低饱和的暖玫瑰、焦糖、橄榄来建立整体，再把你喜欢的浆果红放到唇膏或一点眼尾，而不是铺满面部。",
  basePalette: [
    { name: "暖沙", hex: "#D7B49E" },
    { name: "陶土", hex: "#C48A6A" },
    { name: "雾玫瑰", hex: "#C99A9A" },
    { name: "橄榄奶茶", hex: "#B39A7A" },
    { name: "深枣", hex: "#7A3E3E" },
    { name: "暖象牙", hex: "#F0E6D8" },
  ],
  adaptedPalette: [
    { name: "保留豆沙", hex: "#C08081" },
    { name: "降低饱和浆果", hex: "#9A5A62" },
    { name: "雾感蜜桃", hex: "#E4B7A8" },
    { name: "焦糖唇", hex: "#A56B4C" },
    { name: "柔橄榄", hex: "#8B7A5C" },
    { name: "珍珠高光", hex: "#F6F1EA" },
  ],
  keywords: ["뮤트 로즈 메이크업", "소프트 어텀 립", "로우 콘트라스트 음영"],
  keywordsFull: [
    "뮤트 로즈 메이크업",
    "소프트 어텀 립",
    "로우 콘트라스트 음영",
    "웜톤 코랄 블러셔",
    "올리브 브라운 아이섀도",
    "밀키 글로우 피부",
  ],
};

function pinterestSearch(q) {
  return `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}`;
}

const MAKEUP_LOOKS = [
  {
    src: "./assets/makeup/look-1.jpeg",
    keyword: "뮤트 로즈 메이크업",
    title: "雾玫瑰低对比妆面",
    reason: "唇部保留豆沙，面中用雾感粉，不把浆果红铺满脸颊。",
  },
  {
    src: "./assets/makeup/look-2.jpeg",
    keyword: "밀키 글로우 피부",
    title: "奶光皮肤 + 柔秋唇",
    reason: "皮肤保持通透，腮红贴着眼下向外晕开，适合中低对比。",
  },
  {
    src: "./assets/makeup/look-3.jpeg",
    keyword: "웜톤 코랄 블러셔",
    title: "暖珊瑚斜向腮红",
    reason: "45° 看侧面收紧，眼尾横向延展，不强调上挑眼线。",
  },
];

const OUTFIT_LOOKS = [
  {
    src: "./assets/outfit/look-1.jpeg",
    title: "暖象牙针织 + 雾绿半裙",
    reason: "浅暖上装承接柔秋，下装用低饱和绿降低对比。",
    keyword: "soft autumn outfit muted green skirt",
  },
  {
    src: "./assets/outfit/look-2.jpeg",
    title: "雾灰针织 + 格纹半裙",
    reason: "灰调上衣接近次选柔夏，格纹里的驼与雾蓝可小面积出现。",
    keyword: "soft muted knit plaid midi skirt outfit",
  },
  {
    src: "./assets/outfit/look-3.jpeg",
    title: "珍珠缎面吊带 + 浅蓝牛仔",
    reason: "高光材质放在上装，下装保持干净，避免高饱和整身。",
    keyword: "milky satin cami jeans soft color outfit",
  },
];

const FACE_ZONES = [
  { name: "膨胀色（眼下外侧）", hex: "#E7B4B8", role: "提亮、拉近五官、缩短中庭" },
  { name: "氛围色（颧骨前方）", hex: "#C98B96", role: "增加气色、让面中更饱满" },
  { name: "收缩色（颧骨外侧）", hex: "#A37B72", role: "向后晕染、收窄脸宽、修饰脸型" },
  { name: "氛围色（鼻尖）", hex: "#D4A0A8", role: "少量增加精致感和立体感" },
];

const DEMO_FRONT = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=900&q=80";
const DEMO_ANGLE = "./assets/demo-angle.jpg";
const PHOTO_STORE_KEY = "findmybeauty_photos";
const COLOR_STORE_KEY = "findmybeauty_colors";

const state = {
  view: "home",
  channel: "free",
  selectedColors: [],
  photos: [],
  photoIssue: null,
  orderNo: null,
  taskStatus: null,
  paid: false,
  generatingTimer: null,
  supportOpen: false,
  supportTab: "faq",
  queryInput: "",
  queryResult: null,
  exportOpen: false,
  faqOpen: null,
  refundState: null,
  pinterestMakeup: null,
  pinterestOutfit: null,
  pinterestLoading: false,
  pinterestError: null,
  pinterestFetchedAt: null,
  pinterestAttempted: false,
};

function $(id) {
  return document.getElementById(id);
}

function go(view, extra = {}) {
  Object.assign(state, extra, { view });
  if (view !== "home") window.scrollTo({ top: 0, behavior: "instant" });
  render();
}

function makeOrderNo() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let body = "";
  for (let i = 0; i < 10; i += 1) body += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `FMB${body}`;
}

function selectedColorObjects() {
  return COLOR_SWATCHES.filter((c) => state.selectedColors.includes(c.id));
}

function passedPhotos() {
  return state.photos.filter((p) => p.status === "pass");
}

function hasRequiredPhotos() {
  const passed = passedPhotos();
  return passed.some((p) => p.pose === "front") && passed.some((p) => p.pose === "angle");
}

function photoGapMessage() {
  const passed = passedPhotos();
  const hasFront = passed.some((p) => p.pose === "front");
  const hasAngle = passed.some((p) => p.pose === "angle");
  if (hasFront && hasAngle) return null;
  if (!hasFront && !hasAngle) return "需要 1 张素颜正脸和 1 张 45° 侧脸。";
  if (!hasFront) return "还缺 1 张素颜正脸照。";
  return "还缺 1 张 45° 侧脸照。";
}

function canSubmitTest() {
  return state.selectedColors.length >= 3 && hasRequiredPhotos() && !state.photos.some((p) => p.status === "fail" || p.status === "unknown");
}

function copyOrder() {
  if (!state.orderNo) return;
  navigator.clipboard?.writeText(state.orderNo);
  const tip = $("copy-tip");
  if (tip) {
    tip.textContent = "已复制订单号";
    setTimeout(() => {
      if (tip) tip.textContent = "提交后请保存订单号，换设备时凭此查询。";
    }, 1600);
  }
}

function icon(name) {
  const paths = {
    palette: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
    heart: '<path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 7 3.8C19 15.6 12 20 12 20Z"/>',
    swatch: '<rect x="5" y="5" width="6" height="6" rx="1.5"/><rect x="13" y="5" width="6" height="6" rx="1.5"/><rect x="5" y="13" width="6" height="6" rx="1.5"/><rect x="13" y="13" width="6" height="6" rx="1.5"/>',
    spark: '<path d="M12 4v3M12 17v3M4 12h3M17 12h3M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2"/>',
    check: '<path d="M5 12.5 9.5 17 19 7.5"/>',
    x: '<path d="M7 7l10 10M17 7 7 17"/>',
    chat: '<path d="M5 16.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4A2.8 2.8 0 0 1 16.2 16H9z"/><path d="M9 16v3l4-3"/>',
  };
  return `<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${paths[name] || ""}</svg>`;
}

function renderNav() {
  const links = [
    { id: "how", label: "测试说明", action: "scroll-how" },
    { id: "sample", label: "报告示例", action: "scroll-sample" },
    { id: "faq", label: "常见问题", action: "scroll-faq" },
    { id: "query", label: "报告查询", action: "open-query" },
  ];
  return `
    <header class="sticky top-0 z-40 h-20 border-b border-line bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-full max-w-content items-center justify-between px-6 lg:px-10">
        <button class="flex items-center gap-2 text-left" data-go="home">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-blush-light text-primary">${icon("spark")}</span>
          <span class="text-[15px] font-medium tracking-wide text-ink">Findmybeauty</span>
        </button>
        <nav class="hidden items-center gap-8 text-sm text-muted lg:flex">
          ${links.map((l) => `<button class="hover:text-primary" data-action="${l.action}">${l.label}</button>`).join("")}
        </nav>
        <div class="flex items-center gap-3">
          <button class="btn-secondary hidden sm:inline-flex" data-start="free">免费测试</button>
          <button class="btn-primary" data-start="full">完整报告测试</button>
        </div>
      </div>
    </header>`;
}

function renderHome() {
  return `
    ${renderNav()}
    <main>
      <section class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-0 glow-pink"></div>
        <div class="mx-auto grid max-w-content items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-24">
          <div class="lg:col-span-5">
            <p class="font-serif italic text-blush-accent">Soft editorial colour</p>
            <h1 class="mt-4 text-[40px] font-medium leading-[1.2] text-ink sm:text-5xl lg:text-[56px]">发现适合你的色彩，也保留你喜欢的样子。</h1>
            <p class="mt-6 max-w-[36em] text-lg leading-8 text-muted">结合照片中的色彩特征与个人偏好，探索可以实际尝试的妆容方向。季型是参考，不是对审美的定论。</p>
            <div class="mt-10 flex flex-wrap gap-3">
              <button class="btn-primary" data-start="free">免费测试</button>
              <button class="btn-secondary" data-start="full">完整报告测试</button>
            </div>
            <p class="mt-4 text-sm text-muted">两个入口都先完成偏好与照片；完整报告为单次购买，价格暂定，付款时点待确认。本页为产品演示，不含真实测评或支付。</p>
          </div>
          <div class="lg:col-span-7">
            <div class="relative">
              <img class="aspect-[4/5] w-full rounded-[24px] object-cover object-[center_20%] sm:aspect-[5/4] lg:h-[560px] lg:aspect-auto" alt="柔和光线下的妆容人像，展示真实皮肤质感" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80">
              <div class="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
                <p class="text-sm text-muted">摄影用于品牌氛围，与用户测评照片严格分开；测评图不做品牌滤镜。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-surface-soft py-20 lg:py-24" id="value">
        <div class="mx-auto max-w-content px-6 lg:px-10">
          <div class="max-w-2xl">
            <h2 class="text-[32px] font-medium leading-snug text-ink lg:text-[40px]">先看懂特征，再决定怎么试。</h2>
            <p class="mt-4 text-lg leading-8 text-muted">首页这四张卡片对应基础报告会回答的问题。完整报告的面部步骤与参考图不包含在免费内容里。</p>
          </div>
          <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            ${[
              { icon: "palette", title: "色彩特征", text: "从本次照片里找出可观察的冷暖、明浊等倾向，并解释依据。" },
              { icon: "heart", title: "偏好适配", text: "保留你选中的颜色。不一致时说明如何调整面积、明度或用法。" },
              { icon: "swatch", title: "参考色卡", text: "基础报告提供推荐色卡与偏好适配色卡，色块旁有文字标签。" },
              { icon: "spark", title: "妆容方向", text: "给出下一步可尝试的方向与检索词。分区步骤属于完整报告。" },
            ].map((c) => `
              <article class="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_30px_rgba(122,40,79,0.04)]">
                <div class="grid h-10 w-10 place-items-center rounded-full bg-blush-light text-primary">${icon(c.icon)}</div>
                <h3 class="mt-5 text-xl leading-7 text-ink">${c.title}</h3>
                <p class="mt-3 text-base leading-7 text-muted">${c.text}</p>
              </article>`).join("")}
          </div>
        </div>
      </section>

      <section class="py-20 lg:py-24" id="sample">
        <div class="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div class="lg:col-span-5">
            <p class="text-sm tracking-wide text-primary">示例报告</p>
            <h2 class="mt-3 text-[32px] font-medium leading-snug text-ink lg:text-[40px]">结论，然后是为什么，以及可以怎么尝试。</h2>
            <p class="mt-5 text-lg leading-8 text-muted">下面是一份标注为示例的报告片段，用于说明模块结构。没有真实用户评价、准确率或销量数据。</p>
            <button class="mt-8 text-primary underline-offset-4 hover:underline" data-go="sample-report">查看示例报告结构</button>
          </div>
          <div class="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            <img class="h-64 w-full rounded-2xl object-cover" alt="口红与腮红质地" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80">
            <img class="h-64 w-full rounded-2xl object-cover object-top" alt="自然妆容人像" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80">
            <div class="rounded-2xl border border-line bg-white p-6 sm:col-span-2">
              <p class="text-sm text-muted">示例结论</p>
              <p class="mt-2 text-2xl text-ink">首选柔秋 · 次选柔夏</p>
              <p class="mt-3 leading-7 text-muted">喜欢的浆果红可以保留在唇部，但建议降低饱和、避开大面积铺在面中。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-surface-soft py-20 lg:py-24" id="how">
        <div class="mx-auto max-w-content px-6 lg:px-10">
          <h2 class="text-[32px] font-medium text-ink lg:text-[40px]">使用流程</h2>
          <div class="mt-12 grid gap-6 md:grid-cols-4">
            ${[
              { n: "01", t: "选择入口", d: "免费测试或完整报告测试。完整通道不必先走完免费报告。" },
              { n: "02", t: "偏好与照片", d: "选择喜欢的色块，上传 1 张正脸和 1 张 45° 侧脸。不合格会说明下一步。" },
              { n: "03", t: "确认生成", d: "显示订单号。确认后才开始正式分析。免费用户同样有订单号。" },
              { n: "04", t: "查看与升级", d: "先阅读基础七模块。需要面部步骤时，基于同一次测评购买完整报告。" },
            ].map((s) => `
              <article class="rounded-2xl bg-white p-6">
                <p class="font-serif text-3xl text-blush-accent">${s.n}</p>
                <h3 class="mt-4 text-xl text-ink">${s.t}</h3>
                <p class="mt-3 leading-7 text-muted">${s.d}</p>
              </article>`).join("")}
          </div>
        </div>
      </section>

      <section class="py-20 lg:py-24" id="benefits">
        <div class="mx-auto max-w-content px-6 lg:px-10">
          <div class="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 class="text-[32px] font-medium text-ink lg:text-[40px]">权益说明</h2>
              <p class="mt-3 text-lg text-muted">按真实模块对照。完整报告保留全部基础内容。价格为暂定单次费用。</p>
            </div>
            <p class="rounded-full bg-blush-light px-4 py-2 text-sm text-primary">单次 · 暂定 ¥3.99 · 非订阅</p>
          </div>
          ${renderCompareTable()}
        </div>
      </section>

      <section class="bg-surface-soft py-20 lg:py-24" id="faq">
        <div class="mx-auto max-w-content px-6 lg:px-10">
          <h2 class="text-[32px] font-medium text-ink lg:text-[40px]">常见问题</h2>
          <div class="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
            ${FAQ.map((item, i) => `
              <div>
                <button class="flex w-full items-center justify-between px-6 py-5 text-left text-lg text-ink" data-faq="${i}">
                  ${item.q}
                  <span class="text-muted">${state.faqOpen === i ? "–" : "+"}</span>
                </button>
                <div class="${state.faqOpen === i ? "px-6 pb-5 text-base leading-7 text-muted" : "hidden"}">${item.a}</div>
              </div>`).join("")}
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}`;
}

function renderCompareTable() {
  const rows = [
    ["首选、次选季型及依据", "包含", "全部保留"],
    ["五维特征与解释", "包含", "全部保留"],
    ["突出特征与彩妆选色建议", "包含", "全部保留"],
    ["基础参考色卡", "包含", "全部保留"],
    ["原配色保留与偏好适配", "包含", "全部保留"],
    ["调整后色卡", "包含", "全部保留"],
    ["妆容检索词", "少量，数量待定", "更细致，标准待定"],
    ["脸型、五官形态及比例分析", "不含", "包含"],
    ["本人正脸彩妆分区标注", "不含", "眼妆、腮红、唇妆"],
    ["局部放大图、步骤与理由", "不含", "包含"],
    ["妆容与穿搭参考图", "不含", "各 3 张，来源规则待确认"],
  ];
  return `
    <div class="mt-10 overflow-hidden rounded-2xl border border-line">
      <div class="grid grid-cols-12 bg-surface-soft text-sm font-medium text-ink">
        <div class="col-span-6 px-5 py-4">模块</div>
        <div class="col-span-3 px-5 py-4">基础报告（免费）</div>
        <div class="col-span-3 px-5 py-4">完整报告（单次）</div>
      </div>
      ${rows.map((r) => `
        <div class="grid grid-cols-12 border-t border-line text-sm leading-6">
          <div class="col-span-6 px-5 py-4 text-ink">${r[0]}</div>
          <div class="col-span-3 px-5 py-4 text-muted">${r[1]}</div>
          <div class="col-span-3 px-5 py-4 text-ink">${r[2]}</div>
        </div>`).join("")}
    </div>`;
}

function renderFooter() {
  return `<footer class="border-t border-line py-10 text-center text-sm text-muted">Findmybeauty 演示页 · 依据 PRD v0.3 与 PC 设计规范 v0.1 · 不代表已上线能力</footer>`;
}

function renderTest() {
  const colors = COLOR_SWATCHES.map((c) => {
    const on = state.selectedColors.includes(c.id);
    return `
      <button type="button" class="group text-left" data-color="${c.id}">
        <span class="relative block h-16 w-16 rounded-lg ${["pearl", "cream", "oat"].includes(c.id) ? "border border-line" : ""}" style="background:${c.hex}">
          ${on ? `<span class="absolute -inset-1 rounded-[10px] border-2 border-primary"></span><span class="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-white">${icon("check")}</span>` : ""}
        </span>
        <span class="mt-2 block text-sm text-muted">${c.name}</span>
      </button>`;
  }).join("");

  const photos = state.photos.map((p) => `
    <article class="rounded-2xl border border-line bg-white p-4">
      <img src="${p.url}" alt="${p.name} 预览，保持原色" class="mx-auto max-h-[420px] w-full rounded-xl bg-surface-soft object-contain">
      <div class="mt-3 flex items-start justify-between gap-3">
        <div>
          <p class="text-sm text-ink">${p.name}</p>
          <p class="mt-1 text-sm ${p.status === "pass" ? "text-ink" : "text-primary"}">${statusLabel(p)}</p>
        </div>
        <button class="text-sm text-primary" data-remove-photo="${p.id}">移除</button>
      </div>
    </article>`).join("");

  return `
    ${renderNav()}
    <main class="mx-auto max-w-content px-6 py-12 lg:px-10">
      <p class="text-sm text-primary">${state.channel === "full" ? "完整报告通道" : "免费测试通道"}</p>
      <h1 class="mt-3 text-3xl font-medium text-ink lg:text-4xl">选择喜欢的颜色，并提交本人照片</h1>
      <p class="mt-4 max-w-[40em] text-lg leading-8 text-muted">请先选出至少 3 个喜欢的色块。照片用于分析色彩特征，不会在页面上套用品牌滤镜。正式分析只使用本次确认且校验通过的输入。</p>

      <section class="mt-12">
        <h2 class="text-2xl text-ink">1. 偏好色块</h2>
        <p class="mt-2 text-muted">已选 ${state.selectedColors.length} 个。选择由你决定，模型不会改写。</p>
        <div class="mt-6 flex flex-wrap gap-4">${colors}</div>
      </section>

      <section class="mt-14">
        <h2 class="text-2xl text-ink">2. 本人照片（正脸 + 45° 各 1 张）</h2>
        <p class="mt-2 max-w-[40em] leading-7 text-muted">用途：在你的实时照片上做素颜原图、化妆分区和化妆后对照。需要 1 张素颜正脸和 1 张 45° 侧脸。拍摄要求：素颜、素眼、自然光，关闭滤镜。</p>
        <label class="mt-6 flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-control bg-white px-6 text-center">
          <input id="photo-input" type="file" accept="image/*" class="hidden" multiple>
          <p class="text-ink">点击选择或拖拽到此处</p>
          <p class="mt-2 text-sm text-muted">支持常见图片格式。正脸、侧脸各 1 张。预览保持原色。</p>
        </label>
        <div class="mt-4 flex flex-wrap gap-3">
          <button class="btn-secondary" data-action="demo-pass">使用合格示例照片</button>
          <button class="btn-secondary" data-action="demo-fail">演示不合格照片</button>
          <p class="self-center text-sm text-muted">示例用于走通流程；不合格示例会阻断提交。</p>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-3">${photos || `<p class="text-sm text-muted">还没有上传照片。</p>`}</div>
        ${state.photoIssue ? `<div class="mt-6 rounded-2xl border border-line bg-blush-light p-5"><p class="font-medium text-ink">待补充</p><p class="mt-2 leading-7 text-ink">${state.photoIssue}</p></div>` : ""}
      </section>

      <div class="mt-12 flex flex-wrap items-center gap-4">
        <button class="btn-primary" data-action="to-confirm" ${canSubmitTest() ? "" : "disabled"}>进入确认生成</button>
        <p class="text-sm text-muted">${photoGapMessage() || "正脸和 45° 侧脸均已上传。"}已选偏好后，才会创建订单并显示订单号。</p>
      </div>
    </main>
    ${renderFooter()}`;
}

function statusLabel(p) {
  if (p.status === "pass") return "通过：可用于分析";
  if (p.status === "fail") return p.message;
  if (p.status === "unknown") return "无法判断：请补一张更清晰的自然光正脸";
  return "待校验";
}

function renderConfirm() {
  return `
    ${renderNav()}
    <main class="mx-auto max-w-xl px-6 py-20 text-center">
      <p class="text-sm text-primary">订单已创建</p>
      <h1 class="mt-4 text-3xl font-medium text-ink">请保存你的服务订单号</h1>
      <p class="mx-auto mt-8 inline-block rounded-2xl border border-line bg-white px-8 py-6 font-mono text-2xl tracking-[0.2em] text-ink">${state.orderNo}</p>
      <p id="copy-tip" class="mt-4 text-sm text-muted">提交后请保存订单号，换设备时凭此查询。</p>
      <div class="mt-6 flex justify-center gap-3">
        <button class="btn-secondary" data-action="copy-order">复制订单号</button>
      </div>
      <div class="mt-10 rounded-2xl bg-surface-soft p-6 text-left leading-7 text-muted">
        <p>订单号用于查询，本身不代表已付款。当前通道：${state.channel === "full" ? "完整报告测试" : "免费基础报告"}。</p>
        <p class="mt-3">已选偏好 ${state.selectedColors.length} 个，合格照片 ${state.photos.filter((p) => p.status === "pass").length} 张。点击下方按钮后才会提交生成任务。</p>
      </div>
      <button class="btn-primary mt-10" data-action="confirm-generate">确认生成报告</button>
    </main>
    ${renderFooter()}`;
}

function renderGenerating() {
  const map = {
    pending: "已接受任务，等待生成",
    processing: "正在为你生成专属色彩报告",
    completed: "报告已生成",
    failed: "生成失败",
  };
  return `
    ${renderNav()}
    <main class="mx-auto max-w-xl px-6 py-24 text-center">
      ${state.taskStatus === "completed"
        ? `<div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush-light text-primary">${icon("check")}</div>`
        : state.taskStatus === "failed"
        ? `<div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush-light text-primary">${icon("x")}</div>`
        : `<div class="mx-auto h-14 w-14 rounded-full border-2 border-blush-light border-t-primary animate-spin"></div>`}
      <h1 class="mt-8 text-3xl font-medium text-ink">${map[state.taskStatus]}</h1>
      <p class="mt-4 text-muted">订单号</p>
      <p class="mt-2 font-mono text-xl tracking-widest text-ink">${state.orderNo}</p>
      <p class="mt-6 leading-7 text-muted">你可以暂时离开页面，报告将在后台继续生成。本演示没有真实后端进度，因此不显示百分比。</p>
      ${state.taskStatus === "completed" ? `<button class="btn-primary mt-10" data-go="basic-report">查看基础报告</button>` : ""}
      ${state.taskStatus === "failed" ? `<button class="btn-primary mt-10" data-action="retry">重新生成</button>` : ""}
    </main>
    ${renderFooter()}`;
}

function paletteRow(items) {
  return `<div class="mt-6 flex flex-wrap gap-4">${items.map((c) => `
    <div class="w-20">
      <div class="h-20 w-20 rounded-lg border border-line" style="background:${c.hex}"></div>
      <p class="mt-2 text-sm text-muted">${c.name}</p>
    </div>`).join("")}</div>`;
}

function renderReport(kind) {
  const full = kind === "full";
  const r = SAMPLE_REPORT;
  const prefs = selectedColorObjects();
  return `
    ${renderNav()}
    <main class="bg-[#FAF7F8] pb-24">
      <div class="mx-auto max-w-content px-6 py-12 lg:px-10">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm text-primary">${full ? "完整报告 · 示例" : "基础报告 · 示例"}</p>
            <h1 class="mt-2 text-3xl font-medium text-ink">${full ? "同一次测评的完整报告" : "你的基础色彩报告"}</h1>
            <p class="mt-2 text-sm text-muted">订单号 ${state.orderNo || "示例"} · 演示结果，五维名称待产品确认</p>
          </div>
          <div class="relative">
            <button class="btn-secondary" data-action="toggle-export">保存</button>
            ${state.exportOpen ? `
              <div class="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-white p-2 shadow-lg">
                <button class="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-surface-soft" data-action="export-img">保存至本地相册</button>
                <button class="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-surface-soft" data-action="export-pdf">生成 PDF</button>
              </div>` : ""}
          </div>
        </div>

        <section class="report-card mt-8">
          <h2 class="text-2xl text-ink">1. 首选与次选季型</h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <div class="rounded-2xl bg-surface-soft p-5">
              <p class="text-sm text-muted">首选</p>
              <p class="mt-1 text-3xl text-ink">${r.primarySeason}</p>
              <p class="mt-4 leading-7 text-muted">${r.primaryWhy}</p>
            </div>
            <div class="rounded-2xl bg-surface-soft p-5">
              <p class="text-sm text-muted">次选</p>
              <p class="mt-1 text-3xl text-ink">${r.secondarySeason}</p>
              <p class="mt-4 leading-7 text-muted">${r.secondaryWhy}</p>
            </div>
          </div>
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">2. 五维特征与解释</h2>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            ${r.dimensions.map((d) => `
              <div class="rounded-2xl border border-line p-5">
                <p class="text-lg text-ink">${d.name}</p>
                <p class="mt-2 text-ink">${d.value}</p>
                <p class="mt-2 text-sm leading-6 text-muted">${d.note}</p>
              </div>`).join("")}
          </div>
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">3. 突出特征与选色建议</h2>
          <p class="mt-4 max-w-[40em] leading-7 text-muted">${r.traits}</p>
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">4. 基础参考色卡</h2>
          <p class="mt-2 text-sm text-muted">推荐色卡。周围保持白色，不做粉色滤镜。</p>
          ${paletteRow(r.basePalette)}
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">5. 原配色保留与偏好适配</h2>
          <p class="mt-4 leading-7 text-muted">你选择了：${prefs.map((c) => c.name).join("、") || "（示例偏好：玫瑰豆沙、浆果红、焦糖棕）"}。浆果红与柔秋不完全同频，建议保留在唇部或作为点缀，面中改用雾玫瑰或焦糖，而不是放弃这个喜好。</p>
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">6. 调整后色卡</h2>
          <p class="mt-2 text-sm text-muted">偏好适配色卡，与推荐色卡分开命名。</p>
          ${paletteRow(r.adaptedPalette)}
        </section>

        <section class="report-card mt-6">
          <h2 class="text-2xl text-ink">7. 妆容检索词</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            ${(full ? r.keywordsFull : r.keywords).map((k) => `<span class="rounded-full bg-surface-soft px-4 py-2 text-sm text-ink">${k}</span>`).join("")}
          </div>
        </section>

        ${full ? renderFullModules() : `
          <section class="mt-8 rounded-2xl border border-line bg-white p-8">
            <h2 class="text-2xl text-ink">付费查看完整报告</h2>
            <p class="mt-3 max-w-[40em] leading-7 text-muted">面部分析、彩妆分区、步骤和参考图不包含在免费内容中。升级将复用同一次测评，无需重新上传或选择偏好。</p>
            <button class="btn-primary mt-6" data-go="upgrade">查看权益并继续</button>
          </section>`}
      </div>
    </main>
    ${renderFooter()}`;
}

function isUserPhoto(p) {
  if (!p || p.status !== "pass" || !p.url) return false;
  if (String(p.name || "").startsWith("示例")) return false;
  if (p.url.includes("unsplash.com")) return false;
  if (p.url.includes("/assets/makeup/")) return false;
  return true;
}

function persistSession() {
  try {
    const photos = state.photos.filter(isUserPhoto).map((p) => ({
      id: p.id,
      name: p.name,
      url: p.url,
      pose: p.pose,
      status: p.status,
      message: p.message,
      zones: p.zones || null,
      aligned: Boolean(p.aligned),
      zoneVersion: p.zoneVersion || 0,
    }));
    localStorage.setItem(PHOTO_STORE_KEY, JSON.stringify(photos));
    localStorage.setItem(COLOR_STORE_KEY, JSON.stringify(state.selectedColors));
  } catch (_) {
    /* quota exceeded: keep in-memory photos */
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function isHeicSource(fileOrUrl) {
  if (!fileOrUrl) return false;
  if (typeof fileOrUrl === "string") return /image\/hei[cf]/i.test(fileOrUrl);
  return /heic|heif/i.test(fileOrUrl.type || "") || /\.hei[cf]$/i.test(fileOrUrl.name || "");
}

async function heicToJpegBlob(blob) {
  const res = await fetch("/api/convert-image", {
    method: "POST",
    headers: { "Content-Type": blob.type || "application/octet-stream" },
    body: blob,
  });
  if (res.ok) return res.blob();
  const mod = await import("https://cdn.jsdelivr.net/npm/heic2any@0.0.4/+esm");
  const heic2any = mod.default || mod;
  const result = await heic2any({ blob, toType: "image/jpeg", quality: 0.9 });
  return Array.isArray(result) ? result[0] : result;
}

function canvasFromSource(source) {
  const max = 1600;
  const scale = Math.min(1, max / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}

async function sourceToCanvas(blob) {
  let working = blob;
  if (isHeicSource(blob) || /hei[cf]/i.test(blob.type || "")) {
    try { working = await heicToJpegBlob(blob); } catch (_) { /* try native decode */ }
  }
  const bitmap = await createImageBitmap(working, { imageOrientation: "from-image" }).catch(() => null);
  if (bitmap) {
    const canvas = canvasFromSource(bitmap);
    if (bitmap.close) bitmap.close();
    return canvas;
  }
  const url = URL.createObjectURL(working);
  try {
    return canvasFromSource(await loadImage(url));
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function fileToCanvas(file) {
  return sourceToCanvas(file);
}

async function urlToCanvas(src) {
  if (src.startsWith("data:image/hei")) {
    const blob = await (await fetch(src)).blob();
    return sourceToCanvas(new File([blob], "photo.heic", { type: blob.type || "image/heic" }));
  }
  try {
    return canvasFromSource(await loadImage(src));
  } catch (_) {
    const blob = await (await fetch(src)).blob();
    return sourceToCanvas(blob);
  }
}

let landmarkerPromise = null;

async function getLandmarker() {
  if (!landmarkerPromise) {
    landmarkerPromise = (async () => {
      const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/+esm");
      const fileset = await vision.FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
      );
      return vision.FaceLandmarker.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        runningMode: "IMAGE",
        numFaces: 1,
      });
    })();
  }
  return landmarkerPromise;
}

async function detectLandmarks(image) {
  try {
    const landmarker = await getLandmarker();
    const result = landmarker.detect(image);
    return result.faceLandmarks?.[0] || null;
  } catch (_) {
    landmarkerPromise = null;
    return null;
  }
}

function clampCrop(x, y, cropW, cropH, W, H) {
  let w = cropW;
  let h = cropH;
  if (w / h > 0.75) w = h * 0.75;
  else h = w * 4 / 3;
  w = Math.min(w, W);
  h = Math.min(h, H);
  if (w / h > 0.75) w = h * 0.75;
  else h = w * 4 / 3;
  let cx = x;
  let cy = y;
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cx + w > W) cx = Math.max(0, W - w);
  if (cy + h > H) cy = Math.max(0, H - h);
  return { x: cx, y: cy, w, h };
}

function drawCrop(img, crop) {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1200;
  canvas.getContext("2d").drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, 900, 1200);
  return canvas.toDataURL("image/jpeg", 0.9);
}

function ellipseZone(id, cx, cy, rx, ry, fill, stroke) {
  return {
    id,
    cx: Math.round(cx * 10) / 10,
    cy: Math.round(cy * 10) / 10,
    rx: Math.round(rx * 10) / 10,
    ry: Math.round(ry * 10) / 10,
    fill,
    stroke,
  };
}

function zonesFromMapped(map, pose) {
  const leftOuter = map(234);
  const rightOuter = map(454);
  const faceW = Math.max(18, Math.abs(rightOuter.x - leftOuter.x));
  const underRx = faceW * 0.2;
  const underRy = faceW * 0.1;
  const cheekRx = faceW * 0.155;
  const cheekRy = faceW * 0.135;
  const outerRx = faceW * 0.09;
  const outerRy = faceW * 0.175;
  const nose = map(1);
  const mid = (leftOuter.x + rightOuter.x) / 2;
  const facingRight = nose.x < mid;
  const showRight = pose !== "angle" || facingRight;
  const showLeft = pose !== "angle" || !facingRight;
  const lip = {
    x: (map(13).x + map(14).x) / 2,
    y: (map(13).y + map(14).y) / 2,
  };
  const zones = [];
  if (showLeft) {
    const under = map(111);
    const cheek = map(205);
    zones.push(ellipseZone("under", under.x - 1.2, under.y + 3.4, underRx, underRy * 0.9, "#E7B4B8", "#C98B96"));
    zones.push(ellipseZone("cheek", cheek.x, cheek.y + 1.2, cheekRx, cheekRy, "#C98B96", "#A85C6A"));
    zones.push(ellipseZone("outer", leftOuter.x + 1.8, leftOuter.y + 1, outerRx, outerRy, "#A37B72", "#8A5A4A"));
  }
  if (showRight) {
    const under = map(340);
    const cheek = map(425);
    zones.push(ellipseZone("under", under.x + 1.2, under.y + 3.4, underRx, underRy * 0.9, "#E7B4B8", "#C98B96"));
    zones.push(ellipseZone("cheek", cheek.x, cheek.y + 1.2, cheekRx, cheekRy, "#C98B96", "#A85C6A"));
    zones.push(ellipseZone("outer", rightOuter.x - 1.8, rightOuter.y + 1, outerRx, outerRy, "#A37B72", "#8A5A4A"));
  }
  zones.push(ellipseZone("nose", nose.x, nose.y + 1.1, faceW * 0.055, faceW * 0.05, "#D4A0A8", "#C98B96"));
  zones.push(ellipseZone("lip", lip.x, lip.y, faceW * 0.16, faceW * 0.07, "#C08081", "#A85C6A"));
  return zones;
}

function defaultZones(pose) {
  if (pose === "angle") {
    return [
      ellipseZone("under", 56, 38, 12, 5.5, "#E7B4B8", "#C98B96"),
      ellipseZone("cheek", 62, 48, 9, 8, "#C98B96", "#A85C6A"),
      ellipseZone("outer", 76, 46, 5.5, 10, "#A37B72", "#8A5A4A"),
      ellipseZone("nose", 49, 51, 3.2, 2.8, "#D4A0A8", "#C98B96"),
      ellipseZone("lip", 48, 62, 8, 3.4, "#C08081", "#A85C6A"),
    ];
  }
  return [
    ellipseZone("under", 32, 39, 11, 5, "#E7B4B8", "#C98B96"),
    ellipseZone("under", 68, 39, 11, 5, "#E7B4B8", "#C98B96"),
    ellipseZone("cheek", 38, 50, 9, 7.5, "#C98B96", "#A85C6A"),
    ellipseZone("cheek", 62, 50, 9, 7.5, "#C98B96", "#A85C6A"),
    ellipseZone("outer", 20, 48, 5, 10, "#A37B72", "#8A5A4A"),
    ellipseZone("outer", 80, 48, 5, 10, "#A37B72", "#8A5A4A"),
    ellipseZone("nose", 50, 52, 3, 2.6, "#D4A0A8", "#C98B96"),
    ellipseZone("lip", 50, 63, 8, 3.4, "#C08081", "#A85C6A"),
  ];
}

function cropAroundFace(img, lms) {
  const W = img.width;
  const H = img.height;
  const xs = lms.map((p) => p.x * W);
  const ys = lms.map((p) => p.y * H);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const fw = Math.max(40, maxX - minX);
  const fh = Math.max(50, maxY - minY);
  const cx = (minX + maxX) / 2;
  const cy = minY + fh * 0.42;
  let cropH = fh * 1.78;
  let cropW = cropH * 0.75;
  if (cropW < fw * 1.32) {
    cropW = fw * 1.32;
    cropH = cropW * 4 / 3;
  }
  return clampCrop(cx - cropW / 2, cy - cropH * 0.4, cropW, cropH, W, H);
}

function heuristicCrop(img) {
  const W = img.width;
  const H = img.height;
  let cropH = Math.min(H * 0.72, W * 1.2);
  let cropW = cropH * 0.75;
  if (cropW > W) {
    cropW = W;
    cropH = cropW * 4 / 3;
  }
  return clampCrop((W - cropW) / 2, H * 0.04, cropW, cropH, W, H);
}

function alignFromLandmarks(img, lms, pose) {
  const crop = cropAroundFace(img, lms);
  const map = (i) => ({
    x: ((lms[i].x * img.width) - crop.x) / crop.w * 100,
    y: ((lms[i].y * img.height) - crop.y) / crop.h * 100,
  });
  return { url: drawCrop(img, crop), zones: zonesFromMapped(map, pose), aligned: true };
}

async function alignPhoto(source, pose) {
  const img = typeof source === "string" ? await urlToCanvas(source) : source;
  const lms = await detectLandmarks(img);
  if (lms && lms.length > 400) return alignFromLandmarks(img, lms, pose);
  const crop = heuristicCrop(img);
  return { url: drawCrop(img, crop), zones: defaultZones(pose), aligned: true };
}

async function ensureAlignedPhotos() {
  let changed = false;
  for (const p of state.photos) {
    if (!isUserPhoto(p)) continue;
    const needsAlign = !p.aligned || p.zoneVersion !== 2 || !p.zones || !p.zones.length || /image\/hei[cf]/i.test(p.url || "");
    if (!needsAlign) continue;
    try {
      const aligned = await alignPhoto(p.url, p.pose);
      p.url = aligned.url;
      p.zones = aligned.zones;
      p.aligned = true;
      p.zoneVersion = 2;
      changed = true;
    } catch (_) { /* keep original */ }
  }
  if (changed) {
    persistSession();
    render();
  }
}

function analysisPhotos() {
  const passed = state.photos.filter(isUserPhoto);
  const frontPhoto = passed.find((p) => p.pose === "front") || passed[0] || null;
  const anglePhoto = passed.find((p) => p.pose === "angle") || null;
  return {
    frontPhoto,
    anglePhoto,
    front: frontPhoto?.url || "",
    angle: anglePhoto?.url || "",
    fromUser: Boolean(frontPhoto),
    hasAngle: Boolean(anglePhoto),
  };
}

function renderPhotoReplaceBar(fromUser) {
  return `
    <div class="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-control bg-surface-soft px-4 py-3">
      <label class="btn-secondary cursor-pointer">
        <input id="report-photo-input" type="file" accept="image/*" class="hidden" multiple>
        ${fromUser ? "更换本人照片" : "上传正脸和 45° 侧脸"}
      </label>
      <p class="text-sm text-muted">${fromUser ? (photoGapMessage() || "分区已按五官位置叠在你的自拍照上。可随时更换。") : "需要 1 张素颜正脸和 1 张 45° 侧脸，不要用妆容示例图。"}</p>
    </div>`;
}

function overlayEllipses(zones, intensity) {
  const dash = intensity < 0.35 ? 'stroke-dasharray="1.6 1.3"' : "";
  return zones.map((z) => {
    const opacity = z.id === "lip" ? intensity * 0.75 : z.id === "outer" ? Math.max(intensity - 0.08, 0.12) : intensity;
    return `<ellipse cx="${z.cx}" cy="${z.cy}" rx="${z.rx}" ry="${z.ry}" fill="${z.fill}" fill-opacity="${opacity}" stroke="${z.stroke}" stroke-width="0.55" ${dash}/>`;
  }).join("");
}

function overlaySvg(photoOrPose, mode) {
  const intensity = { map: 0.28, wear: 0.46, daily: 0.22, sweet: 0.4, cool: 0.36, mood: 0.5 }[mode] || 0.3;
  const pose = typeof photoOrPose === "string" ? photoOrPose : photoOrPose?.pose || "front";
  const zones = (typeof photoOrPose === "object" && photoOrPose?.zones) || defaultZones(pose);
  return `<svg class="face-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${overlayEllipses(zones, intensity)}</svg>`;
}

function zoneNums(photoOrPose) {
  const pose = typeof photoOrPose === "string" ? photoOrPose : photoOrPose?.pose || "front";
  const zones = (typeof photoOrPose === "object" && photoOrPose?.zones) || defaultZones(pose);
  const pick = (id) => zones.find((z) => z.id === id);
  const items = [
    { z: pick("under"), n: "1", color: "#C98B96" },
    { z: pick("cheek"), n: "2", color: "#A85C6A" },
    { z: pick("outer"), n: "3", color: "#8A5A4A" },
    { z: pick("nose"), n: "4", color: "#C98B96" },
  ];
  return items.filter((item) => item.z).map((item) => `
    <span class="zone-num" style="left:${Math.max(2, item.z.cx - 3)}%;top:${Math.max(2, item.z.cy - 4)}%;background:${item.color}">${item.n}</span>`).join("");
}

function zonePills(pose) {
  if (pose === "angle") {
    return `
      <div class="zone-pill" style="left:4%;top:8%">① 眼下外侧（膨胀色）<br>从眼下连到颧骨前方</div>
      <div class="zone-pill" style="left:4%;top:28%">② 颧骨前方（氛围色）<br>由浅到深自然过渡</div>
      <div class="zone-pill" style="right:3%;top:18%">③ 颧骨外侧（收缩色）<br>不超过发际线，避免显脸大</div>`;
  }
  return `
    <div class="zone-pill" style="left:2%;top:8%">① 眼下外侧（膨胀色）<br>提亮、拉近五官、缩短中庭</div>
    <div class="zone-pill" style="left:2%;bottom:18%">② 颧骨前方（氛围色）<br>增加气色，面中更饱满</div>
    <div class="zone-pill" style="right:2%;top:12%">③ 颧骨外侧（收缩色）<br>向后晕染，收窄脸宽</div>
    <div class="zone-pill" style="right:2%;bottom:22%">④ 鼻尖（氛围色）<br>少量即可，增加精致感</div>`;
}

function renderMappedFace(photo, mode, title, caption, showPills = false) {
  const pose = photo?.pose || "front";
  const src = typeof photo === "string" ? photo : photo?.url;
  const overlayTarget = typeof photo === "object" ? photo : pose;
  const wear = mode !== "bare" && mode !== "map";
  const body = src
    ? `<img src="${src}" alt="${title || "本人照片"}">
        ${mode === "bare" ? "" : overlaySvg(overlayTarget, mode === "map" ? "map" : wear ? mode : "wear")}
        ${mode === "map" ? `<div class="face-labels">${zoneNums(overlayTarget)}${showPills ? zonePills(pose) : ""}</div>` : ""}`
    : `<div class="grid h-full place-items-center bg-surface-soft px-4 text-center text-sm leading-6 text-muted">等待上传本人照片</div>`;
  return `
    <figure>
      ${title ? `<p class="mb-2 text-sm font-medium text-ink">${title}</p>` : ""}
      <div class="face-frame">${body}</div>
      ${caption ? `<figcaption class="mt-2 text-sm leading-6 text-muted">${caption}</figcaption>` : ""}
    </figure>`;
}

function renderStepCard(n, title, photo, pos, steps, mode) {
  const src = typeof photo === "string" ? photo : photo?.url;
  const overlayTarget = typeof photo === "object" ? photo : "front";
  const media = src
    ? `<img src="${src}" alt="${title}局部" class="h-full w-full object-cover ${pos}">${mode && mode !== "bare" ? overlaySvg(overlayTarget, mode) : ""}`
    : `<div class="grid h-full place-items-center bg-surface-soft text-sm text-muted">待上传本人照片</div>`;
  return `
    <article class="rounded-2xl border border-line p-4">
      <div class="flex items-center gap-2">
        <span class="step-no">${n}</span>
        <h3 class="text-lg text-ink">${title}</h3>
      </div>
      <div class="relative mt-3 overflow-hidden rounded-xl" style="height:160px">
        ${media}
      </div>
      <ol class="mt-3 space-y-1.5 text-sm leading-6 text-muted">
        ${steps.map((s, i) => `<li><span class="text-ink">${i + 1}.</span> ${s}</li>`).join("")}
      </ol>
    </article>`;
}

function renderFullModules() {
  const photos = analysisPhotos();
  const front = photos.front;
  const angle = photos.angle;
  const frontPhoto = photos.frontPhoto;
  const anglePhoto = photos.anglePhoto;
  const sourceNote = photos.fromUser
    ? "以下分区按五官位置叠在你本次上传的自拍照上。"
    : "还没有本人照片。请上传 1 张素颜正脸和 1 张 45° 侧脸，分区会按五官对齐。";
  return `
    <section class="report-card mt-6">
      <h2 class="text-2xl text-ink">脸型与五官分析</h2>
      <p class="mt-4 max-w-[40em] leading-7 text-muted">示例观察：五官对比偏软，面中留白较多。眼妆适合横向延展，腮红贴着眼下向外晕，而不是把视觉重心拉高。该分析只用于风格建议，不是医学或骨相判断。</p>
    </section>

    <section class="report-card mt-6">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <h2 class="text-2xl text-ink">本人正脸彩妆分区</h2>
        <p class="text-sm text-muted">${sourceNote}${photos.fromUser && !photos.hasAngle ? " 尚未上传 45° 照片，侧面暂用正脸示意。" : ""}</p>
      </div>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        ${renderMappedFace(frontPhoto, "bare", "素颜原图", "五官偏钝，面中留白较多，整体轮廓柔和。")}
        ${renderMappedFace(frontPhoto, "map", "化妆分区图", "膨胀色在眼下外侧，氛围色在颧骨前方，收缩色只落在颧骨外侧。")}
        ${renderMappedFace(frontPhoto, "wear", "化妆后（正面）", "五官更立体，视觉重心上移，整体更精致清冷。")}
        ${renderMappedFace(anglePhoto, "wear", "化妆后（45°）", "侧面线条更清晰，鼻部更精致，面中更紧致。")}
      </div>
      ${renderPhotoReplaceBar(photos.fromUser)}
      <div class="mt-5 flex flex-wrap gap-3 rounded-2xl bg-surface-soft p-4">
        ${FACE_ZONES.map((z) => `
          <span class="inline-flex items-center gap-2 text-sm text-ink">
            <span class="h-4 w-4 rounded-full border border-line" style="background:${z.hex}"></span>
            <span><b>${z.name}</b> · ${z.role}</span>
          </span>`).join("")}
      </div>
    </section>

    <section class="report-card mt-6">
      <h2 class="text-2xl text-ink">局部放大图、步骤与理由</h2>
      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        ${renderStepCard("1", "眉毛", frontPhoto, "object-[50%_18%]", ["眉形略平直，眉尾延长 3–5mm。", "保留毛流感，眉尾清晰。", "颜色选灰棕 / 焦糖棕。"], "bare")}
        ${renderStepCard("2", "眼妆", anglePhoto, "object-[62%_32%]", ["眼尾横向延长，不要过度上挑。", "上眼影重点在眼尾后 1/3。", "下眼影只画后 1/3，轻轻提亮。"], "bare")}
        ${renderStepCard("3", "鼻妆", frontPhoto, "object-[50%_42%]", ["鼻梁少量修容，鼻头精细化。", "高光点在鼻梁中段和鼻尖。", "避免画整条很重的鼻影。"], "bare")}
        ${renderStepCard("4", "腮红", frontPhoto, "object-[50%_48%]", ["眼下外侧：膨胀色，提亮面中。", "颧骨前方：氛围色，增加气色。", "颧骨外侧：收缩色，修饰轮廓。"], "map")}
        ${renderStepCard("5", "唇妆", frontPhoto, "object-[50%_72%]", ["先用唇线勾勒唇形，找出唇峰。", "选择冷豆沙 / 灰玫瑰。", "喜欢的浆果红只叠在中央。"], "bare")}
      </div>
      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <article class="rounded-2xl border border-line p-4">
          <h3 class="text-lg text-ink">侧面修容示意</h3>
          <div class="relative mt-3 overflow-hidden rounded-xl" style="height:220px">
            ${angle ? `<img src="${angle}" alt="侧面修容" class="h-full w-full object-cover object-[40%_18%]">${overlaySvg(anglePhoto || "angle", "map")}` : `<div class="grid h-full place-items-center bg-surface-soft text-sm text-muted">待上传</div>`}
          </div>
          <ol class="mt-3 space-y-1.5 text-sm leading-6 text-muted">
            <li>1. 发际 / 太阳穴：修饰颅顶和面部衔接。</li>
            <li>2. 颧骨外侧：增加面部转折。</li>
            <li>3. 下颌角：收紧下颌线条。</li>
            <li>4. 下巴：少量修饰，保留自然。</li>
          </ol>
        </article>
        <article class="rounded-2xl border border-line p-4">
          <h3 class="text-lg text-ink">眼妆细节（放大）</h3>
          <div class="relative mt-3 overflow-hidden rounded-xl" style="height:180px">
            ${angle ? `<img src="${angle}" alt="眼妆放大" class="h-full w-full object-cover object-[62%_30%]">` : `<div class="grid h-full place-items-center bg-surface-soft text-sm text-muted">待上传</div>`}
          </div>
          <ol class="mt-3 space-y-1.5 text-sm leading-6 text-muted">
            <li>1. 眼尾眼线平拉，延长 2–4mm。</li>
            <li>2. 睫毛后 1/3 加强，呈横向延伸。</li>
            <li>3. 卧蚕前 2/3 提亮，后 1/3 过渡。</li>
          </ol>
        </article>
        <article class="rounded-2xl border border-line p-4">
          <h3 class="text-lg text-ink">唇妆细节（放大）</h3>
          <div class="relative mt-3 overflow-hidden rounded-xl" style="height:180px">
            ${front ? `<img src="${front}" alt="唇妆放大" class="h-full w-full object-cover object-[50%_72%]">${overlaySvg(frontPhoto || "front", "wear")}` : `<div class="grid h-full place-items-center bg-surface-soft text-sm text-muted">待上传</div>`}
          </div>
          <ol class="mt-3 space-y-1.5 text-sm leading-6 text-muted">
            <li>1. 唇峰清晰但不过于尖锐。</li>
            <li>2. 下唇适度丰满，增加立体感。</li>
            <li>3. 唇部边缘自然晕染。</li>
          </ol>
        </article>
      </div>
    </section>

    <section class="report-card mt-6">
      <h2 class="text-2xl text-ink">气质冷感腮红图</h2>
      <p class="mt-2 text-sm text-muted">在你的正脸和 45° 照片上标出 4 个腮红分区，虚线色圈与编号一一对应。</p>
      <div class="mt-6 grid gap-5 lg:grid-cols-3">
        ${renderMappedFace(frontPhoto, "map", "正面", "①膨胀色 ②氛围色 ③收缩色 ④鼻尖", true)}
        ${renderMappedFace(anglePhoto, "map", "45°侧面", "从内到外由浅到深，不超过发际线。", true)}
        <div>
          <p class="mb-2 text-sm font-medium text-ink">局部放大</p>
          ${[
            { t: "① 眼下外侧（膨胀色）", p: "object-[22%_40%]", d: "低饱和冷粉，轻扫即可，不超过卧蚕下缘。" },
            { t: "② 颧骨前方（氛围色）", p: "object-[38%_52%]", d: "从眼下连到颧骨前方，轻轻晕染。" },
            { t: "③ 颧骨外侧（收缩色）", p: "object-[8%_48%]", d: "用灰粉/豆沙色向后晕开，范围不要太大。" },
            { t: "④ 鼻尖（氛围色）", p: "object-[50%_55%]", d: "少量扫在鼻尖和鼻梁下段。" },
          ].map((c) => `
            <div class="mb-3 flex gap-3">
              <div class="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                ${front ? `<img src="${front}" alt="${c.t}" class="h-full w-full object-cover ${c.p}">` : ""}
              </div>
              <p class="text-sm leading-6 text-muted"><b class="text-ink">${c.t}</b><br>${c.d}</p>
            </div>`).join("")}
        </div>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-3">
        ${FACE_ZONES.slice(0, 3).map((z) => `
          <div class="rounded-2xl border border-line p-4">
            <div class="h-16 rounded-xl border border-line" style="background:${z.hex}"></div>
            <p class="mt-3 font-medium text-ink">${z.name}</p>
            <p class="mt-1 text-sm text-muted">${z.role}</p>
          </div>`).join("")}
      </div>
      <div class="mt-6 grid gap-4 md:grid-cols-3">
        ${renderMappedFace(frontPhoto, "bare", "素颜状态")}
        ${renderMappedFace(frontPhoto, "cool", "冷感腮红后")}
        <figure>
          <p class="mb-2 text-sm font-medium text-ink">对比</p>
          <div class="compare-split">
            <div class="pane pane-left">${front ? `<img src="${front}" alt="素颜半边">${overlaySvg(frontPhoto || "front", "map")}` : ""}</div>
            <div class="pane pane-right">${front ? `<img src="${front}" alt="化妆后半边">${overlaySvg(frontPhoto || "front", "cool")}` : ""}</div>
            <div class="divider"></div>
          </div>
          <figcaption class="mt-2 text-sm text-muted">效果特点：自然、清透、低饱和，提升气质感，缩短中庭。</figcaption>
        </figure>
      </div>
    </section>

    <section class="report-card mt-6">
      <h2 class="text-2xl text-ink">不同风格画法（都适合你）</h2>
      <p class="mt-2 text-sm text-muted">同一张本人正脸，只改变腮红面积和浓度。把腮红放在五官附近，用收缩色控制脸部外扩。</p>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        ${renderMappedFace(frontPhoto, "daily", "日常自然", "淡淡提气色，适合上课/通勤。")}
        ${renderMappedFace(frontPhoto, "sweet", "甜美氛围", "增加眼下与面中，适合约会/拍照。")}
        ${renderMappedFace(frontPhoto, "cool", "气质冷感", "横向收窄 + 斜向上，适合日常/职场。")}
        ${renderMappedFace(frontPhoto, "mood", "氛围宿醉", "鼻尖 + 眼下加强，适合拍照/出游。")}
      </div>
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <div class="rounded-2xl bg-surface-soft p-5">
          <h3 class="text-lg text-ink">化妆要点总结</h3>
          <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
            <li>✓ 眉毛清晰，眼妆拉长横向比例</li>
            <li>✓ 颧骨增加转折，少量收缩外轮廓</li>
            <li>✓ 保留个人特点，避免过度浓妆</li>
            <li>✓ 整体色调选择低饱和和冷色系雾面</li>
          </ul>
        </div>
        <div class="rounded-2xl bg-ink p-5 text-white">
          <h3 class="text-lg">适合你的风格：清冷 · 克制 · 精致</h3>
          <p class="mt-3 text-sm leading-6 text-white/80">通过化妆放大五官优势，增加面部线条感和立体感，在不改变个人特点的基础上提升精致度。季型仍是参考，不是定论。</p>
        </div>
      </div>
    </section>

    ${renderLiveLookSection("makeup")}
    ${renderLiveLookSection("outfit")}`;
}

function renderLiveLookSection(kind) {
  const isMakeup = kind === "makeup";
  const items = isMakeup ? state.pinterestMakeup : state.pinterestOutfit;
  const title = isMakeup ? "妆容参考（妆面图）" : "穿搭参考";
  const height = isMakeup ? "h-80" : "h-96";
  const intro = isMakeup
    ? "根据本份报告的妆容检索词实时检索 Pinterest，只保留妆面图，不放化妆品静物。文件夹里的图只用来说明“什么样的图算妆面参考”。"
    : "根据柔秋/柔夏色彩方向实时检索 Pinterest 穿搭图。文件夹里的图只是版式示例，不是本份报告结果。";
  let body = "";
  if (state.pinterestLoading && !items) {
    body = `<div class="mt-6 grid gap-5 sm:grid-cols-3">${[1, 2, 3].map(() => `
      <div class="h-80 animate-pulse rounded-2xl bg-blush-light"></div>`).join("")}</div>
      <p class="mt-4 text-sm text-muted">正在检索 Pinterest…</p>`;
  } else if (state.pinterestError && !items) {
    body = `<p class="mt-4 text-sm text-primary">${state.pinterestError}</p>
      <button class="btn-secondary mt-4" data-action="refresh-pins">重新检索</button>`;
  } else if (!items || !items.length) {
    body = `<p class="mt-4 text-sm text-muted">还没有检索到可用图片。</p>
      <button class="btn-secondary mt-4" data-action="refresh-pins">实时检索 Pinterest</button>`;
  } else {
    body = `<div class="mt-6 grid gap-5 sm:grid-cols-3">${items.map((look) => `
      <article class="overflow-hidden rounded-2xl border border-line">
        <img src="${look.src}" alt="${look.label || look.title}" class="${height} w-full object-cover object-top">
        <div class="p-4">
          <p class="text-lg text-ink">${look.label || look.title}</p>
          <p class="mt-2 text-sm leading-6 text-muted">${look.reason || look.title}</p>
          <a class="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline" href="${look.page || pinterestSearch(look.keyword)}" target="_blank" rel="noreferrer">Pinterest · ${look.keyword}</a>
        </div>
      </article>`).join("")}</div>`;
  }
  return `
    <section class="report-card mt-6">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 class="text-2xl text-ink">${title}</h2>
          <p class="mt-2 max-w-[44em] text-sm leading-6 text-muted">${intro}${state.pinterestFetchedAt ? ` 检索时间 ${state.pinterestFetchedAt}。` : ""}</p>
        </div>
        <button class="btn-secondary h-10 text-sm" data-action="refresh-pins" ${state.pinterestLoading ? "disabled" : ""}>${state.pinterestLoading ? "检索中…" : "重新检索"}</button>
      </div>
      ${body}
    </section>`;
}

function renderUpgrade() {
  return `
    ${renderNav()}
    <main class="mx-auto max-w-content px-6 py-12 lg:px-10">
      <h1 class="text-3xl font-medium text-ink lg:text-4xl">完整报告权益</h1>
      <p class="mt-4 max-w-[40em] text-lg leading-8 text-muted">单次购买，复用订单 ${state.orderNo || "当前测评"} 的输入快照。演示使用模拟支付，不会产生真实扣款。最终价格与付款时点待产品确认。</p>
      ${renderCompareTable()}
      <div class="mt-10 rounded-2xl border border-line bg-white p-8">
        <p class="text-sm text-primary">单次完整报告</p>
        <p class="mt-2 text-4xl text-ink">¥3.99 <span class="text-base text-muted">暂定</span></p>
        <p class="mt-4 leading-7 text-muted">付款前请了解：生成失败可免费重试一次；两次失败可申请原路退款。已成功交付后，喜好不满意不自动退款。在线访问期方向为 30 天。</p>
        <button class="btn-primary mt-6" data-action="mock-pay">模拟支付并解锁</button>
      </div>
    </main>
    ${renderFooter()}`;
}

function renderSupport() {
  const tabBtn = (id, label) => `<button class="rounded-full px-3 py-1.5 text-sm ${state.supportTab === id ? "bg-primary text-white" : "text-muted"}" data-support-tab="${id}">${label}</button>`;
  let body = "";
  if (state.supportTab === "faq") {
    body = FAQ.slice(0, 4).map((f) => `<div class="mb-4"><p class="text-sm font-medium text-ink">${f.q}</p><p class="mt-1 text-sm leading-6 text-muted">${f.a}</p></div>`).join("");
  } else if (state.supportTab === "query") {
    body = `
      <p class="text-sm leading-6 text-muted">请输入你的测试订单号，我们将为你查询报告。</p>
      <input id="support-order" class="mt-3 w-full rounded-xl border border-control px-3 py-2 text-sm" placeholder="例如 FMB..." value="${state.queryInput}">
      <button class="btn-primary mt-3 h-10 w-full text-sm" data-action="lookup">查询</button>
      ${state.queryResult ? `<div class="mt-4 rounded-xl bg-surface-soft p-3 text-sm leading-6 text-ink">${state.queryResult}</div>` : ""}`;
  } else {
    body = state.paid
      ? `<p class="text-sm leading-6 text-muted">售后入口面向付费订单。演示可申请模拟退款状态，不会连接支付渠道。</p>
         <input id="support-order" class="mt-3 w-full rounded-xl border border-control px-3 py-2 text-sm" placeholder="付费订单号" value="${state.queryInput}">
         <button class="btn-secondary mt-3 h-10 w-full text-sm" data-action="refund">申请退款</button>
         ${state.refundState ? `<p class="mt-3 text-sm text-ink">${state.refundState}</p>` : ""}`
      : `<p class="text-sm leading-6 text-muted">免费用户请使用「报告查询」进入失败重试。付费售后仅在完整报告订单中提供。</p>`;
  }
  return `
    <div class="fixed bottom-6 right-6 z-50">
      ${state.supportOpen ? `
        <div class="mb-3 w-[320px] rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_rgba(40,35,41,0.12)]">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-ink">智能客服</p>
            <button class="text-muted" data-action="toggle-support">关闭</button>
          </div>
          <div class="mt-3 flex gap-2">${tabBtn("query", "报告查询")}${tabBtn("after", "售后问题")}${tabBtn("faq", "常见问题")}</div>
          <div class="mt-4 max-h-80 overflow-auto">${body}</div>
        </div>` : ""}
      <button class="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg" data-action="toggle-support" aria-label="打开客服">${icon("chat")}</button>
    </div>`;
}

function render() {
  const root = $("app");
  const views = {
    home: renderHome,
    test: renderTest,
    confirm: renderConfirm,
    generating: renderGenerating,
    "basic-report": () => renderReport("basic"),
    "sample-report": () => renderReport("basic"),
    upgrade: renderUpgrade,
    "full-report": () => renderReport("full"),
  };
  root.innerHTML = (views[state.view] || renderHome)() + renderSupport();
  bind();
  if (state.view === "full-report" && !state.pinterestAttempted && !state.pinterestLoading) {
    loadPinterestLooks(false);
  }
}

function loadPinterestLooks(refresh) {
  if (state.pinterestLoading) return;
  state.pinterestLoading = true;
  state.pinterestAttempted = true;
  if (refresh) {
    state.pinterestMakeup = null;
    state.pinterestOutfit = null;
    state.pinterestError = null;
  }
  render();
  fetch(refresh ? "/api/pins?refresh=1" : "/api/pins")
    .then((res) => {
      if (!res.ok) throw new Error("检索接口不可用");
      return res.json();
    })
    .then((data) => {
      if (data.error) throw new Error(data.error);
      state.pinterestMakeup = data.makeup || [];
      state.pinterestOutfit = data.outfit || [];
      state.pinterestFetchedAt = data.fetched_at || "";
      state.pinterestError = (state.pinterestMakeup.length && state.pinterestOutfit.length)
        ? null
        : "检索结果不足，请重试。";
    })
    .catch(() => {
      state.pinterestError = "暂时无法获取 Pinterest 结果。请确认演示服务已启动，并在联网后重试。";
    })
    .finally(() => {
      state.pinterestLoading = false;
      render();
    });
}

function bind() {
  document.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => go(el.dataset.go)));
  document.querySelectorAll("[data-start]").forEach((el) => el.addEventListener("click", () => startChannel(el.dataset.start)));
  document.querySelectorAll("[data-action]").forEach((el) => el.addEventListener("click", () => handleAction(el.dataset.action)));
  document.querySelectorAll("[data-color]").forEach((el) => el.addEventListener("click", () => toggleColor(el.dataset.color)));
  document.querySelectorAll("[data-faq]").forEach((el) => el.addEventListener("click", () => {
    const i = Number(el.dataset.faq);
    state.faqOpen = state.faqOpen === i ? null : i;
    render();
  }));
  document.querySelectorAll("[data-remove-photo]").forEach((el) => el.addEventListener("click", () => removePhoto(el.dataset.removePhoto)));
  document.querySelectorAll("[data-support-tab]").forEach((el) => el.addEventListener("click", () => {
    state.supportTab = el.dataset.supportTab;
    render();
  }));

  const input = $("photo-input");
  if (input) {
    input.addEventListener("change", (e) => addFiles(e.target.files));
    const drop = input.parentElement;
    ["dragenter", "dragover"].forEach((evt) => drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.add("bg-surface-soft"); }));
    ["dragleave", "drop"].forEach((evt) => drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.remove("bg-surface-soft"); }));
    drop.addEventListener("drop", (e) => addFiles(e.dataTransfer.files));
  }
  const reportInput = $("report-photo-input");
  if (reportInput) {
    reportInput.addEventListener("change", (e) => addFiles(e.target.files, { replace: true, stayOnReport: true }));
  }
  const orderInput = $("support-order");
  if (orderInput) orderInput.addEventListener("input", (e) => { state.queryInput = e.target.value; });
}

function startChannel(channel) {
  state.channel = channel;
  state.paid = false;
  go("test");
}

function toggleColor(id) {
  if (state.selectedColors.includes(id)) state.selectedColors = state.selectedColors.filter((x) => x !== id);
  else state.selectedColors = [...state.selectedColors, id];
  persistSession();
  render();
}

async function addFiles(fileList, opts = {}) {
  const incoming = Array.from(fileList || []).filter((f) => f && f.type.startsWith("image/"));
  if (!incoming.length) return;
  if (opts.replace) {
    state.photos = state.photos.filter((p) => !isUserPhoto(p) && p.status === "fail");
  }
  for (const file of incoming) {
    const userCount = state.photos.filter(isUserPhoto).length;
    if (userCount >= 2) {
      state.photoIssue = "只需正脸和 45° 侧脸各 1 张。请先移除一张再上传。";
      break;
    }
    const hasFront = state.photos.some((p) => p.pose === "front" && isUserPhoto(p));
    const pose = hasFront ? "angle" : "front";
    const canvas = await fileToCanvas(file);
    const aligned = await alignPhoto(canvas, pose);
    state.photos.push({
      id: `p_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      name: file.name,
      url: aligned.url,
      pose,
      status: "pass",
      message: pose === "front" ? "通过：正脸可用于分析" : "通过：45° 侧脸可用于分析",
      zones: aligned.zones,
      aligned: true,
      zoneVersion: 2,
    });
  }
  state.photoIssue = photoGapMessage();
  persistSession();
  if (opts.stayOnReport || state.view === "full-report") {
    state.paid = true;
    state.taskStatus = "completed";
    state.view = "full-report";
  }
  render();
}

function removePhoto(id) {
  state.photos = state.photos.filter((p) => p.id !== id);
  if (!state.photos.some((p) => p.status === "fail")) state.photoIssue = null;
  persistSession();
  render();
}

function handleAction(action) {
  const actions = {
    "scroll-how": () => document.getElementById("how") ? document.getElementById("how").scrollIntoView({ behavior: "smooth" }) : go("home"),
    "scroll-sample": () => document.getElementById("sample") ? document.getElementById("sample").scrollIntoView({ behavior: "smooth" }) : go("home"),
    "scroll-faq": () => document.getElementById("faq") ? document.getElementById("faq").scrollIntoView({ behavior: "smooth" }) : go("home"),
    "open-query": () => { state.supportOpen = true; state.supportTab = "query"; render(); },
    "demo-pass": () => {
      state.photos = state.photos.filter((p) => p.status !== "fail");
      const demos = [
        { name: "示例-素颜正脸.jpg", url: DEMO_FRONT, pose: "front" },
        { name: "示例-45度侧面.jpg", url: DEMO_ANGLE, pose: "angle" },
      ];
      demos.forEach((item, i) => {
        const existing = state.photos.find((p) => p.pose === item.pose && String(p.name || "").startsWith("示例"));
        if (existing) {
          existing.url = item.url;
          existing.name = item.name;
          existing.aligned = false;
          existing.zones = null;
          return;
        }
        if (state.photos.filter((p) => p.status === "pass").length >= 2) return;
        if (state.photos.some((p) => p.pose === item.pose)) return;
        state.photos.push({
          id: `pass_${Date.now()}_${i}`,
          name: item.name,
          url: item.url,
          pose: item.pose,
          status: "pass",
          message: "通过：可用于分析",
        });
      });
      state.photoIssue = null;
      render();
    },
    "demo-fail": () => {
      if (state.photos.length >= 4) return;
      state.photos.push({
        id: `fail_${Date.now()}`,
        name: "示例-偏色照片.jpg",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        status: "fail",
        message: "不通过：光线偏黄，请在窗边自然光下关闭滤镜后重拍。",
      });
      state.photoIssue = "这张照片偏黄，请删除或替换后再进入分析。部分照片无效时不能静默混用。";
      render();
    },
    "to-confirm": () => {
      if (!canSubmitTest()) return;
      state.orderNo = makeOrderNo();
      localStorage.setItem("findmybeauty_order", state.orderNo);
      persistSession();
      go("confirm");
    },
    "copy-order": copyOrder,
    "confirm-generate": () => {
      state.taskStatus = "processing";
      localStorage.setItem("findmybeauty_task_id", `task_${state.orderNo}`);
      go("generating");
      clearTimeout(state.generatingTimer);
      state.generatingTimer = setTimeout(() => {
        state.taskStatus = "completed";
        render();
      }, 2200);
    },
    retry: () => handleAction("confirm-generate"),
    "toggle-export": () => { state.exportOpen = !state.exportOpen; render(); },
    "export-img": () => { state.exportOpen = false; alert("演示：将生成可下载长图。当前环境未连接导出服务。"); render(); },
    "export-pdf": () => { state.exportOpen = false; alert("演示：将生成 PDF。导出失败可重试，不会重新分析或扣费。"); render(); },
    "mock-pay": () => {
      state.paid = true;
      go("generating", { taskStatus: "processing" });
      clearTimeout(state.generatingTimer);
      state.generatingTimer = setTimeout(() => {
        state.taskStatus = "completed";
        go("full-report");
      }, 1800);
    },
    "refresh-pins": () => loadPinterestLooks(true),
    "toggle-support": () => { state.supportOpen = !state.supportOpen; render(); },
    lookup: () => {
      const q = ($("support-order")?.value || state.queryInput || "").trim();
      state.queryInput = q;
      if (!q) state.queryResult = "请输入完整订单号。";
      else if (state.orderNo && q === state.orderNo) {
        if (state.taskStatus === "completed") state.queryResult = `已完成。访问级别：${state.paid ? "完整报告" : "基础报告"}。可返回查看报告，并注意在线访问期。`;
        else if (state.taskStatus === "processing" || state.taskStatus === "pending") state.queryResult = "正在生成中。可打开进度页继续等待。后台任务不会因为离开页面而停止（演示为前端模拟）。";
        else if (state.taskStatus === "failed") state.queryResult = "生成失败。付费用户可重试；免费用户从查询进入重新生成。";
        else state.queryResult = "已找到订单，但尚未确认生成。";
      } else state.queryResult = "未找到该订单号，请检查后重新输入。";
      render();
    },
    refund: () => {
      const q = ($("support-order")?.value || "").trim();
      if (!state.paid) state.refundState = "未付款订单不能申请付费退款。";
      else if (q && q !== state.orderNo) state.refundState = "订单号不匹配。";
      else state.refundState = "演示：当前报告已交付，喜好不满意不触发自动退款。两次生成失败后才会进入原路退款。状态不会写成已到账。";
      render();
    },
  };
  actions[action]?.();
}

function restore() {
  const order = localStorage.getItem("findmybeauty_order");
  const task = localStorage.getItem("findmybeauty_task_id");
  if (order) state.orderNo = order;
  if (task && !state.taskStatus) state.taskStatus = "completed";
  try {
    const photos = JSON.parse(localStorage.getItem(PHOTO_STORE_KEY) || "[]");
    if (Array.isArray(photos) && photos.length) state.photos = photos.filter(isUserPhoto);
  } catch (_) { /* ignore */ }
  try {
    const colors = JSON.parse(localStorage.getItem(COLOR_STORE_KEY) || "[]");
    if (Array.isArray(colors) && colors.length) state.selectedColors = colors;
  } catch (_) { /* ignore */ }
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.view === "generating" && state.taskStatus === "completed") render();
});

restore();
  if (location.hash.replace("#", "") === "full-report") {
  state.view = "full-report";
  state.paid = true;
  state.taskStatus = "completed";
}
render();
ensureAlignedPhotos();
