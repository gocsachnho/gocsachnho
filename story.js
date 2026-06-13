// ============================================================
// STORY.JS — Logic trang chi tiết truyện
// ============================================================

/* ---------- Dark mode ---------- */
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
})();

function updateThemeIcon(theme) {
  const sun  = document.getElementById("iconSun");
  const moon = document.getElementById("iconMoon");
  if (!sun || !moon) return;
  sun.style.display  = theme === "dark" ? "block" : "none";
  moon.style.display = theme === "dark" ? "none"  : "block";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
});

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

/* ---------- Helpers ---------- */
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN");
}

function buildCoverSVG(story) {
  const colors = {
    "ma-lang-hoang-hon":      ["#2C1810", "#8B4513", "#D4492A"],
    "tinh-yeu-duoi-mua":      ["#1A2332", "#2E4D7B", "#6BB8E8"],
    "nguoi-ve-tu-bien-gioi":  ["#1A1F2E", "#2D3B5E", "#5A7FC4"],
  };
  const c = colors[story.id] || ["#1f1f1f", "#444", "#888"];
  const initials = story.title.split(" ").slice(0, 2).map(w => w[0]).join("");
  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g${story.id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c[1]}"/>
        <stop offset="100%" stop-color="${c[0]}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="300" fill="url(#g${story.id})"/>
    <rect x="16" y="16" width="168" height="268" fill="none" stroke="${c[2]}" stroke-width="1.5" rx="2" opacity="0.4"/>
    <text x="100" y="148" text-anchor="middle" dominant-baseline="middle"
      font-family="Georgia, serif" font-size="52" font-weight="700"
      fill="${c[2]}" opacity="0.9">${initials}</text>
    <text x="100" y="210" text-anchor="middle"
      font-family="Georgia, serif" font-size="13" fill="${c[2]}" opacity="0.7">${
        story.title.length > 20 ? story.title.substring(0,18)+"…" : story.title
      }</text>
  </svg>`;
}

/* ---------- Render story detail ---------- */
function renderStory(story) {
  // Update page title & meta
  document.title = `${story.title} — TruyệnHay`;
  document.getElementById("metaDesc").setAttribute("content", story.summary);

  const statusBadge = story.status === "Hoàn thành"
    ? `<span class="badge badge--complete">Hoàn thành</span>`
    : `<span class="badge badge--ongoing">Đang cập nhật</span>`;

  const chapterListHTML = story.chapters.map(ch => `
    <div class="chapter-item" onclick="location.href='chapter.html?story=${story.id}&chapter=${ch.id}'">
      <span class="chapter-item__title">${ch.title}</span>
      <span class="chapter-item__date">${formatDate(ch.updatedAt)}</span>
    </div>`).join("");

  document.getElementById("storyDetail").innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="breadcrumb">
      <a href="index.html">Trang chủ</a>
      <span class="sep">›</span>
      <a href="index.html#stories">Danh sách truyện</a>
      <span class="sep">›</span>
      <span>${story.title}</span>
    </nav>

    <!-- Story top section -->
    <div class="story-detail__top">
      <div class="story-detail__cover">${buildCoverSVG(story)}</div>

      <div class="story-detail__info">
        <h1>${story.title}</h1>

        <div class="story-detail__meta">
          <div class="meta-row">
            <span class="label">Tác giả:</span>
            <strong>${story.author}</strong>
          </div>
          <div class="meta-row">
            <span class="label">Thể loại:</span>
            <span>${story.genre.map(g => `<span class="tag">${g}</span>`).join(" ")}</span>
          </div>
          <div class="meta-row">
            <span class="label">Trạng thái:</span>
            ${statusBadge}
          </div>
          <div class="meta-row">
            <span class="label">Số chương:</span>
            <span>${story.chapters.length} chương</span>
          </div>
          <div class="meta-row">
            <span class="label">Cập nhật:</span>
            <span>${formatDate(story.updatedAt)}</span>
          </div>
          <div class="meta-row">
            <span class="label">Lượt đọc:</span>
            <span>${story.views.toLocaleString("vi-VN")}</span>
          </div>
        </div>

        <a href="chapter.html?story=${story.id}&chapter=1" class="btn" style="display:inline-block; margin-top:8px;">
          ▶ Đọc từ Chương 1
        </a>
      </div>
    </div>

    <!-- Summary -->
    <div>
      <div class="section-header"><h2>Tóm Tắt</h2></div>
      <div class="story-detail__summary">${story.summary}</div>
    </div>

    <!-- Chapter List -->
    <div class="chapter-list mt-32">
      <div class="section-header">
        <h2>Danh Sách Chương</h2>
        <span style="font-size:0.85rem; color:var(--text-muted)">${story.chapters.length} chương</span>
      </div>
      ${chapterListHTML}
    </div>`;
}

/* ---------- Init ---------- */
const params = new URLSearchParams(window.location.search);
const storyId = params.get("id");

if (storyId) {
  const story = getStoryById(storyId);
  if (story) {
    renderStory(story);
  } else {
    document.getElementById("storyDetail").innerHTML = `
      <div class="empty-state">
        <p>Không tìm thấy truyện này. <a href="index.html">← Về trang chủ</a></p>
      </div>`;
  }
} else {
  window.location.href = "index.html";
}
