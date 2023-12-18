const MIN_RADIUS = 9.5;
const MAX_RADIUS = 17;
const DEPTH = 4;
const LEFT_COLOR = 'F79A00';
const RIGHT_COLOR = 'FD12D1';
const POINT_NUM = 3500;

const getGradientStop = (ratio: number) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
  const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, '0');
  return `#${color}`;
};

const calculateColor = (x) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;
  const stop = getGradientStop(ratio);

  return stop;
};
const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const pointsInner = Array.from({ length: POINT_NUM }, (v, k) => k + 1).map(
  (num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
    const randomAngle = Math.random() * Math.PI * 2;

    const x = Math.sin(randomAngle) * randomRadius;
    const y = Math.cos(randomAngle) * randomRadius;
    const z = randomFromInterval(-DEPTH, DEPTH);

    const color = calculateColor(x);
    return {
      idx: num,
      position: [x, y, z],
      color,
    };
  }
);

export default pointsInner;
