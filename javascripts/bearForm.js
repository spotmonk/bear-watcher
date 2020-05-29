import utils from "./utils.js"

const printHeader = () =>{
  let domString =  ``
  domString += `<h1>Fattest Bears Competition</h1>`
  domString += `<h3>Enter your bear?</h3>`
  domString += `<form>
  <div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label">Bear Name</label>
    <div class="col-sm-3">
      <input type="text" readonly class="form-control-plaintext" id="name" placeholder="Yogi" required>
    </div>
    <label for="imgURL" class="col-sm-2 col-form-label">Bear Name</label>
    <div class="col-sm-3">
      <input type="text" readonly class="form-control-plaintext" id="imgURL" placeholder="https://upload.wikimedia.org/wikipedia/en/f/f0/Yogi_Bear_Yogi_Bear.png" required>
    </div>
    </div>
  <div class="form-row justify-content-center">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>`

  utils.printToDom("#header",domString)
}

export default {printHeader}
