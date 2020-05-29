const bears = [];

const setBears = (bear) => {
  bears.push(bear);
};

const getBears = () => {
  return bears;
};

export default { setBears, getBears };
