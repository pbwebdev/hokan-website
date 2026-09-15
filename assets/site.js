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
