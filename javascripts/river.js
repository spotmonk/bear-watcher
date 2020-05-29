import bearData from './helpers/data/bearData.js'
import utils from './helpers/utils.js'

const printRiver = () => {
    const bears = bearData.getBears()
    let domString = ``
    bears.forEach(bears =>
    domString += `<div class="card" style="width: 18rem;">
    <h5 class="card-header">${bears.name}</h5>
    <img src="${bears.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
      
    </div>
  </>`)
    
    utils.printToDom("#cards", domString)
}

export default {printRiver}
