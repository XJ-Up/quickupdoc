const n = (t) => (t.install = (e) => {
  const { name: l } = t;
  l && e.component(l, t);
}, t), r = (t, e) => (t.install = (l) => {
  l.config.globalProperties[e] = t;
}, t), s = (t, e) => (t.install = (l) => {
  l.directive(e, t);
}, t);
export {
  n as install,
  s as installDirective,
  r as installFn
};
