import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"
import river from "./river.js"

const printHeader = () =>{
  let domString =  ``
  domString += `<h1>Fattest Bears Competition</h1>`
  domString += `<h3>Enter your bear?</h3>`
  domString += `<form id="bearsForm" class="mb-3">
  <div class="form-group row">
  <label for="bearName" class="col-sm-2 col-form-label">Bear Name</label>
  <div class="col-sm-3">
    <input type="text" class="form-control-plaintext" id="bearName" required>
  </div>
  <label for="imgURL" class="col-sm-2 col-form-label">Bear Name</label>
  <div class="col-sm-3">
    <input type="url" class="form-control-plaintext" id="imgURL" placeholder="https://upload.wikimedia.org/wikipedia/en/f/f0/Yogi_Bear_Yogi_Bear.png" required>
  </div>
  </div>
<div class="form-row justify-content-center">
  <button id="submitBtn" type="submit" class="btn btn-primary">Submit</button>
  </div>
  </form>`

  utils.printToDom("#header",domString)
  utils.createEventListener('#bearsForm','submit', addBear)
}


const addBear = () => {
  
  event.preventDefault()
  let bear = {
    name: document.querySelector("#bearName").value,
    imgURL: document.querySelector("#imgURL").value,
    bearID: Date.now(),
    weight: Math.floor(Math.random() * Math.floor(670)) + 130,
    caught: 0,
    attempted: 0,
    fishstamps: {}
    
 }
  bearData.setBears(bear)
  river.printRiver()
}


export default {printHeader}
