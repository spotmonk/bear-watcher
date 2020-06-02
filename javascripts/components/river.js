import bearData from '../helpers/data/bearData.js'
import utils from '../helpers/utils.js'
import fishing from './fishing.js'

const printRiver = () => {
    const bears = bearData.getBears()
    if (bears.length === 0) {
        utils.printToDom("#cards","");
        utils.printToDom("#randomize","")
        return;
    }
    let domString = `<div class="row justify-content-md-center">`
    bears.forEach(bears => {
    domString += `<div class="mb-4 ml-1 col-md-3"><div class="card w-auto">
    <h5 class="card-header"><div class="award"></div>${bears.name} <a class="close" id="close-${bears.bearID}">X</a> </h5>
    <img src="${bears.imgURL}" class="card-img-top" alt="...">
    <div id="weight${bears.bearID}"></div>
    <div class="m-4" id="fish${bears.bearID}"></div> 
    <div class="card-body">
      
    </div></div>`
    domString += `</div>`
    
    
    utils.printToDom("#cards", domString)})
    const buttonstring = `<button id="randomSliders" class="btn btn-primary">Randomize Fish Size</button><button id="allfish" class="btn btn-primary">All Attempt!</button>`
    utils.printToDom("#randomize", buttonstring)
    utils.createEventListener("#randomSliders","click",randomFishSize)
    utils.createEventListener("#allfish","click", clickFish)
    bears.forEach(bears => utils.createEventListener(`#close-${bears.bearID}`,'click', removeBear))
    bears.forEach(bears => printFish(bears.bearID))
    bears.forEach(bears => printWeight(bears.bearID))
    winner()
}

const randomFishSize = (e) =>{
    
    document.querySelectorAll(".fishSlider").forEach((slider)=> 
    { slider.value = Math.floor(Math.random() * Math.floor(100) + 1);
      let event = new Event("input")
      slider.dispatchEvent(event)  
    } )
}

const clickFish = (e) => {
    console.log("called all click")
    document.querySelectorAll(".fish-btn").forEach( btn => btn.click() )
}

const removeBear = (e) => {
    let bearID = e.target.id.replace('close-','');
    bearData.removeBear(bearID);
    printRiver()

}


const printFish = (id) => {
    const bears = bearData.getBears()
    const bear = bears[bearData.findBearIndex(id)]
    let domString = `<div class="row">`
    domString += `<div class="col">`
    domString += `<div class="row justify-content-around"><div class=""> ${bear.caught} <a id="caughtup${id}"<i class="fas fa-arrow-up"></i></a></div>`
    domString += `<div class="">${bear.attempted} <a id="attemptedup${id}" <i class="fas fa-arrow-up"></i></a></div></div>`
    domString += `<div class="w-100"></div>`
    domString += '<div class="row justify-content-around"><div class="label ">Caught:</div><div class="label ">Attempted:</div></div>'
    domString += `<div><button class="fish-btn btn btn-success mt-3" id="randomFish${id}">Attempt to Catch a Fish!</button></div>`
    domString += `<form>
    <div class="form-group">
      <label for="fishSizeRange">Fish Size</label>
      <input type="range" class="fishSlider form-control-range" id="fishSizeRange${id}">
    </div>
  </form>`
    domString += `<div id="fishpic"><img class="fish" id="fishpic${id}" height="50%" width="50%" src="../components/img/svgfish.svg"></div>`
    domString += `</div></div>`
    utils.printToDom("#fish"+id,domString)
    utils.createEventListener(`#caughtup${id}`,'click', caughtup)
    utils.createEventListener(`#attemptedup${id}`,'click', attemptedup)
    utils.createEventListener(`#randomFish${id}`,'click', fishing.randomFish)
    utils.createEventListener(`#fishSizeRange${id}`,'input', scalefish)
    utils.createEventListener(`#fishSizeRange${id}`,'change', scalefish)
}

const caughtup = (e) =>{
    const id = e.target.id.replace("caughtup","");
    bearData.addCaught(bearData.findBearIndex(id))
    printFish(id)
}
const attemptedup = (e) =>{
    const id = e.target.id.replace("attemptedup","");
    bearData.addAttempted(bearData.findBearIndex(id))
    printFish(id)
}

const printWeight = (id) => {
    const bears = bearData.getBears()
    const index = bearData.findBearIndex(id)
    const weight = bears[index].weight
    const domString = `${weight} lbs`
    utils.printToDom(`#weight${id}`, domString)
    

}


const scalefish = (e) => {
    let id = e.target.id.replace("fishSizeRange","")
    let multiplier = e.target.value
    if (multiplier < 15) multiplier = 15

    document.querySelector(`#fishpic${id}`).setAttribute("width", `${multiplier}%`)
    document.querySelector(`#fishpic${id}`).setAttribute("height", `${multiplier}%`)
}


const winner = () =>{
    let bears = bearData.getBears()
    bears = bears.slice().sort(compareWeight)
    bears.forEach((bear) => {
        let node = document.querySelector(`#close-${bear.bearID}`).closest(".card-header");
        node.childNodes[0].innerHTML = ""
    })
    displayTrophy(bears[0].bearID, 1)
    
    if (bears.length > 1 && bears[0].weight === bears[1].weight){
        displayTrophy(bears[1].bearID, 1)}
    if (bears.length > 1 && bears[0].weight !== bears[1].weight){
        displayTrophy(bears[1].bearID,2)
    }
    if (bears.length > 2 && bears[0].weight === bears[2].weight){
        displayTrophy(bears[2].bearID,1)
    }
    if (bears.length >= 3 && bears[1].weight === bears[2].weight){
        displayTrophy(bears[2].bearID,2)
    }
    if (bears.length >= 3 && bears[1].weight !== bears[2].weight){
        displayTrophy(bears[2].bearID,3)
    
    if (bears.length > 3 && bears[3].weight === bears[2].weight){
        displayTrophy(bears[4].bearID,3)
    }
    
}

}

const displayTrophy = (id, rank) => {
    let node = document.querySelector(`#close-${id}`).closest(".card-header")
    switch (rank)
    {
        case 1:
            node.childNodes[0].innerHTML = `<img src="../components/img/gold.jpg">`
            break;
        case 2:
            node.childNodes[0].innerHTML = `<img src="../components/img/silver.jpg">`
            break;
        case 3:
            node.childNodes[0].innerHTML = `<img src="../components/img/bronze.jpg">`
            
        }
    
}

const compareWeight = (a,b) => {
    if (a.weight > b.weight){
      return -1
    }
    if (a.weight < b.weight) { 
      return 1
    }
    return 0
  }

export default {printRiver, printFish, printWeight, winner}
