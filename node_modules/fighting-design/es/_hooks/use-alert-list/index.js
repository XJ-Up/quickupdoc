const C = (e) => {
  (() => {
    const s = e.children[0].cloneNode(!0);
    e.appendChild(s);
  })();
  const o = 24;
  let n = 0;
  const l = e.children.length, c = () => {
    let t = n * o;
    n++;
    const s = n * o, i = 500, r = 15, a = i / r, h = (s - t) / a, d = setInterval(() => {
      if (t += h, t >= s && (clearInterval(d), n === l - 1)) {
        e.scrollTop = 0, n = 0;
        return;
      }
      e.scrollTop = t;
    }, r);
  };
  return (t = 2e3) => {
    setInterval(c, t);
  };
};
export {
  C as useAlertList
};
