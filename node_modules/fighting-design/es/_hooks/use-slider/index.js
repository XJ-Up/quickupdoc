const d = (t, n, o) => {
  const e = (v) => {
    o(v.clientX - n.value);
  }, s = () => {
    document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", s);
  }, m = () => {
    document.addEventListener("mousemove", e, { passive: !1 }), document.addEventListener("mouseup", s, { passive: !1 });
  };
  t.addEventListener("mousedown", m, { passive: !1 });
};
export {
  d as useSlider
};
