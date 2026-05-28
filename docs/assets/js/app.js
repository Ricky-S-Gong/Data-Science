const REPO_RAW_BASE = "https://raw.githubusercontent.com/Ricky-S-Gong/Data-Science/main/";
const ASSET_VERSION = "20260527-facebook-dau-v1";

const sections = [
  {
    id: "stats-experimentation",
    en: "Statistics and Experimentation Questions",
    zh: "统计与实验问题",
    enDesc: "A/B testing, statistical reasoning, experiment design.",
    zhDesc: "A/B 测试、统计推理、实验设计。"
  },
  {
    id: "data-communications",
    en: "Data Communications Questions",
    zh: "数据沟通问题",
    enDesc: "Explaining insights, dashboards, and tradeoffs clearly.",
    zhDesc: "清晰表达洞察、仪表盘和取舍。"
  },
  {
    id: "python-coding",
    en: "Python Coding Questions",
    zh: "Python 编程题",
    enDesc: "Python interview patterns and implementation practice.",
    zhDesc: "Python 面试模式和实现练习。"
  },
  {
    id: "sql-interviews",
    en: "SQL Interviews",
    zh: "SQL 面试",
    enDesc: "Query patterns, analytics SQL, and edge cases.",
    zhDesc: "查询模式、分析 SQL 和边界情况。"
  },
  {
    id: "product-sense",
    en: "Product Sense and Case Studies",
    zh: "产品感与案例分析",
    enDesc: "PM analytical questions, metrics, rubrics, and case practice.",
    zhDesc: "PM 分析题、指标、评分标准和案例练习。"
  },
  {
    id: "ml-coding",
    en: "ML Coding Questions",
    zh: "机器学习编程题",
    enDesc: "Implementing ML algorithms and model utilities.",
    zhDesc: "实现机器学习算法和模型工具。"
  },
  {
    id: "ml-concepts",
    en: "ML Concepts Questions",
    zh: "机器学习概念题",
    enDesc: "Model intuition, evaluation, data leakage, and tradeoffs.",
    zhDesc: "模型直觉、评估、数据泄漏和取舍。"
  }
];

const content = [
  {
    id: "email-campaign-ab-test",
    section: "stats-experimentation",
    type: "practice",
    source: {
      en: "statistics-experimentation/02-question-bank/ab-testing/ab-testing-email-campaign.en.md",
      zh: "statistics-experimentation/02-question-bank/ab-testing/ab-testing-email-campaign.zh.md"
    },
    image: "",
    tags: ["A/B test", "z-test", "conversion"],
    title: { en: "A/B Testing Email Campaign", zh: "A/B 测试邮件营销活动" },
    summary: {
      en: "Statistics practice for testing whether an UberEats email campaign increases signup conversion.",
      zh: "统计实验练习：检验 UberEats 邮件营销活动是否提升注册转化率。"
    }
  },
  {
    id: "analytical-overview",
    section: "product-sense",
    type: "lesson",
    source: {
      en: "product-sense/00-inbox/analytical-questions/01-introduction-to-analytical-questions.en.md",
      zh: "product-sense/00-inbox/analytical-questions/01-introduction-to-analytical-questions.zh.md"
    },
    image: "",
    tags: ["analytical", "PM", "overview"],
    title: { en: "Introduction to Analytical Questions", zh: "分析类 PM 面试题简介" },
    summary: {
      en: "Full lesson note with original text, refined Chinese, terms, and review notes.",
      zh: "完整课程笔记，包含中文润色、术语解释和复习注解。"
    }
  },
  {
    id: "ab-testing-framework",
    section: "product-sense",
    type: "lesson",
    source: {
      en: "product-sense/00-inbox/analytical-questions/02-how-to-answer-ab-testing-questions.en.md",
      zh: "product-sense/00-inbox/analytical-questions/02-how-to-answer-ab-testing-questions.zh.md"
    },
    image: "product-sense/assets/images/analytical-questions/how-to-answer-ab-testing-questions.png",
    tags: ["A/B test", "experimentation", "HMMIT"],
    title: { en: "How to Answer A/B Testing Questions", zh: "如何回答 A/B 测试类问题" },
    summary: {
      en: "Complete A/B testing lesson with the five-step framework, examples, notes, and tradeoffs.",
      zh: "完整 A/B 测试课程，包含五步框架、例子、提示和权衡分析。"
    }
  },
  {
    id: "metrics-game",
    section: "product-sense",
    type: "lesson",
    source: {
      en: "product-sense/00-inbox/analytical-questions/03-how-to-answer-metrics-questions.en.md",
      zh: "product-sense/00-inbox/analytical-questions/03-how-to-answer-metrics-questions.zh.md"
    },
    image: "product-sense/assets/images/analytical-questions/metrics/game-framework.png",
    tags: ["metrics", "GAME", "north star"],
    title: { en: "How to Answer Metrics Questions", zh: "如何回答指标类问题" },
    summary: {
      en: "Complete metrics lesson with the GAME framework, Instagram Discover example, metric types, and pitfalls.",
      zh: "完整指标题课程，包含 GAME 框架、Instagram Discover 示例、指标类型和常见错误。"
    }
  },
  {
    id: "analytical-rubric",
    section: "product-sense",
    type: "lesson",
    source: {
      en: "product-sense/00-inbox/analytical-questions/04-rubric-for-analytical-interviews.en.md",
      zh: "product-sense/00-inbox/analytical-questions/04-rubric-for-analytical-interviews.zh.md"
    },
    image: "product-sense/assets/images/analytical-questions/rubrics/analytical-rubric.png",
    tags: ["rubric", "communication", "diagnosis"],
    title: { en: "Rubric for Analytical Interviews", zh: "分析类面试评分标准" },
    summary: {
      en: "Complete analytical rubric lesson with score levels across data, metrics, diagnosis, execution, and culture fit.",
      zh: "完整分析类面试评分标准，覆盖数据、指标、诊断、执行和文化契合度。"
    }
  },
  {
    id: "youtube-key-metrics",
    section: "product-sense",
    type: "practice",
    source: {
      en: "product-sense/02-question-bank/metrics/pick-youtubes-key-metrics.en.md",
      zh: "product-sense/02-question-bank/metrics/pick-youtubes-key-metrics.zh.md"
    },
    image: "product-sense/assets/images/analytical-questions/exercises/youtube-key-metrics.png",
    tags: ["YouTube", "metrics", "engagement"],
    title: { en: "Pick YouTube's Key Metrics", zh: "选择 YouTube 的关键指标" },
    summary: {
      en: "Full practice answer for choosing three YouTube Analytics metrics and defending tradeoffs.",
      zh: "完整练习答案：为 YouTube Analytics 选择三个指标并解释取舍。"
    }
  },
  {
    id: "google-homepage-ab-test",
    section: "product-sense",
    type: "practice",
    source: {
      en: "product-sense/02-question-bank/ab-testing/ab-test-googles-homepage.en.md",
      zh: "product-sense/02-question-bank/ab-testing/ab-test-googles-homepage.zh.md"
    },
    image: "product-sense/assets/images/analytical-questions/exercises/google-homepage-shortcut-links.png",
    tags: ["Google", "A/B test", "homepage"],
    title: { en: "A/B Test Google's Homepage", zh: "对 Google 主页进行 A/B 测试" },
    summary: {
      en: "Practice case for proposing A/B tests on Google’s mobile homepage to increase search traffic.",
      zh: "练习案例：为 Google 移动端主页设计 A/B 测试，以提升搜索流量。"
    }
  },
  {
    id: "uber-passenger-pickup-variables",
    section: "product-sense",
    type: "practice",
    source: {
      en: "product-sense/02-question-bank/metrics/ubers-passenger-pickup-variables.en.md",
      zh: "product-sense/02-question-bank/metrics/ubers-passenger-pickup-variables.zh.md"
    },
    image: "",
    tags: ["Uber", "ETA", "variables"],
    title: { en: "Top 3 Variables for Uber Passenger Pickup ETA", zh: "Uber 接客 ETA 的三大关键变量" },
    summary: {
      en: "Practice case for ranking variables Uber could use beyond Google Maps ETA to estimate passenger pickup time.",
      zh: "练习案例：排序 Uber 在 Google Maps ETA 之外可用于估算接客时间的关键变量。"
    }
  },
  {
    id: "slack-connect-success-metrics",
    section: "product-sense",
    type: "practice",
    source: {
      en: "product-sense/02-question-bank/metrics/measure-success-for-slack-connect.en.md",
      zh: "product-sense/02-question-bank/metrics/measure-success-for-slack-connect.zh.md"
    },
    image: "",
    tags: ["Slack", "metrics", "launch"],
    title: { en: "Measure Success for Slack Connect", zh: "衡量 Slack Connect 的成功标准" },
    summary: {
      en: "Practice case for launching Slack Connect and choosing a North Star, supporting metrics, and guardrails.",
      zh: "练习案例：为 Slack Connect 设计发布策略、北极星指标、补充指标和护栏指标。"
    }
  },
  {
    id: "improving-facebook-dau",
    section: "product-sense",
    type: "practice",
    source: {
      en: "product-sense/02-question-bank/metrics/improving-facebooks-dau.en.md",
      zh: "product-sense/02-question-bank/metrics/improving-facebooks-dau.zh.md"
    },
    image: "",
    tags: ["Facebook", "DAU", "GAME"],
    title: { en: "Improving Facebook's DAU", zh: "提升 Facebook 的日活跃用户数" },
    summary: {
      en: "Practice answer for improving Facebook DAU through user loops, metrics, experiments, and guardrails.",
      zh: "练习答案：通过用户循环、指标、实验和护栏指标提升 Facebook DAU。"
    }
  },
  {
    id: "ab-testing-review",
    section: "product-sense",
    type: "cheatsheet",
    source: {
      en: "product-sense/99-cheatsheets/ab-testing-answer-framework.en.md",
      zh: "product-sense/99-cheatsheets/ab-testing-answer-framework.zh.md"
    },
    image: "",
    tags: ["review", "A/B test"],
    title: { en: "A/B Testing Review Sheet", zh: "A/B 测试速查页" },
    summary: { en: "High-signal review sheet for A/B testing answers.", zh: "A/B 测试答题速查页。" }
  },
  {
    id: "metrics-review",
    section: "product-sense",
    type: "cheatsheet",
    source: {
      en: "product-sense/99-cheatsheets/metrics-answer-framework.en.md",
      zh: "product-sense/99-cheatsheets/metrics-answer-framework.zh.md"
    },
    image: "",
    tags: ["review", "metrics"],
    title: { en: "Metrics Review Sheet", zh: "指标题速查页" },
    summary: { en: "High-signal review sheet for metrics answers.", zh: "指标题答题速查页。" }
  },
  {
    id: "product-sense-frameworks-cheatsheet",
    section: "product-sense",
    type: "cheatsheet",
    source: {
      en: "product-sense/99-cheatsheets/product-sense-frameworks-cheatsheet.en.md",
      zh: "product-sense/99-cheatsheets/product-sense-frameworks-cheatsheet.zh.md"
    },
    pdf: "product-sense/99-cheatsheets/product-sense-frameworks-cheatsheet.pdf",
    image: "",
    tags: ["PDF", "frameworks", "GAME", "HMMIT"],
    title: { en: "Product Sense Frameworks PDF", zh: "产品感框架 PDF" },
    summary: {
      en: "A single PDF summarizing all reusable frameworks from the current lessons.",
      zh: "一份 PDF，汇总当前课程中所有可调用的答题框架。"
    }
  }
];

const i18n = {
  en: {
    siteEyebrow: "One Home for DS Interviews",
    siteTitle: "Data Science Interview Prep",
    searchPlaceholder: "Search notes, frameworks, cases...",
    heroEyebrow: "Current Focus",
    heroTitle: "Product Sense and Case Studies",
    heroCopy: "A bilingual review space for analytical PM questions, metrics frameworks, A/B testing, rubrics, and practice cases.",
    lessonsLabel: "Lessons",
    cheatsheetsLabel: "Cheatsheets",
    practiceLabel: "Practice",
    tabLessons: "Lessons",
    tabPractice: "Practice",
    tabCheatsheets: "Cheatsheets",
    open: "Open Full Note",
    comingSoon: "This section is ready for future notes.",
    imageMissing: "Image failed to load.",
    loading: "Loading the full note...",
    pdfLabel: "Open PDF"
    ,
    backToLibrary: "Back to library"
  },
  zh: {
    siteEyebrow: "一个网站解决 DS 面试",
    siteTitle: "Data Science 面试宝典",
    searchPlaceholder: "搜索笔记、框架、案例...",
    heroEyebrow: "当前重点",
    heroTitle: "产品感与案例分析",
    heroCopy: "一个中英文双语复习空间，用来整理 PM 分析题、指标框架、A/B 测试、评分标准和练习案例。",
    lessonsLabel: "课程",
    cheatsheetsLabel: "Cheatsheet",
    practiceLabel: "练习",
    tabLessons: "课程",
    tabPractice: "练习",
    tabCheatsheets: "Cheatsheet",
    open: "打开完整笔记",
    comingSoon: "这个板块已预留，后续可以继续填充。",
    imageMissing: "图片加载失败。",
    loading: "正在加载完整笔记...",
    pdfLabel: "打开 PDF",
    backToLibrary: "返回目录"
  }
};

let lang = "en";
let activeSection = "product-sense";
let activeFilter = "lesson";
let search = "";

const nav = document.querySelector("#sectionNav");
const grid = document.querySelector("#cardsGrid");
const contentPane = document.querySelector(".content");
const heroPanel = document.querySelector(".hero-panel");
const tabs = document.querySelector(".tabs");
const searchInput = document.querySelector("#searchInput");
const languageToggle = document.querySelector("#languageToggle");
const readerPane = document.querySelector("#readerPane");
const readerType = document.querySelector("#readerType");
const readerTitle = document.querySelector("#readerTitle");
const readerBody = document.querySelector("#readerBody");
const backToLibrary = document.querySelector("#backToLibrary");

function t(key) {
  return i18n[lang][key];
}

function rawUrl(path) {
  return `${REPO_RAW_BASE}${path}`;
}

function versionedRawUrl(path) {
  return `${rawUrl(path)}?v=${ASSET_VERSION}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveRepoPath(basePath, relativePath) {
  if (/^(https?:)?\/\//.test(relativePath) || relativePath.startsWith("data:")) {
    return relativePath;
  }
  const parts = basePath.split("/").slice(0, -1);
  relativePath.split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") {
      parts.pop();
    } else {
      parts.push(part);
    }
  });
  return parts.join("/");
}

function resolveImageUrl(basePath, relativePath) {
  return versionedRawUrl(resolveRepoPath(basePath, relativePath));
}

function sourceFor(item) {
  return typeof item.source === "string" ? item.source : item.source[lang];
}

function renderInline(text, basePath) {
  let safe = escapeHtml(text);
  safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");
  safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  safe = safe.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    const url = resolveImageUrl(basePath, src);
    return `<img src="${url}" alt="${escapeHtml(alt)}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: 'image-error inline-missing', textContent: '${t("imageMissing")}'}))" />`;
  });
  safe = safe.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return safe;
}

function paragraph(lines, basePath) {
  return `<p>${renderInline(lines.join(" "), basePath)}</p>`;
}

function listBlock(lines, basePath) {
  return `<ul>${lines.map((line) => `<li>${renderInline(line.replace(/^- /, ""), basePath)}</li>`).join("")}</ul>`;
}

function orderedListBlock(lines, basePath) {
  return `<ol>${lines.map((line) => `<li>${renderInline(line.replace(/^\d+\.\s+/, ""), basePath)}</li>`).join("")}</ol>`;
}

function tableBlock(lines, basePath) {
  const rows = lines
    .filter((line) => !/^\|\s*-/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => renderInline(cell.trim(), basePath)));
  if (!rows.length) return "";
  const [head, ...body] = rows;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function markdownBlocksToHtml(lines, basePath) {
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    const calloutMatch = line.match(/^#### (Note Callout|Example Callout|复习注解)/);
    if (calloutMatch) {
      const kind = calloutMatch[1].startsWith("Example") ? "example" : calloutMatch[1] === "复习注解" ? "concept" : "note";
      const title = calloutMatch[1] === "复习注解" ? "复习注解" : calloutMatch[1].replace(" Callout", "");
      const collected = [];
      i += 1;
      while (i < lines.length && !/^#{1,4}\s+/.test(lines[i])) {
        if (!/^Type:\s+/.test(lines[i])) collected.push(lines[i]);
        i += 1;
      }
      html.push(`<div class="callout ${kind}"><strong>${title}</strong>${markdownBlocksToHtml(collected, basePath)}</div>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2], basePath)}</h${level}>`);
      i += 1;
      continue;
    }

    if (/^!\[/.test(line)) {
      html.push(`<figure>${renderInline(line, basePath)}</figure>`);
      i += 1;
      continue;
    }

    if (/^\|.*\|$/.test(line)) {
      const tableLines = [];
      while (i < lines.length && /^\|.*\|$/.test(lines[i])) {
        tableLines.push(lines[i]);
        i += 1;
      }
      html.push(tableBlock(tableLines, basePath));
      continue;
    }

    if (/^- /.test(line)) {
      const listLines = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        listLines.push(lines[i]);
        i += 1;
      }
      html.push(listBlock(listLines, basePath));
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const listLines = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        listLines.push(lines[i]);
        i += 1;
      }
      html.push(orderedListBlock(listLines, basePath));
      continue;
    }

    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s+/.test(lines[i]) &&
      !/^- /.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^\|.*\|$/.test(lines[i]) &&
      !/^!\[/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i += 1;
    }
    html.push(paragraph(paraLines, basePath));
  }

  return html.join("");
}

function markdownToHtml(markdown, basePath) {
  return `<article class="markdown-body">${markdownBlocksToHtml(markdown.split(/\r?\n/), basePath)}</article>`;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  languageToggle.textContent = lang === "en" ? "中文" : "EN";
}

function renderNav() {
  nav.innerHTML = sections.map((section) => {
    const count = content.filter((item) => item.section === section.id).length;
    const active = section.id === activeSection ? " active" : "";
    return `
      <button class="section-button${active}" type="button" data-section="${section.id}">
        <strong>${section[lang]}</strong>
        <span>${section[`${lang}Desc`]}</span>
        <span>${count ? `${count} ${lang === "en" ? "items" : "条内容"}` : t("comingSoon")}</span>
      </button>
    `;
  }).join("");
}

function renderStats(items) {
  document.querySelector("#lessonCount").textContent = items.filter((item) => item.type === "lesson").length;
  document.querySelector("#cheatsheetCount").textContent = items.filter((item) => item.type === "cheatsheet").length;
  document.querySelector("#practiceCount").textContent = items.filter((item) => item.type === "practice").length;
}

function filteredItems() {
  return content.filter((item) => {
    const matchesSection = item.section === activeSection;
    const matchesFilter = item.type === activeFilter;
    const haystack = [
      item.title.en,
      item.title.zh,
      item.summary.en,
      item.summary.zh,
      item.tags.join(" ")
    ].join(" ").toLowerCase();
    return matchesSection && matchesFilter && haystack.includes(search.toLowerCase());
  });
}

function renderCards() {
  const items = filteredItems();
  const sectionItems = content.filter((item) => item.section === activeSection);
  renderStats(sectionItems);

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">${t("comingSoon")}</div>`;
    return;
  }

  grid.innerHTML = items.map((item) => `
    <article class="card" tabindex="0" role="button" data-open="${item.id}">
      <div class="card-body">
        <span class="type-pill">${item.type}</span>
        <h3>${item.title[lang]}</h3>
        <p>${item.summary[lang]}</p>
        <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <button type="button" data-open="${item.id}">${t("open")}</button>
      </div>
    </article>
  `).join("");
}

async function openItem(id) {
  const item = content.find((entry) => entry.id === id);
  if (!item) return;
  const source = sourceFor(item);
  readerType.textContent = item.type;
  readerTitle.textContent = item.title[lang];
  readerBody.innerHTML = `<p>${t("loading")}</p>`;
  contentPane.classList.add("reading-mode");
  heroPanel.hidden = true;
  tabs.hidden = true;
  grid.hidden = true;
  readerPane.hidden = false;
  window.location.hash = `note=${item.id}`;
  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    const response = await fetch(versionedRawUrl(source), { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load ${source}`);
    const markdown = await response.text();
    readerBody.innerHTML = `
      ${item.pdf ? `<a class="pdf-link" href="${versionedRawUrl(item.pdf)}" target="_blank" rel="noreferrer">${t("pdfLabel")}</a>` : ""}
      ${markdownToHtml(markdown, source)}
    `;
  } catch (error) {
    readerBody.innerHTML = `<div class="callout note"><strong>Load error</strong><p>${escapeHtml(error.message)}</p></div>`;
  }
}

function closeReader() {
  readerPane.hidden = true;
  contentPane.classList.remove("reading-mode");
  heroPanel.hidden = false;
  tabs.hidden = false;
  grid.hidden = false;
  if (window.location.hash.startsWith("#note=")) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function render() {
  applyLanguage();
  renderNav();
  renderCards();
  if (!readerPane.hidden) {
    const id = window.location.hash.replace("#note=", "");
    const item = content.find((entry) => entry.id === id);
    if (item) {
      readerType.textContent = item.type;
      readerTitle.textContent = item.title[lang];
    }
  }
}

nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;
  activeSection = button.dataset.section;
  activeFilter = "lesson";
  closeReader();
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "lesson"));
  render();
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab === button));
  renderCards();
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-open]");
  if (!card) return;
  openItem(card.dataset.open);
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-open]");
  if (!card) return;
  event.preventDefault();
  openItem(card.dataset.open);
});

searchInput.addEventListener("input", (event) => {
  search = event.target.value;
  renderCards();
});

languageToggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  render();
  if (!readerPane.hidden) {
    const id = window.location.hash.replace("#note=", "");
    if (id) openItem(id);
  }
});

backToLibrary.addEventListener("click", closeReader);

window.addEventListener("hashchange", () => {
  const id = window.location.hash.replace("#note=", "");
  if (id) openItem(id);
});

render();

const initialNoteId = window.location.hash.startsWith("#note=") ? window.location.hash.replace("#note=", "") : "";
if (initialNoteId) {
  openItem(initialNoteId);
}
