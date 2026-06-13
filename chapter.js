// ============================================================
// CHAPTER.JS — Logic trang đọc chương
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

/* ---------- Font size settings ---------- */
const FONT_SIZES = { small: "0.9rem", medium: "1.05rem", large: "1.2rem", xlarge: "1.35rem" };
let currentFontSize = localStorage.getItem("readerFontSize") || "medium";

function applyFontSize(size) {
  currentFontSize = size;
  localStorage.setItem("readerFontSize", size);
  document.querySelector(".reading-area").style.setProperty(
    "--reader-font-size", FONT_SIZES[size]
  );
  // Cập nhật trạng thái active của nút
  document.querySelectorAll(".font-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.size === size);
  });
}

/* ---------- Navigate to chapter ---------- */
function goToChapter(storyId, chapterId) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    window.location.href = `chapter.html?story=${storyId}&chapter=${chapterId}`;
  }, 100);
}

/* ---------- Render chapter ---------- */
function renderChapter(story, chapter) {
  const chapterIndex = story.chapters.findIndex(c => c.id === chapter.id);
  const prevChapter  = chapterIndex > 0 ? story.chapters[chapterIndex - 1] : null;
  const nextChapter  = chapterIndex < story.chapters.length - 1 ? story.chapters[chapterIndex + 1] : null;

  document.title = `${chapter.title} — ${story.title} — TruyệnHay`;

  // Build dropdown options
  const dropdownOptions = story.chapters.map(ch =>
    `<option value="${ch.id}" ${ch.id === chapter.id ? "selected" : ""}>${ch.title}</option>`
  ).join("");

  // Build nav buttons
  const prevBtn = prevChapter
    ? `<button class="btn btn--ghost" onclick="goToChapter('${story.id}', ${prevChapter.id})">← ${prevChapter.title}</button>`
    : `<button class="btn btn--ghost" disabled style="opacity:0.4; cursor:default;">← Đầu truyện</button>`;

  const nextBtn = nextChapter
    ? `<button class="btn" onclick="goToChapter('${story.id}', ${nextChapter.id})">${nextChapter.title} →</button>`
    : `<button class="btn" style="opacity:0.4; cursor:default;">Hết truyện ✓</button>`;

  document.getElementById("chapterReader").innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="breadcrumb">
      <a href="index.html">Trang chủ</a>
      <span class="sep">›</span>
      <a href="story.html?id=${story.id}">${story.title}</a>
      <span class="sep">›</span>
      <span>${chapter.title}</span>
    </nav>

    <!-- Toolbar: chapter select + nav buttons -->
    <div class="reader-toolbar">
      <select id="chapterSelect" aria-label="Chọn chương">
        ${dropdownOptions}
      </select>
      <div class="nav-btns">
        ${prevChapter
          ? `<button class="btn btn--ghost" onclick="goToChapter('${story.id}', ${prevChapter.id})">←</button>`
          : `<button class="btn btn--ghost" disabled style="opacity:0.4;">←</button>`}
        ${nextChapter
          ? `<button class="btn" onclick="goToChapter('${story.id}', ${nextChapter.id})">→</button>`
          : `<button class="btn" style="opacity:0.4; cursor:default;">→</button>`}
      </div>
    </div>

    <!-- Font size settings -->
    <div class="reader-settings">
      <label>Cỡ chữ:</label>
      <button class="font-btn" data-size="small">Nhỏ</button>
      <button class="font-btn" data-size="medium">Vừa</button>
      <button class="font-btn" data-size="large">To</button>
      <button class="font-btn" data-size="xlarge">Rất to</button>
    </div>

    <!-- Reading area -->
    <article class="reading-area" id="readingArea">
      <h2>${chapter.title}</h2>
      ${chapter.content}
    </article>

    <!-- Bottom navigation -->
    <div class="chapter-nav-bottom">
      ${prevBtn}
      <a href="story.html?id=${story.id}" class="btn btn--ghost" style="text-align:center;">
        📚 Danh sách chương
      </a>
      ${nextBtn}
    </div>`;

  // Initialize font size buttons
  applyFontSize(currentFontSize);

  document.querySelectorAll(".font-btn").forEach(btn => {
    btn.addEventListener("click", () => applyFontSize(btn.dataset.size));
  });

  // Chapter dropdown change
  document.getElementById("chapterSelect").addEventListener("change", function() {
    goToChapter(story.id, parseInt(this.value));
  });
}

/* ---------- Keyboard navigation ---------- */
document.addEventListener("keydown", e => {
  const params = new URLSearchParams(window.location.search);
  const storyId   = params.get("story");
  const chapterId = parseInt(params.get("chapter"));
  const story = getStoryById(storyId);
  if (!story) return;

  const idx = story.chapters.findIndex(c => c.id === chapterId);

  if (e.key === "ArrowLeft" && idx > 0) {
    goToChapter(storyId, story.chapters[idx - 1].id);
  }
  if (e.key === "ArrowRight" && idx < story.chapters.length - 1) {
    goToChapter(storyId, story.chapters[idx + 1].id);
  }
});

/* ---------- Init ---------- */
const params    = new URLSearchParams(window.location.search);
const storyId   = params.get("story");
const chapterId = parseInt(params.get("chapter"));

if (storyId && chapterId) {
  const story   = getStoryById(storyId);
  const chapter = getChapterById(storyId, chapterId);

  if (story && chapter) {
    renderChapter(story, chapter);
  } else {
    document.getElementById("chapterReader").innerHTML = `
      <div class="empty-state">
        <p>Không tìm thấy chương này. <a href="index.html">← Về trang chủ</a></p>
      </div>`;
  }
} else {
  window.location.href = "index.html";
}
