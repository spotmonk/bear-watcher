import river from './river.js'
import bearData from '../helpers/data/bearData.js'
import utils from '../helpers/utils.js'



const randomFish = (e) =>{
  let id = e.target.id.replace("randomFish",'')
  let size = Number(document.querySelector(`#fishSizeRange${id}`).value)
  if (caughtFish(size,id))
  {
    bearData.addAttempted(bearData.findBearIndex(id))
    bearData.addCaught(bearData.findBearIndex(id))
    river.printFish(id)
  }
  else{
    bearData.addAttempted(bearData.findBearIndex(id))
    river.printFish(id)
  }

}

const caughtFish = (fishSize,id) => {
  const baseCatchChance = fishSize
  const modifier = Math.floor(Math.random() * Math.floor(30))
  const totalChance = (baseCatchChance + modifier)
  
  let catchNum = 0
  let weight = 0
  switch (true){
    case (fishSize >= 80):
      catchNum = Math.floor(Math.random() * Math.floor(30) + fishSize)
      weight =  Math.floor(Math.random() * Math.floor(15) + 10)
      break;
    case (fishSize < 80):
      catchNum = Math.floor(Math.random() * Math.floor(20) + fishSize)
      weight =  Math.floor(Math.random() * Math.floor(10) + 5)
      break;
    case (fishSize < 40):
      catchNum = Math.floor(Math.random() * Math.floor(15) + fishSize)
      weight =  Math.floor(Math.random() * Math.floor(5))
      break;
  }
  
  if (catchNum <= totalChance) {
    bearData.addWeight(bearData.findBearIndex(id),weight)
    river.printWeight(id)
    river.winner()
    return true

  }
  else{
    return false
  }
}

export default {randomFish}
