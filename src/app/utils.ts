const MIN_RADIUS = 9.5;
const MAX_RADIUS = 17;
const DEPTH = 4;
const LEFT_COLOR = 'F79A00';
const RIGHT_COLOR = 'FD12D1';
const POINT_NUM = 3500;

const getGradientStop = (ratio: number) => {
  return;
};

const calculateColor = (x: any) => {
  return;
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
