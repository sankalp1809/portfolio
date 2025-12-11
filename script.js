const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

const defaultResumeData = {
  name: "Sankalp Dubey",
  title: "Technical Product Manager",
  location: "Bangalore, India",
  contact: {
    email: "sankalp.dubey@gmail.com",
    phone: "+91 9811876329",
    linkedin: "https://www.linkedin.com/in/sankalpdubey",
  },
  summary:
    "Technical Product Manager specializing in AI-first products, enterprise integrations, and measurable delivery that lifts retention and efficiency.",
  focusAreas: [
    "AI products & platform strategy",
    "Enterprise & startup experience",
    "Outcome-driven product leadership",
  ],
  experiences: [
    {
      role: "Technical Product Manager",
      company: "AskSid (acquired by Gupshup)",
      dates: "Jun 2021 — Present",
      impact:
        "Owned AI chatbot and platform strategy; delivered a 27% retention uplift across 30+ enterprise clients while cutting agent handle time by over 20% and improving quality with an agile transition.",
    },
    {
      role: "Product Manager",
      company: "Razor Group",
      dates: "Jun 2019 — Jun 2021",
      impact:
        "Shaped product strategy for India and South Asia, driving 25% month-on-month customer growth through CRM modernization, API platform improvements, and data-driven dashboards.",
    },
    {
      role: "Co-Founder",
      company: "Intelligences Reports",
      dates: "Jul 2019 — Dec 2021",
      impact:
        "Built privacy-first AI marketing products, led B2B integrations end-to-end, and secured seed funding while operating across two countries.",
    },
  ],
  projects: [
    {
      name: "UpAyAI",
      context:
        "AI-powered product advisory chatbot with LLM-backed recommendations, analytics retrieval, and one-click embeds for web, mobile, and chat.",
      outcome: "Improved conversion and support efficiency for ecommerce clients by automating guidance and insights.",
      keywords: ["AI", "LLM", "chatbot", "recommendations", "product advisory", "analytics"],
    },
    {
      name: "Cost Efficiency AI",
      context:
        "NLP pipeline for RFPs and proposals using transformers, LLMs, and rule-based extraction to structure unorganized documents.",
      outcome: "Automated bid analysis reduced manual processing costs by ~40% while improving accuracy.",
      keywords: ["NLP", "RFP", "proposal", "document extraction", "LLM"],
    },
    {
      name: "CRM Modernization",
      context:
        "Revamped CRM and authentication for 8,000+ sales representatives with OTP flows and roadmap-driven enhancements.",
      outcome: "Enabled secure scale-up and aligned teams on a clear feature roadmap and KPIs.",
      keywords: ["CRM", "roadmap", "authentication", "scale"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science",
      institution: "Ajay Kumar Garg Engineering College",
      notes: "Solid engineering foundation supporting product and AI work.",
    },
  ],
  skills: [
    "Product Management",
    "Product Strategy",
    "Roadmapping",
    "A/B Testing",
    "Agile & Scrum",
    "AI Product Development",
    "LLMs",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "Python",
    "JavaScript",
    "SQL",
    "React",
    "Angular",
    "Node.js",
    "Cloud (AWS, Azure)",
    "Jira",
    "Confluence",
    "Notion",
    "Figma",
    "Linear",
    "Google Analytics",
    "Mixpanel",
    "LangChain",
    "LlamaIndex",
    "RAG",
    "Vector Databases",
    "OpenAI GPT-3.5/4",
    "Claude",
    "Gemini",
    "Platform: Web, Mobile, Desktop, Chatbots",
  ],
  knowledgeBase: [
    {
      intent: "experience",
      keywords: ["experience", "background", "career", "roles", "asksid", "razor", "intelligences"],
      answer:
        "I manage AI-first products. At AskSid I own chatbot and platform strategy with 27% retention uplift; previously at Razor Group I modernized CRM and drove 25% MoM growth, and I co-founded Intelligences Reports to build privacy-first marketing AI.",
    },
    {
      intent: "current role",
      keywords: ["current", "role", "job", "today", "now"],
      answer:
        "I'm a Technical Product Manager at AskSid (now part of Gupshup) focusing on enterprise AI chatbots, developer tooling, and efficiency gains for support teams.",
    },
    {
      intent: "projects",
      keywords: ["projects", "portfolio", "work", "examples", "upayai", "crm", "cost"],
      answer:
        "Recent projects include UpAyAI (LLM-based advisory chatbot), Cost Efficiency AI (NLP pipeline for RFPs), and CRM Modernization for 8k+ reps with OTP security.",
    },
    {
      intent: "skills",
      keywords: ["skills", "strengths", "toolkit", "expertise"],
      answer:
        "My toolkit spans product strategy, agile delivery, A/B testing, AI/LLMs, NLP, Python, JavaScript, React, cloud (AWS/Azure), and analytics with GA and Mixpanel.",
    },
    {
      intent: "project management",
      keywords: ["project management", "delivery", "agile", "scrum", "kanban", "roadmap", "risk"],
      answer:
        "I manage delivery with agile ceremonies, data-driven KPIs, and clear backlogs. I use MoSCoW prioritization, roadmap alignment, and weekly reviews to de-risk launches.",
    },
    {
      intent: "goals",
      keywords: ["goals", "objective", "future", "vision"],
      answer:
        "I'm focused on scaling AI-powered customer experiences, strengthening developer platforms and SDKs, and mentoring teams on outcome-driven product management.",
    },
    {
      intent: "contact",
      keywords: ["contact", "email", "phone", "linkedin"],
      answer: "You can reach me at sankalp.dubey@gmail.com, +91 9811876329, or linkedin.com/in/sankalpdubey.",
    },
  ],
};

const usingDefaultData = typeof resumeData === "undefined";
const data = !usingDefaultData ? resumeData : defaultResumeData;

function renderHero() {
  const heroTitle = document.getElementById("hero-title");
  const heroName = document.getElementById("hero-name");
  const heroSummary = document.getElementById("hero-summary");
  const heroMeta = document.getElementById("hero-meta");
  const heroCardList = document.getElementById("hero-card-list");
  const heroFocusPill = document.getElementById("hero-focus-pill");

  if (heroTitle) heroTitle.textContent = data.title || "Product Manager";
  if (heroName) heroName.textContent = data.name || "Portfolio";
  if (heroSummary) heroSummary.textContent = data.summary || "Building products with clear impact.";

  if (heroMeta) {
    heroMeta.innerHTML = "";
    const metaItems = [];
    if (data.location) metaItems.push(data.location);
    if (Array.isArray(data.focusAreas)) metaItems.push(...data.focusAreas);
    const uniqueMeta = Array.from(new Set(metaItems.filter(Boolean)));
    uniqueMeta.slice(0, 4).forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      heroMeta.appendChild(span);
    });
  }

  if (heroCardList) {
    heroCardList.innerHTML = "";
    const experiences = Array.isArray(data.experiences) ? data.experiences : [];
    experiences.slice(0, 3).forEach((exp, index) => {
      const li = document.createElement("li");
      const label = index === 0 ? "Current" : index === 1 ? "Previously" : "Also";
      li.innerHTML = `<strong>${label}:</strong> ${exp.role} at ${exp.company}`;
      heroCardList.appendChild(li);
    });
  }

  if (heroFocusPill) {
    const focusText = Array.isArray(data.focusAreas) && data.focusAreas.length > 0
      ? data.focusAreas[0]
      : "AI chatbots, CRM, growth & analytics";
    heroFocusPill.textContent = `Focus: ${focusText}`;
  }
}

function renderTimeline() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = "";
  data.experiences.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline__item";
    el.innerHTML = `
      <div>
        <div class="eyebrow">${item.dates}</div>
        <div class="timeline__meta">${item.company}</div>
      </div>
      <div>
        <h3>${item.role}</h3>
        <p>${item.impact}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";
  data.projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${proj.name}</h3>
      <p>${proj.context}</p>
      <p><strong>Outcome:</strong> ${proj.outcome}</p>
    `;
    grid.appendChild(card);
  });
}

function renderEducation() {
  const list = document.getElementById("education-list");
  list.innerHTML = "";
  data.education.forEach((edu) => {
    const el = document.createElement("div");
    el.className = "timeline__item";
    el.innerHTML = `
      <div>
        <div class="eyebrow">Education</div>
        <div class="timeline__meta">${edu.institution}</div>
      </div>
      <div>
        <h3>${edu.degree}</h3>
        <p>${edu.notes || ""}</p>
      </div>
    `;
    list.appendChild(el);
  });
}

function renderSkills() {
  const list = document.getElementById("skills-list");
  list.innerHTML = "";
  data.skills.forEach((skill) => {
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.textContent = skill;
    list.appendChild(pill);
  });
}

function appendMessage(text, isUser = false) {
  const bubble = document.createElement("div");
  bubble.className = `chat__bubble ${isUser ? "chat__bubble--user" : "chat__bubble--bot"}`;
  bubble.textContent = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function normalize(text) {
  return text.toLowerCase();
}

function isCareerRelated(question) {
  const keywords = [
    "career",
    "experience",
    "project",
    "management",
    "resume",
    "role",
    "product",
    "program",
    "skill",
    "goal",
    "agile",
    "scrum",
    "kanban",
    "deliver",
    "collaboration",
    "job",
    "llm",
    "ai",
    "chatbot",
    "roadmap",
  ];
  const text = normalize(question);
  return keywords.some((word) => text.includes(word));
}

function findAnswer(question) {
  const text = normalize(question);
  let bestMatch = null;
  let bestScore = 0;

  data.knowledgeBase.forEach((entry) => {
    const score = entry.keywords.reduce((acc, keyword) => (text.includes(keyword) ? acc + 1 : acc), 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  });

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  const highlightedProjects = data.projects.slice(0, 2).map((project) => project.name);
  const projectSummary = highlightedProjects.length > 0 ? ` Recent work includes ${highlightedProjects.join(" and ")}.` : "";
  const fallback = `Here's a quick overview: ${data.summary}${projectSummary}`;
  return fallback;
}

function handleChatSubmit(event) {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;

  appendMessage(question, true);

  if (!isCareerRelated(question)) {
    appendMessage("I'm here to discuss my professional experience, goals, and project management approach. Please ask about those topics.");
  } else {
    const answer = findAnswer(question);
    appendMessage(answer);
  }

  chatInput.value = "";
  chatInput.focus();
}

renderHero();
renderTimeline();
renderProjects();
renderEducation();
renderSkills();
appendMessage("Hi there! Ask me about my experience, projects, skills, or goals.");
if (usingDefaultData) {
  appendMessage(
    "Using the built-in profile so the static page still shows the UI. Add or update data/resume-data.js to personalize the content."
  );
}
chatForm.addEventListener("submit", handleChatSubmit);
