import bearData from '../helpers/data/bearData.js'
import utils from '../helpers/utils.js'

const printRiver = () => {
    const bears = bearData.getBears()
    if (bears.length === 0) {
        utils.printToDom("#cards","");
        return;
    }
    let domString = `<div class="row justify-content-md-center">`
    bears.forEach(bears => {
    domString += `<div class="mb-4 ml-1 col-sm-3"><div class="card" style="w-2;">
    <h5 class="card-header">${bears.name} <a class="close" id="close-${bears.bearID}">X</a> </h5>
    <img src="${bears.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
      
    </div></div>`
    domString += `</div>`
    
    
    utils.printToDom("#cards", domString)})
    bears.forEach(bears => utils.createEventListener(`#close-${bears.bearID}`,'click', removeBear))
}

const removeBear = (e) => {
    let bearID = e.target.id.replace('close-','');
    bearData.removeBear(bearID);
    printRiver()

}
export default {printRiver}
