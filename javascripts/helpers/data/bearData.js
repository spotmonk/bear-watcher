const bears = [];

const setBears = (bear) => {
  bears.push(bear);
};

const getBears = () => {
  return bears;
};

const removeBear = (bearID) => bears.splice(findBearIndex(bearID), 1)


const findBearIndex = (targetBearID) => bears.findIndex(bear => targetBearID == bear.bearID);

export default { setBears, getBears, removeBear};
