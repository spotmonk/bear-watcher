const bears = [];

const setBears = (bear) => {
  bears.push(bear);
};

const getBears = () => {
  return bears;
};

const addCaught = (bearIndex) => bears[bearIndex].caught ++

const addAttempted = (bearIndex) => bears[bearIndex].attempted ++

const addWeight = (bearIndex, num) => bears[bearIndex].weight += num

const removeBear = (bearID) => bears.splice(findBearIndex(bearID), 1)


const findBearIndex = (targetBearID) => bears.findIndex(bear => targetBearID == bear.bearID);

export default { setBears, getBears, removeBear, findBearIndex, addCaught, addAttempted, addWeight};
