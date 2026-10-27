// Scales fixed-width mockups ([data-fit="<designWidth>"]) to their container.
(function () {
  if (window.__bfit) return;
  let pending = false;
  const set = (el, k, v) => { if (el.style[k] !== v) el.style[k] = v; };
  const apply = () => {
    pending = false;
    document.querySelectorAll('[data-fit]').forEach(el => {
      const sizer = el.parentElement, outer = sizer && sizer.parentElement;
      if (!outer) return;
      const base = +el.dataset.fit, w = outer.clientWidth;
      if (!w) return;
      const min = +(el.dataset.fitMin || 0), max = +(el.dataset.fitMax || 1);
      const s = Math.round(Math.max(min, Math.min(max, w / base)) * 1000) / 1000;
      const scroll = base * s > w + 2;
      set(el, 'transform', 'scale(' + s + ')');
      set(sizer, 'width', Math.floor(base * s) + 'px');
      set(sizer, 'height', Math.ceil(el.offsetHeight * s) + 'px');
      set(outer, 'overflowX', scroll ? 'auto' : 'hidden');
      set(outer, 'overflowY', 'hidden');
    });
  };
  const schedule = () => { if (!pending) { pending = true; setTimeout(apply, 16); } };
  const ro = new ResizeObserver(schedule);
  const observeAll = () => document.querySelectorAll('[data-fit]').forEach(el => {
    if (el.__fitObs) return;
    el.__fitObs = true;
    ro.observe(el);
    ro.observe(el.parentElement.parentElement);
  });
  let mt = null;
  const run = () => { observeAll(); schedule(); };
  const start = () => {
    new MutationObserver(() => { clearTimeout(mt); mt = setTimeout(run, 80); })
      .observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', run);
    [0, 100, 300, 700, 1500, 3000].forEach(t => setTimeout(run, t));
  };
  window.__bfit = run;
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
