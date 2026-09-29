const featuredProjects = [
  {
    id: 1,
    title: "黑金泰国风蝴蝶贴包装设计",
    type: "包装设计 / 产品包装",
    category: "care",
    image: "images/thai-butterfly-packaging.jpg",
    keywords: ["黑金视觉", "异域风格", "系列包装"],
    background: "面向注重品质感与文化辨识度的养生消费人群，建立更具礼赠属性的产品包装形象。",
    goal: "强化产品的高级感与地域气质，在同类产品中形成鲜明、易识别的货架视觉。",
    description: "以深色基调承托金色细节，通过图形层级、留白与材质对比，平衡传统感和现代商业表达。"
  },
  {
    id: 2,
    title: "健身达人饼干包装设计",
    type: "食品包装 / 系列设计",
    category: "food",
    image: "images/fitness-cookie-packaging.jpg",
    keywords: ["轻食概念", "信息分级", "年轻化"],
    background: "针对关注成分、热量与便携性的年轻消费群体，塑造清晰直接的轻食产品形象。",
    goal: "让核心卖点在快速浏览中被识别，同时建立适合系列口味延展的包装结构。",
    description: "利用高识别色块与模块化版式组织产品信息，强化口味区分，并保留统一的品牌视觉秩序。"
  },
  {
    id: 3,
    title: "苹果礼箱包装设计",
    type: "食品包装 / 礼盒设计",
    category: "food",
    image: "images/apple-gift-box.jpg",
    keywords: ["农产品", "礼赠场景", "系列延展"],
    background: "为农产品礼赠市场打造兼具产地感、节庆感和现代审美的苹果礼箱。",
    goal: "提升产品礼赠价值与陈列吸引力，并兼顾运输、手提和开箱体验。",
    description: "围绕果实色彩构建主视觉，以简洁图形和大面积色块形成远距离识别，统一礼箱与配套物料。"
  },
  {
    id: 4,
    title: "牛肉产品包装设计",
    type: "食品包装 / 产品系列",
    category: "food",
    image: "images/beef-packaging.jpg",
    keywords: ["风味表达", "货架视觉", "包装结构"],
    background: "休闲牛肉产品需要从传统同质化包装中脱颖而出，并清楚传达口味与产品价值。",
    goal: "建立有食欲、有记忆点且便于不同规格延展的系列视觉系统。",
    description: "使用高饱和暖色与产品场景形成视觉焦点，通过标签化信息模块强化口味、规格和卖点表达。"
  },
  {
    id: 5,
    title: "湿厕纸海报视觉设计",
    type: "电商视觉 / 海报视觉",
    category: "graphic",
    image: "images/wet-wipes-poster.jpg",
    keywords: ["清洁感", "产品卖点", "电商传播"],
    background: "为清洁护理类产品建立适合电商页面和社交传播的主视觉表达。",
    goal: "快速传达柔软、洁净与安心感，降低消费者理解产品功能的成本。",
    description: "以清透色彩、轻盈空间和直观产品构图突出使用感受，让功能信息与品牌气质保持一致。"
  },
  {
    id: 6,
    title: "驱蚊液产品主图设计",
    type: "日化护理 / 电商主图",
    category: "care",
    image: "images/mosquito-product-visual.jpg",
    keywords: ["产品主图", "功能可视化", "场景表达"],
    background: "日化驱蚊产品需要在电商首屏中同时传达功效、成分与家庭使用安全感。",
    goal: "形成清晰的产品焦点，并通过视觉场景帮助消费者快速理解使用价值。",
    description: "使用自然色系与聚焦式构图强化产品主体，通过图标和卖点分级提升移动端信息阅读效率。"
  },
  {
    id: 7,
    title: "止痒膏包装设计",
    type: "日化护理 / 护理包装",
    category: "care",
    image: "images/itch-relief-packaging.jpg",
    keywords: ["专业感", "药妆视觉", "系列识别"],
    background: "护理类产品既要表达专业可信，也要避免传统药品包装带来的距离感。",
    goal: "建立干净、可靠、容易理解的产品形象，并支持不同功能产品的系列化。",
    description: "以克制留白和清晰色彩编码建立专业秩序，突出品名、核心功效及使用场景。"
  },
  {
    id: 8,
    title: "品牌图标与插画元素设计",
    type: "品牌升级 / 视觉资产",
    category: ["brand", "other"],
    image: "images/brand-icons-illustration.jpg",
    keywords: ["图标系统", "品牌插画", "视觉延展"],
    background: "品牌需要一套可用于包装、社交媒体与推广物料的统一图形资产。",
    goal: "提升品牌亲和力和内容表达效率，让不同触点保持一致识别。",
    description: "提炼产品特征和品牌性格，建立统一线条、色彩与造型语言，形成可持续扩展的视觉素材库。"
  }
];

const projects = [
  ...((window.galleryProjects && window.galleryProjects.length) ? window.galleryProjects : featuredProjects)
];

const portfolioGrid = document.querySelector("#portfolioGrid");
const filterButtons = document.querySelectorAll("#portfolioFilters button");
const modal = document.querySelector("#projectModal");
const modalClose = modal.querySelector(".modal-close");
const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");
const siteHeader = document.querySelector("#siteHeader");

function projectTemplate(project) {
  const categories = Array.isArray(project.category) ? project.category.join(" ") : project.category;
  return `
    <article class="project-card reveal" data-category="${categories}" data-id="${project.id}" tabindex="0" role="button" aria-label="查看${project.title}详情">
      <div class="project-cover">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <p class="project-type">${project.type}</p>
        <h3>${project.title}</h3>
        <p class="project-summary">${project.description}</p>
        <p class="project-keywords">${project.keywords.join(" / ")}</p>
      </div>
    </article>
  `;
}

function renderProjects() {
  portfolioGrid.innerHTML = projects.map(projectTemplate).join("");

  portfolioGrid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(Number(card.dataset.id)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(Number(card.dataset.id));
      }
    });
  });

  observeReveals();
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const detailImages = project.images || [project.image];
  const modalImage = document.querySelector("#modalImage");
  const modalGallery = document.querySelector("#modalGallery");

  modalImage.src = detailImages[0];
  modalImage.alt = project.title;
  document.querySelector("#modalType").textContent = project.type;
  document.querySelector("#modalTitle").textContent = project.title;
  document.querySelector("#modalKeywords").textContent = project.keywords.join(" · ");
  document.querySelector("#modalBackground").textContent = project.background;
  document.querySelector("#modalGoal").textContent = project.goal;
  document.querySelector("#modalDescription").textContent = project.description;
  modalGallery.innerHTML = detailImages.map((image, index) => `
    <button class="${index === 0 ? "active" : ""}" type="button" data-image="${image}" aria-label="查看第 ${index + 1} 张效果图">
      <img src="${image}" alt="${project.title}效果图 ${index + 1}">
    </button>
  `).join("");

  modalGallery.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      modalGallery.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
      modalImage.src = button.dataset.image;
    });
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));

    document.querySelectorAll(".project-card").forEach(card => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

modalClose.addEventListener("click", closeProject);
modal.addEventListener("click", event => {
  if (event.target === modal) closeProject();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProject();
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("open");
  siteNav.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    siteNav.querySelectorAll("a").forEach(link => {
      const isPrimary = link.dataset.primary !== "false";
      link.classList.toggle("active", isPrimary && link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 18);
}, { passive: true });

let revealObserver;

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
  }

  document.querySelectorAll(".reveal:not(.visible)").forEach(element => revealObserver.observe(element));
}

document.querySelector("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.querySelector("#formStatus");
  status.textContent = "已记录你的合作意向，也可以直接通过微信 Ting20141110 或邮箱 1556938925@qq.com 联系我。";
  event.currentTarget.reset();
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();

renderProjects();
observeReveals();
