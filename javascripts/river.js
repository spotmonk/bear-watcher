import bearData from './helpers/data/bearData.js'
import utils from './helpers/utils.js'

const printRiver = () => {
    const bears = bearData.getBears()
    let domString = `<div class="row justify-content-md-center">`
    bears.forEach(bears =>
    domString += `<div class="mb-4 ml-1 col-sm-3"><div class="card" style="width: 18rem;">
    <h5 class="card-header">${bears.name}</h5>
    <img src="${bears.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
      
    </div></div>
  </div>`)
    domString += `</div>`
    utils.printToDom("#cards", domString)
}

export default {printRiver}
