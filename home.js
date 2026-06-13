// ============================================================
// HOME.JS — Logic trang chủ
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
  if (theme === "dark") {
    sun.style.display  = "block";
    moon.style.display = "none";
  } else {
    sun.style.display  = "none";
    moon.style.display = "block";
  }
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
});

/* ---------- Hamburger menu ---------- */
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

/* ---------- Build Story Card HTML ---------- */
function buildCoverSVG(story) {
  // Tạo ảnh bìa placeholder dựa trên màu từ ID
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
      font-family="Georgia, serif" font-size="13" fill="${c[2]}" opacity="0.7"
      style="max-width:160px">${story.title.length > 20 ? story.title.substring(0,18)+"…" : story.title}</text>
  </svg>`;
}

function storyCardHTML(story) {
  const latestChapter = story.chapters[story.chapters.length - 1];
  const statusBadge = story.status === "Hoàn thành"
    ? `<span class="badge badge--complete">Hoàn thành</span>`
    : `<span class="badge badge--ongoing">Đang ra</span>`;

  return `
    <div class="story-card" onclick="location.href='story.html?id=${story.id}'">
      <div class="story-card__cover">${buildCoverSVG(story)}</div>
      <div class="story-card__body">
        <div class="story-card__title">${story.title}</div>
        <div class="story-card__meta">
          ${story.author} · ${story.chapters.length} chương
        </div>
        <div class="story-card__tags">
          ${story.genre.map(g => `<span class="tag">${g}</span>`).join("")}
          ${statusBadge}
        </div>
        <div class="story-card__meta mt-8" style="font-size:0.75rem;">
          Mới nhất: ${latestChapter.title.replace(/^Chương \d+: /, "")}
        </div>
      </div>
    </div>`;
}

/* ---------- Render grids ---------- */
function renderFeatured() {
  const featured = STORIES.filter(s => s.featured);
  document.getElementById("featuredGrid").innerHTML =
    featured.length ? featured.map(storyCardHTML).join("") : `<p class="text-muted">Chưa có truyện nổi bật.</p>`;
}

function renderAll(list) {
  const grid = document.getElementById("allStoriesGrid");
  const count = document.getElementById("storyCount");
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <p>Không tìm thấy truyện nào.<br>Thử từ khóa khác nhé!</p></div>`;
    count.textContent = "0 truyện";
    return;
  }
  grid.innerHTML = list.map(storyCardHTML).join("");
  count.textContent = `${list.length} truyện`;
}

/* ---------- Genre filter ---------- */
function renderGenreFilter() {
  const genres = getAllGenres();
  const container = document.getElementById("genreFilter");
  genres.forEach(g => {
    const btn = document.createElement("button");
    btn.className = "genre-tag";
    btn.dataset.genre = g;
    btn.textContent = g;
    container.appendChild(btn);
  });
}

let activeGenre = "all";
let searchQuery  = "";

function getFiltered() {
  return STORIES.filter(s => {
    const matchGenre  = activeGenre === "all" || s.genre.includes(activeGenre);
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      s.title.toLowerCase().includes(q) ||
      s.author.toLowerCase().includes(q) ||
      s.genre.some(g => g.toLowerCase().includes(q));
    return matchGenre && matchSearch;
  });
}

document.getElementById("genreFilter").addEventListener("click", e => {
  const btn = e.target.closest(".genre-tag");
  if (!btn) return;
  document.querySelectorAll(".genre-tag").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeGenre = btn.dataset.genre;
  renderAll(getFiltered());
});

/* ---------- Search ---------- */
const searchInput = document.getElementById("searchInput");

function doSearch() {
  searchQuery = searchInput.value.trim();
  renderAll(getFiltered());
  if (searchQuery) {
    document.getElementById("stories").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.getElementById("searchBtn").addEventListener("click", doSearch);

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
});

// Live search (debounced)
let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchQuery = searchInput.value.trim();
    renderAll(getFiltered());
  }, 300);
});

/* ---------- Init ---------- */
renderGenreFilter();
renderFeatured();
renderAll(STORIES);
