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
    domString += `<div class="mb-4 ml-1 col-md-3"><div class="card w-auto">
    <h5 class="card-header">${bears.name} <a class="close" id="close-${bears.bearID}">X</a> </h5>
    <img src="${bears.imgURL}" class="card-img-top" alt="...">
    <div id="weight">${bears.weight} lbs</div>
    <div class="m-4" id="fish${bears.bearID}"></div> 
    <div class="card-body">
      
    </div></div>`
    domString += `</div>`
    
    
    utils.printToDom("#cards", domString)})
    bears.forEach(bears => utils.createEventListener(`#close-${bears.bearID}`,'click', removeBear))
    bears.forEach(bears => printfish(bears.bearID))
}

const removeBear = (e) => {
    let bearID = e.target.id.replace('close-','');
    bearData.removeBear(bearID);
    printRiver()

}

const printfish = (id) => {
    const bears = bearData.getBears()
    const bear = bears[bearData.findBearIndex(id)]
    let domString = `<div class="row">`
    domString += `<div class="col">`
    domString += `<div class="row justify-content-around"><div class=""> ${bear.Caught} <a id="caughtup${id}"<i class="fas fa-arrow-up"></i></a></div>`
    domString += `<div class="">${bear.Attempted} <a id="attemptedup${id}" <i class="fas fa-arrow-up"></i></a></div></div>`
    domString += `<div class="w-100"></div>`
    domString += '<div class="row justify-content-around"><div class="label ">Caught:</div><div class="label ">Attempted:</div></div>'
    domString += `<div><button class="btn btn-success mt-3" id="randomFish">Attempt to Catch a Fish!</button></div>`
    domString += `<form>
    <div class="form-group">
      <label for="fishSizeRange">Fish Size</label>
      <input type="range" class="form-control-range" id="fishSizeRange${id}">
    </div>
  </form>`
    domString += `<div id="fishpic"><img class="fish" id="fishpic${id}" height="50%" width="50%" src="../components/img/svgfish.svg"></div>`
    domString += `</div></div>`
    utils.printToDom("#fish"+id,domString)
    utils.createEventListener(`#caughtup${id}`,'click', caughtup)
    utils.createEventListener(`#attemptedup${id}`,'click', attemptedup)
    utils.createEventListener('#randomFish','click', randomfish)
    utils.createEventListener(`#fishSizeRange${id}`,'input', scalefish)
}

const caughtup = (e) =>{
    const id = e.target.id.replace("caughtup","");
    bearData.addCaught(bearData.findBearIndex(id))
    printfish(id)
}
const attemptedup = (e) =>{
    const id = e.target.id.replace("attemptedup","");
    bearData.addAttempted(bearData.findBearIndex(id))
    printfish(id)
}

const randomfish = (e) =>{
    console.log(document.querySelector("#fishSizeRange").value)
}

const scalefish = (e) => {
    let id = e.target.id.replace("fishSizeRange","")
    let multiplier = e.target.value
    if (multiplier < 15) multiplier = 15

    document.querySelector(`#fishpic${id}`).setAttribute("width", `${multiplier}%`)
    document.querySelector(`#fishpic${id}`).setAttribute("height", `${multiplier}%`)
}

export default {printRiver}
