const bears = [];

const setBears = (bear) => {
  bears.push(bear);
};

const getBears = () => {
  return bears;
};

const addCaught = (bearIndex) => bears[bearIndex].Caught ++

const addAttempted = (bearIndex) => bears[bearIndex].Attempted ++

const removeBear = (bearID) => bears.splice(findBearIndex(bearID), 1)


const findBearIndex = (targetBearID) => bears.findIndex(bear => targetBearID == bear.bearID);

export default { setBears, getBears, removeBear, findBearIndex, addCaught, addAttempted};
