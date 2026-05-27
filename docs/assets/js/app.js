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
    id: "analytical-overview",
    section: "product-sense",
    type: "lesson",
    image: "",
    tags: ["analytical", "PM", "overview"],
    title: {
      en: "Introduction to Analytical Questions",
      zh: "分析类 PM 面试题简介"
    },
    summary: {
      en: "Analytical PM questions test problem breakdown, goals, metrics, data reasoning, and product judgment.",
      zh: "分析类 PM 题考察问题拆解、目标设定、指标选择、数据推理和产品判断。"
    },
    body: {
      en: [
        { kind: "concept", title: "Core idea", text: "Analytical questions are structured product judgment questions. Strong answers combine data, logic, product context, and strategic thinking." },
        { kind: "list", title: "Common types", items: ["Metrics questions", "A/B testing questions", "Estimation questions", "Execution questions"] }
      ],
      zh: [
        { kind: "concept", title: "核心理解", text: "分析类问题本质上是结构化的产品判断题。好的答案需要把数据、逻辑、产品场景和战略思考结合起来。" },
        { kind: "list", title: "常见类型", items: ["指标题", "A/B 测试题", "估算题", "执行诊断题"] }
      ]
    }
  },
  {
    id: "ab-testing-framework",
    section: "product-sense",
    type: "framework",
    image: "../product-sense/assets/images/analytical-questions/how-to-answer-ab-testing-questions.png",
    tags: ["A/B test", "experimentation", "HMMIT"],
    title: {
      en: "How to Answer A/B Testing Questions",
      zh: "如何回答 A/B 测试类问题"
    },
    summary: {
      en: "Use Hypothesis, Methodology, Metrics, Impact, and Tradeoffs to structure experiment answers.",
      zh: "用 Hypothesis、Methodology、Metrics、Impact、Tradeoffs 组织实验题答案。"
    },
    body: {
      en: [
        { kind: "concept", title: "Framework", text: "Hypothesis -> Methodology -> Metrics -> Impact -> Tradeoffs." },
        { kind: "example", title: "Button example", text: "If a larger button is expected to increase CTR, define control and treatment cohorts, track CTR plus guardrails, and decide whether the redesign should launch." },
        { kind: "note", title: "Tradeoff", text: "A metric lift may hide user-experience costs, such as hurting other page elements or reducing meaningful interactions." }
      ],
      zh: [
        { kind: "concept", title: "框架", text: "假设 -> 方法 -> 指标 -> 影响 -> 权衡。" },
        { kind: "example", title: "按钮例子", text: "如果假设更大的按钮会提升 CTR，需要定义对照组和实验组，追踪 CTR 与护栏指标，再判断是否上线 redesign。" },
        { kind: "note", title: "权衡", text: "指标提升可能掩盖体验成本，例如伤害页面其他元素，或降低互动质量。" }
      ]
    }
  },
  {
    id: "metrics-game",
    section: "product-sense",
    type: "framework",
    image: "../product-sense/assets/images/analytical-questions/metrics/game-framework.png",
    tags: ["metrics", "GAME", "north star"],
    title: {
      en: "GAME Framework for Metrics Questions",
      zh: "指标题 GAME 框架"
    },
    summary: {
      en: "Clarify scope, define goals, map user actions, choose metrics, and evaluate weaknesses.",
      zh: "澄清范围、定义目标、映射用户行为、选择指标，并评估盲点。"
    },
    body: {
      en: [
        { kind: "concept", title: "GAME", text: "Clarify, Goals, Actions, Metrics, Evaluate." },
        { kind: "example", title: "Instagram Discover", text: "Goal: help users develop and expand interests. Candidate metric: time spent looking at content by user per session." },
        { kind: "note", title: "Metric weakness", text: "Time spent can mean genuine interest, but it can also mean boredom or failure to find satisfying content." }
      ],
      zh: [
        { kind: "concept", title: "GAME", text: "Clarify、Goals、Actions、Metrics、Evaluate。" },
        { kind: "example", title: "Instagram Discover", text: "目标：帮助用户发展并扩展兴趣。候选指标：每位用户每次 session 看内容的时长。" },
        { kind: "note", title: "指标弱点", text: "停留时长可能代表兴趣，也可能代表无聊或没有找到满意内容。" }
      ]
    }
  },
  {
    id: "analytical-rubric",
    section: "product-sense",
    type: "review",
    image: "../product-sense/assets/images/analytical-questions/rubrics/analytical-rubric.png",
    tags: ["rubric", "communication", "diagnosis"],
    title: {
      en: "Analytical Interview Rubric",
      zh: "分析类面试评分标准"
    },
    summary: {
      en: "Interviewers score analytical skills, critical thinking, and culture-fit signals.",
      zh: "面试官会评估分析能力、批判性思维和文化契合度信号。"
    },
    body: {
      en: [
        { kind: "list", title: "Core signals", items: ["Data literacy", "Comfort with metrics", "Diagnosis", "Prioritization", "Execution", "Communication", "Collaboration", "Curiosity"] },
        { kind: "note", title: "Very strong answer", text: "A very strong answer uses data effectively, scopes a solvable problem, prioritizes with clear logic, and treats the interviewer as a collaborator." }
      ],
      zh: [
        { kind: "list", title: "核心信号", items: ["数据素养", "指标运用", "问题诊断", "优先级排序", "执行计划", "沟通", "协作", "好奇心"] },
        { kind: "note", title: "Very Strong 的样子", text: "非常强的答案会有效使用数据，界定可解决的问题，用清楚逻辑排序优先级，并把面试官当作协作者。" }
      ]
    }
  },
  {
    id: "youtube-key-metrics",
    section: "product-sense",
    type: "practice",
    image: "../product-sense/assets/images/analytical-questions/exercises/youtube-key-metrics.png",
    tags: ["YouTube", "metrics", "engagement"],
    title: {
      en: "Pick YouTube's Key Metrics",
      zh: "选择 YouTube 的关键指标"
    },
    summary: {
      en: "Practice choosing three key metrics for YouTube Analytics and defending the tradeoffs.",
      zh: "练习为 YouTube Analytics 选择三个关键指标，并解释取舍。"
    },
    body: {
      en: [
        { kind: "concept", title: "Answer", text: "Average number of likes clicked per user, average video watch time per user, and average number of comments per user." },
        { kind: "note", title: "Watch time caveat", text: "High watch time is not always healthy; it may reflect addiction, passive browsing, or regretful time spent." },
        { kind: "note", title: "Comments caveat", text: "Comments indicate engagement, but may be negative. Pair comment volume with sentiment analysis." }
      ],
      zh: [
        { kind: "concept", title: "答案", text: "每位用户平均点赞数、每位用户平均观看时长、每位用户平均评论数。" },
        { kind: "note", title: "观看时长的陷阱", text: "高观看时长不一定健康，可能代表沉迷、被动浏览，或用户事后后悔的时间消耗。" },
        { kind: "note", title: "评论数的陷阱", text: "评论代表参与，但不一定正面。评论量最好搭配情感分析一起看。" }
      ]
    }
  }
];

const i18n = {
  en: {
    siteEyebrow: "Private Interview Library",
    siteTitle: "Data Science Interview Prep",
    searchPlaceholder: "Search notes, frameworks, cases...",
    heroEyebrow: "Current Focus",
    heroTitle: "Product Sense and Case Studies",
    heroCopy: "A bilingual review space for analytical PM questions, metrics frameworks, A/B testing, rubrics, and practice cases.",
    lessonsLabel: "Lessons",
    frameworksLabel: "Frameworks",
    practiceLabel: "Practice",
    tabAll: "All",
    tabLessons: "Lessons",
    tabFrameworks: "Frameworks",
    tabPractice: "Practice",
    tabReview: "Review Sheets",
    open: "Open",
    comingSoon: "This section is ready for future notes.",
    imageMissing: "Image slot reserved for original lesson image"
  },
  zh: {
    siteEyebrow: "私人面试知识库",
    siteTitle: "Data Science 面试复习",
    searchPlaceholder: "搜索笔记、框架、案例...",
    heroEyebrow: "当前重点",
    heroTitle: "产品感与案例分析",
    heroCopy: "一个中英文双语复习空间，用来整理 PM 分析题、指标框架、A/B 测试、评分标准和练习案例。",
    lessonsLabel: "课程",
    frameworksLabel: "框架",
    practiceLabel: "练习",
    tabAll: "全部",
    tabLessons: "课程",
    tabFrameworks: "框架",
    tabPractice: "练习",
    tabReview: "速查",
    open: "打开",
    comingSoon: "这个板块已预留，后续可以继续填充。",
    imageMissing: "已为原始课程图片预留位置"
  }
};

let lang = "en";
let activeSection = "product-sense";
let activeFilter = "all";
let search = "";

const nav = document.querySelector("#sectionNav");
const grid = document.querySelector("#cardsGrid");
const searchInput = document.querySelector("#searchInput");
const languageToggle = document.querySelector("#languageToggle");
const detailDialog = document.querySelector("#detailDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogType = document.querySelector("#dialogType");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");

function t(key) {
  return i18n[lang][key];
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
  document.querySelector("#frameworkCount").textContent = items.filter((item) => item.type === "framework").length;
  document.querySelector("#practiceCount").textContent = items.filter((item) => item.type === "practice").length;
}

function imageMarkup(item) {
  if (!item.image) {
    return `<div class="image-placeholder">${t("imageMissing")}</div>`;
  }
  return `<img src="${item.image}" alt="${item.title[lang]}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: 'image-placeholder', textContent: '${t("imageMissing")}'}))" />`;
}

function filteredItems() {
  return content.filter((item) => {
    const matchesSection = item.section === activeSection;
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
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
    <article class="card">
      <div class="card-media">${imageMarkup(item)}</div>
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

function blockMarkup(block) {
  if (block.kind === "list") {
    return `
      <div class="callout concept">
        <strong>${block.title}</strong>
        <ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `;
  }
  return `
    <div class="callout ${block.kind}">
      <strong>${block.title}</strong>
      <div>${block.text}</div>
    </div>
  `;
}

function openItem(id) {
  const item = content.find((entry) => entry.id === id);
  if (!item) return;
  dialogType.textContent = item.type;
  dialogTitle.textContent = item.title[lang];
  dialogBody.innerHTML = `
    ${item.image ? `<img src="${item.image}" alt="${item.title[lang]}" onerror="this.remove()" />` : ""}
    <p>${item.summary[lang]}</p>
    ${item.body[lang].map(blockMarkup).join("")}
    <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
  detailDialog.showModal();
}

function render() {
  applyLanguage();
  renderNav();
  renderCards();
}

nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;
  activeSection = button.dataset.section;
  activeFilter = "all";
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "all"));
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
  const button = event.target.closest("[data-open]");
  if (!button) return;
  openItem(button.dataset.open);
});

searchInput.addEventListener("input", (event) => {
  search = event.target.value;
  renderCards();
});

languageToggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  render();
});

closeDialog.addEventListener("click", () => detailDialog.close());

render();
