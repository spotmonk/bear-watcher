import bearData from './helpers/data/bearData.js'
import utils from './helpers/utils.js'

const printRiver = () => {
    const bears = bearData.getBears()
    let domString = ``
    bears.forEach(bears =>
    domString += `${bears.name}`)
    
    utils.printToDom("#cards", domString)
}

export default {printRiver}
