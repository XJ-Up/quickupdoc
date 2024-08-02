import { ref as a } from "vue";
import { keepDecimal as c } from "../../_utils/utils/index.js";
const p = () => {
  const e = a(1), o = a(0), t = () => {
    c(e.value, 1) >= 0.2 && (e.value -= 0.2);
  }, r = () => {
    e.value <= 10 && (e.value += 0.2);
  };
  return {
    scale: e,
    rotate: o,
    smaller: t,
    bigger: r,
    scrollZoom: (l) => {
      l.preventDefault(), l.deltaY > 1 ? t() : r();
    },
    recovery: () => {
      e.value = 1, o.value = 0;
    },
    rotateClockwise: () => {
      o.value += 90;
    },
    rotateCounterClock: () => {
      o.value -= 90;
    }
  };
};
export {
  p as useOperationImg
};
