const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
/* =====================================================================
   CARA UNGGAH GAMBAR  (UPLOAD YOUR IMAGES HERE)
   1. Buat folder "images" di sebelah file HTML ini:
        images/projects/       <- gambar project (muncul saat nama project di-hover)
        images/certificates/   <- gambar sertifikat (menutup kata besar di kartu)
   2. Taruh file .jpg/.png/.webp (lebar ±800px, di bawah 150KB).
   3. Tulis nama file di dua daftar ini. URUTAN SAMA dengan project / sertifikat.
   4. "" = belum ada gambar (tampil placeholder). Nama salah = placeholder juga.
   Catatan: gambar lokal tidak tampil di preview Claude, hanya setelah dibuka
   dari komputer sendiri atau di-upload ke hosting.
   ===================================================================== */
const IMG_PROJECTS=[
"asset/greeners.jpg",         // 1. Greeners Indonesia
"asset/project4.png",         // 2. Coding Competition
"asset/portofollio-v2.png",   // 3. Azzam Portfolio
"asset/poster-kopi-sudut.png",// 4. Kopi Sudut Café
"asset/kelas-digital.png",         // 5. Kelas Digital
"asset/nike.png",             // 6. nike web
"asset/focus-timer.png"          // 7. Focus Timer
];
const IMG_CERTS = [
  "images/certificates/html.jpg", // 1. HTML
  "images/certificates/css.jpg", // 2. CSS
  "images/certificates/javascript.jpg", // 3. JavaScript
  "images/certificates/web-development.jpg", // 4. Web Development
  "images/certificates/prompt-engineering.jpg", // 5. Prompt Engineering
  "images/certificates/ai-product-ux.jpg", // 6. AI-Powered Product & UX
];
/* Tambah project: satu baris di P + satu nama file di IMG_PROJECTS. [nama, jenis, tags, deskripsi] */
const P = [
  [
    "Greeners Indonesia",
    "Landing page",
    "Tailwind CSS",
    "A landing page for an environmental organisation: Explore, Challenges, Action, About.",
  ],
  [
    "Velvora",
    "Landing page",
    "HTML & CSS",
    "A competition page with a hero and level cards for three school levels.",
  ],
  [
    "Azzam Portfolio",
    "Portfolio",
    "Tailwind CSS",
    "The first version of this portfolio, later moved to Tailwind CSS.",
  ],
  [
    "Kopi Sudut Café",
    "Café menu",
    "HTML & CSS",
    "A one-page site for a neighbourhood café with a menu, hours, and a map.",
  ],
  [
    "Kelas Digital",
    "Course page",
    "Tailwind CSS",
    "A course landing page with a syllabus, pricing cards, and a sign-up section.",
  ],
  [
    "nike web ",
    "WordPress",
    "WordPress",
    "A WordPress catalogue for a batik seller that the owner can update alone.",
  ],
  [
    "Focus Timer",
    "Web app",
    "JavaScript",
    "A small Pomodoro timer in plain JavaScript: start, pause, and reset.",
  ],
];
/* Tambah sertifikat: satu item di A + satu nama file di IMG_CERTS. [judul, kata besar] */
const A = [
  ["HTML", "cooming soon"],
  ["CSS", "cooming soon"],
  ["JavaScript", "cooming soon"],
  ["Web Development", "cooming soon"],
  ["Prompt Engineering", "cooming soon"],
  ["AI-Powered Product & UX", "cooming soon"],
];
const J = [
  [
    "Frontend dev",
    "Clean, responsive pages built with HTML, CSS, JavaScript, and Tailwind CSS, tested on small and large screens.",
  ],
  [
    "Web design",
    "Interfaces designed in Figma first, then turned into working pages.",
  ],
  ["WordPress", "Content-managed websites that you can update yourself."],
  ["Responsive", "Layouts that hold up on phones, tablets, and desktops."],
  [
    "Prototyping",
    "Clickable Figma prototypes to test an idea before any code.",
  ],
  [
    "Landing pages",
    "Focused single-page sites that make the next step obvious.",
  ],
];
const T = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "Figma",
  "WordPress",
  "Git",
  "GitHub",
  "Accessibility",
  "Animation",
  "SEO basics",
];
const S = [
  [
    "Listen",
    "Understand the idea, who it is for, and what the page needs to do.",
    "#c6f432",
    "-3deg",
    0,
  ],
  [
    "Sketch",
    "Layouts and flows in Figma before any code is written.",
    "#ff7ac8",
    "2deg",
    70,
  ],
  [
    "Build",
    "Clean, responsive pages in HTML, CSS, JavaScript, and Tailwind CSS.",
    "#2f8cff",
    "-2deg",
    -20,
  ],
  [
    "Launch",
    "Test on small and large screens, fix the details, then go live.",
    "#ee4b1a",
    "3deg",
    50,
  ],
];
const COL = [
  "#c6f432",
  "#ff7ac8",
  "#2f8cff",
  "#ffd23d",
  "#ee4b1a",
  "#c6f432",
  "#ff7ac8",
];
const z = (n) => String(n + 1).padStart(2, "0");
const IC = {
  about: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1-4 4-6 8-6s7 2 8 6",
  awards:
    "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  projects: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  services: "M13 2L4 14h7l-1 8 9-12h-7z",
  process:
    "M5 19a2 2 0 100-4 2 2 0 000 4zM19 9a2 2 0 100-4 2 2 0 000 4zM7 17c8 0 2-10 10-10",
  contact: "M4 5h16v11H9l-5 4z",
};
const NL = [
  ["about", "About"],
  ["awards", "Awards"],
  ["projects", "Projects"],
  ["services", "Services"],
  ["process", "Process"],
  ["contact", "Contact"],
];
$("#nb").insertAdjacentHTML(
  "beforeend",
  NL.map(
    (l) =>
      '<a href="#' +
      l[0] +
      '" data-s="' +
      l[0] +
      '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' +
      IC[l[0]] +
      '"/></svg><span>' +
      l[1] +
      "</span></a>",
  ).join(""),
);
const rb = [
  "Frontend developer",
  "Web designer",
  "Interaction",
  "Responsive",
  "WordPress",
]
  .map((x) => "<span>" + x + "</span>*")
  .join("");
$("#r1").innerHTML = rb.repeat(4);
$("#r2").innerHTML = rb.split("").reverse().join("").length ? rb.repeat(4) : "";
$("#pj").innerHTML = P.map(
  (p, i) =>
    '<div class="pj rv" data-i="' +
    i +
    '"><b>' +
    z(i) +
    "</b><h3>" +
    p[0] +
    "</h3><small>" +
    p[1] +
    " · 2026</small><p>" +
    p[3] +
    "</p></div>",
).join("");
$("#sv").innerHTML = J.map(
  (j, i) =>
    '<div class="sv rv"><button type="button" aria-expanded="false"><b>' +
    z(i) +
    "</b><h3>" +
    j[0] +
    '</h3><i>+</i></button><div class="pn"><div><p>' +
    j[1] +
    "</p></div></div></div>",
).join("");
const tg = T.map((t) => "<span>" + t + " ✦</span>").join("");
$("#q1 div").innerHTML = tg + tg;
const tr = T.slice()
  .reverse()
  .map((t) => "<span>" + t + " ✦</span>")
  .join("");
$("#q2 div").innerHTML = tr + tr;
$("#cards").innerHTML = S.map(
  (s, i) =>
    '<div class="cdp" style="--c:' +
    s[2] +
    ";--r:" +
    s[3] +
    ";--y:" +
    s[4] +
    "px;--d:" +
    i * 0.12 +
    's"><b>' +
    z(i) +
    "</b>" +
    (i == 0
      ? '<span class="pill">Free 15 min call</span>'
      : i == 3
        ? '<span class="pill" style="background:linear-gradient(90deg,#2f8cff,#b69cff)">It’s live!</span>'
        : "") +
    "<div><h3>" +
    s[0] +
    "</h3><p>" +
    s[1] +
    "</p></div></div>",
).join("");
$("#al").innerHTML = A.map(
  (a, i) =>
    '<figure class="ce" tabindex="0" style="--c:' +
    COL[i] +
    ";--r:" +
    (i % 2 ? 1 : -1) * (1 + (i % 3)) +
    'deg"><div class="bx">' +
    a[1] +
    (IMG_CERTS[i]
      ? '<img draggable="false" alt="' +
        a[0] +
        ' certificate" src="' +
        IMG_CERTS[i] +
        '" onerror="this.remove()">'
      : "") +
    "</div><figcaption><span>" +
    z(i) +
    "</span>" +
    a[0] +
    "</figcaption></figure>",
).join("");

/* reveal + counters */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      e.target.querySelectorAll("[data-n]").forEach((b) => {
        const n = +b.dataset.n,
          t0 = performance.now(),
          f = (t) => {
            const k = Math.min(1, (t - t0) / 1400);
            b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
            if (k < 1) requestAnimationFrame(f);
          };
        RM ? (b.textContent = n) : requestAnimationFrame(f);
      });
    }),
  { threshold: 0.12 },
);
$$(".rv").forEach((e) => io.observe(e));

/* bottom nav: sliding indicator */
const ind = $("#ind"),
  lk = $$("#nb a");
let cur = null;
const mv = (a) => {
  if (!a) {
    ind.style.opacity = 0;
    lk.forEach((x) => x.classList.remove("on"));
    return;
  }
  ind.style.opacity = 1;
  ind.style.width = a.offsetWidth + "px";
  ind.style.transform = "translateX(" + (a.offsetLeft - 6) + "px)";
  lk.forEach((x) => x.classList.toggle("on", x === a));
};
const so = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        cur = lk.find((a) => a.dataset.s === e.target.id) || null;
        mv(cur);
      }
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
$$("main>section").forEach((s) => so.observe(s));
addEventListener("resize", () => mv(cur));

/* projects: floating preview that follows the cursor */
const fp = $("#fp");
let px = 0,
  py = 0;
$("#pj").addEventListener("pointerover", (e) => {
  const r = e.target.closest(".pj");
  if (!r) return;
  const i = +r.dataset.i;
  $("#fb").innerHTML =
    P[i][0].split(" ")[0] +
    (IMG_PROJECTS[i]
      ? '<img alt="" src="' + IMG_PROJECTS[i] + '" onerror="this.remove()">'
      : "");
  $("#fd").textContent = P[i][3];
  fp.style.setProperty("--c", COL[i]);
  fp.classList.add("o");
});
$("#pj").addEventListener("pointerleave", () => fp.classList.remove("o"));
addEventListener(
  "pointermove",
  (e) => {
    px = e.clientX;
    py = e.clientY;
    fp.style.transform =
      "translate(" + (px + 24) + "px," + (py - 90) + "px) rotate(-4deg)";
  },
  { passive: true },
);
/* services accordion */
$("#sv").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const s = b.parentElement,
    o = !s.classList.contains("o");
  $$(".sv").forEach((x) => {
    x.classList.remove("o");
    x.firstChild.setAttribute("aria-expanded", false);
  });
  s.classList.toggle("o", o);
  b.setAttribute("aria-expanded", o);
});
/* draggable certificates */
let dr = null,
  zi = 1;
const bd = $("#al");
bd.addEventListener("pointerdown", (e) => {
  const c = e.target.closest(".ce");
  if (!c) return;
  c.setPointerCapture(e.pointerId);
  dr = {
    c,
    sx: e.clientX,
    sy: e.clientY,
    ox: +c.dataset.x || 0,
    oy: +c.dataset.y || 0,
  };
  c.style.zIndex = ++zi;
  c.classList.add("dg");
});
bd.addEventListener("pointermove", (e) => {
  if (!dr) return;
  const x = dr.ox + e.clientX - dr.sx,
    y = dr.oy + e.clientY - dr.sy;
  dr.c.dataset.x = x;
  dr.c.dataset.y = y;
  dr.c.style.setProperty("--x", x + "px");
  dr.c.style.setProperty("--y", y + "px");
});
const end = () => {
  if (dr) dr.c.classList.remove("dg");
  dr = null;
};
bd.addEventListener("pointerup", end);
bd.addEventListener("pointercancel", end);
$("#rs").onclick = () =>
  $$(".ce").forEach((c) => {
    c.dataset.x = 0;
    c.dataset.y = 0;
    c.style.removeProperty("--x");
    c.style.removeProperty("--y");
  });
/* How it works: vertical scroll moves the cards sideways (section is as tall as the track is wide) */
{
  const pc = $("#pc"),
    trk = $("#trk"),
    sv = $("#rope");
  let tk = 0;
  const upd = () => {
    tk = 0;
    if (RM) return;
    const dist = Math.max(0, trk.scrollWidth - innerWidth);
    pc.style.setProperty("--h", dist * 0.75 + innerHeight + "px");
    const r = pc.getBoundingClientRect(),
      span = pc.offsetHeight - innerHeight,
      p = span > 0 ? Math.max(0, Math.min(1, -r.top / span)) : 0;
    trk.style.transform = "translate3d(" + -p * dist + "px,0,0)";
    sv.style.width = dist * 0.6 + innerWidth + "px";
    sv.style.transform = "translate3d(" + -p * dist * 0.6 + "px,0,0)";
  };
  addEventListener(
    "scroll",
    () => {
      if (!tk) tk = requestAnimationFrame(upd);
    },
    { passive: true },
  );
  addEventListener("resize", upd);
  document.fonts && document.fonts.ready.then(upd);
  upd();
}
$("#copy").onclick = async (e) => {
  const b = e.currentTarget;
  try {
    await navigator.clipboard.writeText("ghifari1006@student.abudzar.sch.id");
  } catch (x) {}
  b.textContent = "Copied ✓";
  setTimeout(() => (b.textContent = "Copy email"), 1600);
};

/* hero: pixel portrait (light: ~1,700 particles, DPR capped) */
{
  const AV =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 100 95"><path d="M8 125C10 100 28 88 50 88s40 12 42 37Z" fill="#14213D"/><rect x="43" y="74" width="14" height="16" rx="3" fill="#E0AC82"/><ellipse cx="50" cy="58" rx="14" ry="17" fill="#F2C6A0"/><path d="M36 56C33 34 67 34 64 56 61 46 56 43 50 43S39 46 36 56Z" fill="#1B1B2F"/><circle cx="45" cy="59" r="1.4" fill="#1B1B2F"/><circle cx="55" cy="59" r="1.4" fill="#1B1B2F"/><path d="M45 66Q50 70 55 66" fill="none" stroke="#7A3E2B" stroke-width="1.3" stroke-linecap="round"/></svg>';
  const cv = $("#px"),
    cx = cv.getContext("2d"),
    hx = $("#hero"),
    img = new Image();
  let W,
    H,
    D,
    PT = [],
    mx = -999,
    my = -999,
    vis = true,
    e = RM ? 1 : 0;
  const build = () => {
    D = Math.min(devicePixelRatio || 1, 1.5);
    W = hx.clientWidth;
    H = hx.clientHeight;
    cv.width = W * D;
    cv.height = H * D;
    const rows = 44,
      cols = 46,
      cs = (H * 0.62) / rows,
      ox = (W - cs * cols) / 2,
      oy = H * 0.14,
      o = document.createElement("canvas");
    o.width = cols;
    o.height = rows;
    const oc = o.getContext("2d");
    oc.drawImage(img, 0, 0, cols, rows);
    const d = oc.getImageData(0, 0, cols, rows).data;
    PT = [];
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const i = (r * cols + c) * 4;
        if (d[i + 3] < 120) continue;
        const l = (d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) / 255,
          hot = Math.random() < 0.1;
        PT.push({
          hx: ox + c * cs,
          hy: oy + r * cs,
          x: RM ? ox + c * cs : Math.random() * W,
          y: RM ? oy + r * cs : Math.random() * H,
          vx: 0,
          vy: 0,
          s: cs,
          a: 0.35 + l * 0.65,
          k: hot
            ? ["#c6f432", "#ff7ac8", "#2f8cff", "#fff"][(Math.random() * 4) | 0]
            : null,
          t: Math.random() * 6,
        });
      }
  };
  const draw = () => {
    cx.setTransform(D, 0, 0, D, 0, 0);
    cx.clearRect(0, 0, W, H);
    e = Math.min(1, e + 0.008);
    const k = 0.012 + 0.09 * e,
      rad = Math.max(70, W * 0.07);
    for (const p of PT) {
      p.vx += (p.hx - p.x) * k;
      p.vy += (p.hy - p.y) * k;
      const dx = p.x - mx,
        dy = p.y - my,
        d2 = dx * dx + dy * dy;
      if (d2 < rad * rad && d2 > 1) {
        const dd = Math.sqrt(d2),
          f = (1 - dd / rad) * 3.2;
        p.vx += (dx / dd) * f;
        p.vy += (dy / dd) * f;
      }
      p.vx *= 0.84;
      p.vy *= 0.84;
      p.x += p.vx;
      p.y += p.vy;
      p.t += 0.03;
      cx.globalAlpha = Math.min(
        1,
        p.a * (p.k ? 0.65 + 0.35 * Math.sin(p.t * 3) : 1) * (0.4 + 0.6 * e),
      );
      cx.fillStyle = p.k || "#f4ecd8";
      cx.fillRect(p.x, p.y, p.s * 0.82, p.s * 0.82);
    }
    cx.globalAlpha = 1;
  };
  const loop = () => {
    if (vis) draw();
    requestAnimationFrame(loop);
  };
  img.onload = () => {
    build();
    RM ? draw() : loop();
  };
  let rt;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (img.complete) {
        build();
        if (RM) draw();
      }
    }, 150);
  });
  hx.addEventListener("pointermove", (ev) => {
    const r = hx.getBoundingClientRect();
    mx = ev.clientX - r.left;
    my = ev.clientY - r.top;
  });
  hx.addEventListener("pointerleave", () => {
    mx = my = -999;
  });
  new IntersectionObserver(([x]) => {
    vis = x.isIntersecting;
  }).observe(hx);
  const tick = () => {
    $("#clk").textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  tick();
  setInterval(tick, 30000);
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(AV);
}
