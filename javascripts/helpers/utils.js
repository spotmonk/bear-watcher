const printToDom = (selector, text) => {
  document.querySelector(selector).innerHTML = text
}

const createEventListener = (selector, event,  func) => {
  document.querySelector(selector).addEventListener(event, func)
}

export default {printToDom, createEventListener}
