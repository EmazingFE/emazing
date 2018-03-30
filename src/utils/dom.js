const on = elm => {
  return (event, handler, useCapture = false) => {
    elm.attachEvent ?
      elm.attachEvent(event, handler) :
      elm.addEventListener(event, handler, useCapture)
  }
}

const off = elm => {
  return (event, handler, useCapture = false) => {
    elm.detachEvent ?
      elm.detachEvent(event, handler) :
      elm.removeEventListener(event, handler, useCapture)
  }
}

export {
  on,
  off
}