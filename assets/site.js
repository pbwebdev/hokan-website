/* Hokan website — progressive enhancement only.
   The site works with JavaScript disabled; this adds the small-screen menu. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  var mq = window.matchMedia("(max-width: 860px)");

  function setOpen(open) {
    nav.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function sync() {
    if (mq.matches) {
      toggle.hidden = false;
      setOpen(false);
    } else {
      toggle.hidden = true;
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  toggle.addEventListener("click", function () {
    setOpen(nav.hidden);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mq.matches && !nav.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  if (mq.addEventListener) mq.addEventListener("change", sync);
  else mq.addListener(sync);

  sync();
})();

/* Cross-page fade for browsers without cross-document view transitions.
   Where the browser has them, the CSS in assets/site.css does the whole job
   and this block stays out of the way. */
(function () {
  "use strict";

  if (CSS.supports("view-transition-name: none")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var LEAVING = "is-leaving";
  var timer;

  /* Coming back via bfcache must never leave the page faded out. */
  window.addEventListener("pageshow", function () {
    clearTimeout(timer);
    document.body.classList.remove(LEAVING);
  });

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var link = e.target.closest && e.target.closest("a[href]");
    if (!link || link.target || link.hasAttribute("download")) return;

    var url;
    try {
      url = new URL(link.href, location.href);
    } catch (err) {
      return;
    }
    if (url.origin !== location.origin) return;
    // Same page, different hash: let the browser jump, do not fade.
    if (url.pathname === location.pathname && url.search === location.search) return;

    e.preventDefault();
    document.body.classList.add(LEAVING);

    var go = function () {
      clearTimeout(timer);
      location.href = url.href;
    };
    document.body.addEventListener("animationend", go, { once: true });
    // Navigate anyway if the animation never fires.
    timer = setTimeout(go, 220);
  });
})();
