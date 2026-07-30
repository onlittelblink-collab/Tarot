/* =========================================================================
   ONI ETHEREAL TAROT - app.js
   Dieu khien: nav, starfield nen, intro/continue flow, flashcard academy,
   virtual reader.
   Du lieu 78 la bai duoc nap san tu js/data.js (TAROT_CARDS).
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initStarfield();
  initRevealOnScroll();
  initContinueFlows();
  initAcademy();
  initReader();
});

/* ---------------------------------------------------------------------
   NAV
   --------------------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    links.classList.toggle("mobile-open", open);
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("mobile-open");
    });
  });
}

/* ---------------------------------------------------------------------
   STARFIELD (canvas ambience, nhe, ton trong prefers-reduced-motion)
   --------------------------------------------------------------------- */
function initStarfield() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(160, Math.floor((w * h) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.15,
      speed: Math.random() * 0.4 + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    stars.forEach((s) => {
      const twinkle = reduceMotion ? 0 : Math.sin(t / 900 * s.speed + s.phase) * 0.3;
      ctx.globalAlpha = Math.max(0, Math.min(1, s.baseAlpha + twinkle));
      ctx.fillStyle = "#F8F0FF";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw(0);
}

/* ---------------------------------------------------------------------
   REVEAL ON SCROLL
   --------------------------------------------------------------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------
   INTRO -> CONTINUE FLOWS (Academy va Reader deu co man hinh dan nhap
   truoc, bam "Ke tiep" moi hien noi dung chinh)
   --------------------------------------------------------------------- */
function initContinueFlows() {
  setupFlow("academy-intro", "academy-main", "academy-continue-btn");
  setupFlow("reader-intro", "reader-main", "reader-continue-btn");
}

function setupFlow(introId, mainId, btnId) {
  const intro = document.getElementById(introId);
  const main = document.getElementById(mainId);
  const btn = document.getElementById(btnId);
  if (!intro || !main || !btn) return;

  btn.addEventListener("click", () => {
    intro.classList.add("flow-hidden");
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      requestAnimationFrame(() => main.classList.add("flow-visible"));
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 420);
  });
}

/* ---------------------------------------------------------------------
   ACADEMY (Flashcard system)
   --------------------------------------------------------------------- */
function initAcademy() {
  const grid = document.getElementById("card-grid");
  const searchInput = document.getElementById("card-search");
  const resultsCount = document.getElementById("results-count");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const suitFilterWrap = document.getElementById("suit-filters");
  const suitChips = document.querySelectorAll(".suit-chip");

  let state = { arcana: "major", suit: "all", query: "" };

  function matches(card) {
    if (card.arcana !== state.arcana) return false;
    if (state.arcana === "minor" && state.suit !== "all" && card.suit !== state.suit) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      const hay = [
        card.name_vi, card.name_en, card.meaning_jung,
        ...(card.keywords_upright || []),
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  const SUIT_EN = { wands: "Wand", cups: "Cup", swords: "Sword", pentacles: "Pentacle" };

  function cardBackHTML(card) {
    const eyebrow = card.arcana === "major" ? "Major Arcana" : (SUIT_EN[card.suit] || "");
    return [
      '<div class="flash-back-eyebrow">' + escapeHTML(eyebrow) + "</div>",
      '<div class="flash-back-title">' + escapeHTML(card.name_en) + "</div>",
      '<p class="flash-back-text">' + escapeHTML(card.meaning_upright || "") + "</p>",
      '<p class="flash-back-question">' + escapeHTML(card.meaning_jung || "") + "</p>",
      '<div class="flash-back-keywords">' +
        (card.keywords_upright || []).slice(0, 4).map(function (k) {
          return '<span class="kw-tag">' + escapeHTML(k) + "</span>";
        }).join("") +
        "</div>",
    ].join("");
  }

  function render() {
    const filtered = TAROT_CARDS.filter(matches);
    resultsCount.textContent = "Hiển thị " + filtered.length + " / " + TAROT_CARDS.length + " lá bài";

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="no-results">Không tìm thấy lá bài nào khớp với "' + escapeHTML(state.query) + '".</div>';
      return;
    }

    grid.innerHTML = filtered.map(function (card) {
      return [
        '<div class="flash-card" data-id="' + card.id + '" tabindex="0" role="button"',
        ' aria-label="Lật lá ' + escapeHTML(card.name_en) + ' để xem ý nghĩa">',
        '<div class="flash-card-inner">',
        '<div class="flash-face flash-front">',
        '<img src="' + card.image + '" alt="Hình minh hoạ lá ' + escapeHTML(card.name_en) + '" loading="lazy">',
        '<div class="flash-front-label">',
        '<div class="flash-front-name">' + escapeHTML(card.name_en) + "</div>",
        "</div></div>",
        '<div class="flash-face flash-back">' + cardBackHTML(card) + "</div>",
        "</div></div>",
      ].join("");
    }).join("");

    grid.querySelectorAll(".flash-card").forEach(function (el) {
      const flip = function () { el.classList.toggle("flipped"); };
      el.addEventListener("click", flip);
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
      });
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.arcana = btn.dataset.arcana;
      suitFilterWrap.style.display = state.arcana === "minor" ? "flex" : "none";
      render();
    });
  });

  suitChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      suitChips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      state.suit = chip.dataset.suit;
      render();
    });
  });

  let debounceTimer;
  searchInput.addEventListener("input", function (e) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      state.query = e.target.value.trim();
      render();
    }, 150);
  });

  render();
}

/* ---------------------------------------------------------------------
   VIRTUAL READER (Boc bai / Trai Bai Thong Diep)
   Nguoi dung chon la bai bang con tro (keo) tren may tinh hoac thao tac
   cham (vuot/nham) tren dien thoai, giong nhu trai bai that.
   --------------------------------------------------------------------- */
function initReader() {
  const spreadBtns = document.querySelectorAll(".spread-btn");
  const table = document.getElementById("spread-table");
  const slotsWrap = document.getElementById("spread-slots");
  const readingPanel = document.getElementById("reading-panel");
  const readingCardsWrap = document.getElementById("reading-cards");
  const summaryText = document.getElementById("summary-text");
  const resetBtn = document.getElementById("reset-reading-btn");
  const drawBtn = document.getElementById("draw-btn");
  const fanWrap = document.getElementById("deck-fan-wrap");
  const fanHint = document.getElementById("deck-fan-hint");
  const fanEl = document.getElementById("deck-fan");

  const READER_SPREADS = {
    one_card: {
      id: "one_card",
      positions: [{ label_vi: "Thông điệp hôm nay" }],
    },
    three_card: {
      id: "three_card",
      positions: [
        { label_vi: "Lá 1" },
        { label_vi: "Lá 2" },
        { label_vi: "Lá 3" },
      ],
    },
  };

  let selectedSpread = null;
  let shuffledDeck = [];
  let picked = [];
  let drawnCards = [];

  spreadBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      spreadBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      selectedSpread = READER_SPREADS[btn.dataset.spread];
      drawBtn.disabled = false;
    });
  });

  drawBtn.addEventListener("click", function () {
    if (!selectedSpread) return;
    openDeckFan(selectedSpread);
  });

  resetBtn.addEventListener("click", function () {
    table.classList.remove("active");
    readingPanel.classList.remove("active");
    fanWrap.classList.remove("active");
    slotsWrap.innerHTML = "";
    readingCardsWrap.innerHTML = "";
    fanEl.innerHTML = "";
    picked = [];
    drawnCards = [];
    spreadBtns.forEach(function (b) { b.classList.remove("active"); });
    selectedSpread = null;
    drawBtn.disabled = true;
    document.getElementById("reader-question").value = "";
    document.getElementById("reader-main").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---- Buoc 1: mo bo bai, cho phep keo/cham de chon la ---- */
  function openDeckFan(spread) {
    readingPanel.classList.remove("active");
    table.classList.remove("active");
    readingCardsWrap.innerHTML = "";
    slotsWrap.innerHTML = "";
    picked = [];

    shuffledDeck = TAROT_CARDS.map(function (card) {
      return { card: card, reversed: Math.random() < 0.35 };
    });
    shuffleArray(shuffledDeck);

    fanEl.innerHTML = shuffledDeck.map(function (item, i) {
      return '<div class="fan-card" data-index="' + i + '" tabindex="0" role="button" aria-label="Chọn lá bài"></div>';
    }).join("");

    updateFanHint(spread);
    fanWrap.classList.add("active");
    setupFanDrag(fanEl);

    fanEl.querySelectorAll(".fan-card").forEach(function (el) {
      el.addEventListener("click", function () {
        if (fanEl.dataset.wasDrag === "1") return;
        toggleFanSelect(el, spread);
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFanSelect(el, spread); }
      });
    });

    fanWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateFanHint(spread) {
    const need = spread.positions.length;
    fanHint.textContent = "Hãy chạm hoặc kéo để chọn " + need + " lá bài (đã chọn " + picked.length + "/" + need + ")";
  }

  function toggleFanSelect(el, spread) {
    const idx = Number(el.dataset.index);
    const need = spread.positions.length;
    const existingPos = picked.indexOf(idx);

    if (existingPos !== -1) {
      picked.splice(existingPos, 1);
      el.classList.remove("selected");
      el.removeAttribute("data-order");
      relabelSelections();
    } else {
      if (picked.length >= need) return;
      picked.push(idx);
      el.classList.add("selected");
      el.setAttribute("data-order", String(picked.length));
    }

    updateFanHint(spread);

    if (picked.length >= need) {
      fanEl.querySelectorAll(".fan-card:not(.selected)").forEach(function (c) {
        c.classList.add("disabled");
      });
      setTimeout(function () { finalizeDraw(spread); }, 550);
    } else {
      fanEl.querySelectorAll(".fan-card").forEach(function (c) { c.classList.remove("disabled"); });
    }
  }

  function relabelSelections() {
    picked.forEach(function (idx, i) {
      const el = fanEl.querySelector('.fan-card[data-index="' + idx + '"]');
      if (el) el.setAttribute("data-order", String(i + 1));
    });
  }

  /* ---- Ho tro keo bang con tro chuot (desktop) - cham vuot tren dien
     thoai da hoat dong tu nhien nho overflow-x scroll cua trinh duyet ---- */
  function setupFanDrag(el) {
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    el.addEventListener("pointerdown", function (e) {
      isDown = true;
      moved = 0;
      el.dataset.wasDrag = "0";
      el.classList.add("dragging");
      startX = e.clientX;
      startScroll = el.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!isDown) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
    });
    window.addEventListener("pointerup", function () {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("dragging");
      el.dataset.wasDrag = moved > 6 ? "1" : "0";
    });
  }

  /* ---- Buoc 2: dua cac la da chon vao vi tri, lat de xem nghia ---- */
  function finalizeDraw(spread) {
    fanWrap.classList.remove("active");

    drawnCards = picked.map(function (idx, i) {
      const item = shuffledDeck[idx];
      return { card: item.card, reversed: item.reversed, label: spread.positions[i].label_vi };
    });

    slotsWrap.innerHTML = drawnCards.map(function (p, i) {
      return [
        '<div class="spread-slot">',
        '<div class="slot-label">' + escapeHTML(p.label) + "</div>",
        '<div class="reader-card" data-index="' + i + '" tabindex="0" role="button"',
        ' aria-label="Lật để xem lá bài ở vị trí ' + escapeHTML(p.label) + '">',
        '<div class="reader-card-inner">',
        '<div class="reader-face reader-back-face"></div>',
        '<div class="reader-face reader-front-face">',
        '<img src="' + p.card.image + '" alt="' + escapeHTML(p.card.name_en) + '" class="' + (p.reversed ? "is-reversed" : "") + '">',
        '<div class="reader-front-label">' + escapeHTML(p.card.name_en) + (p.reversed ? " (Reversed)" : "") + "</div>",
        "</div></div></div>",
        '<div class="reveal-hint">Chạm để lật bài</div>',
        "</div>",
      ].join("");
    }).join("");

    table.classList.add("active");

    slotsWrap.querySelectorAll(".reader-card").forEach(function (el, i) {
      requestAnimationFrame(function () {
        setTimeout(function () { el.classList.add("dealt"); }, i * 140);
      });
      const reveal = function () {
        if (el.classList.contains("revealed")) return;
        el.classList.add("revealed");
        checkAllRevealed();
      };
      el.addEventListener("click", reveal);
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(); }
      });
    });

    table.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function checkAllRevealed() {
    const all = slotsWrap.querySelectorAll(".reader-card");
    const revealed = slotsWrap.querySelectorAll(".reader-card.revealed");
    if (revealed.length === all.length) {
      setTimeout(showReadingPanel, 500);
    }
  }

  function showReadingPanel() {
    readingCardsWrap.innerHTML = drawnCards.map(function (p) {
      const c = p.card;
      const bodyText = p.reversed ? c.meaning_reversed : c.meaning_upright;
      return [
        '<div class="reading-card-block">',
        '<div class="reading-card-eyebrow">' + escapeHTML(p.label) + "</div>",
        '<div class="reading-card-title">' + escapeHTML(c.name_en) + "</div>",
        '<div class="reading-card-orientation">' + (p.reversed ? "Xuất hiện ở vị thế ngược" : "Xuất hiện ở vị thế xuôi") + "</div>",
        '<p class="reading-card-text">' + escapeHTML(bodyText || "") + "</p>",
        '<p class="reading-card-question">' + escapeHTML(c.meaning_jung || "") + "</p>",
        "</div>",
      ].join("");
    }).join("");

    summaryText.textContent = buildSummary(drawnCards);
    readingPanel.classList.add("active");
    readingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildSummary(picks) {
    const majors = picks.filter(function (p) { return p.card.arcana === "major"; }).length;
    const reversedCount = picks.filter(function (p) { return p.reversed; }).length;
    let out = "Đây không phải một lời tiên tri, mà là một tấm gương. ";
    if (majors === picks.length && picks.length > 1) {
      out += "Toàn bộ các lá đều thuộc Ẩn Chính, đây có thể là một giai đoạn mang tính bước ngoặt, ít bị chi phối bởi những chuyện vụn vặt hằng ngày. ";
    } else if (majors === 0) {
      out += "Các lá bài thuộc Ẩn Phụ cho thấy đây là câu chuyện gắn với đời sống thường nhật, cảm xúc, công việc, các mối quan hệ cụ thể. ";
    }
    if (reversedCount >= Math.ceil(picks.length / 2) && picks.length > 1) {
      out += "Nhiều lá xuất hiện ở vị thế ngược, có thể có một phần trong bạn đang hướng vào bên trong nhiều hơn ra ngoài lúc này. ";
    }
    out += "Hãy đọc lại lớp nghĩa Jungian của từng lá, và dành vài phút viết ra điều đầu tiên xuất hiện trong đầu bạn, không chỉnh sửa, không phán xét.";
    return out;
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* ---------------------------------------------------------------------
   Utils
   --------------------------------------------------------------------- */
function escapeHTML(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;");
}

