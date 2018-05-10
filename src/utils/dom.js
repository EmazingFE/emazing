import { isEmpty } from './tool-func'
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

const isHtmlElement = obj => {
  return getVal(obj, 'nodeType') === Node.ELEMENT_NODE
}

const getVal = (obj, path, splitter = '.') => {
  if (!(obj && path)) {
    return null
  }
  let keys = path.split(splitter)
  let key = keys[0]
  return keys.length > 1 ? getVal(obj[key], keys.slice(1).join(splitter), splitter) : obj[key]
}

const hasClass = (elem, cls) => {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0) {
    return false
  }
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls
  }
}

const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ')
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

const setStyle = (element, styleName, styleValue) => {
  if (element && isHtmlElement(element)) {
    element.style[styleName] = styleValue
  }
}

const removeStyle = (element, styleName) => {
  if (element && isHtmlElement(element)) {
    let style = element.getAttribute('style')
    if (style) {
      let reg = new RegExp(`${styleName}:[\\s-\\w]+\\b;?`, 'ig')
      style = style.replace(reg, '').trim()
      if (isEmpty(style)) {
        element.removeAttribute('style')
      } else {
        element.setAttribute('style', style)
      }
    }
  }
}


export {
  on,
  off,
  addClass,
  removeClass,
  setStyle,
  removeStyle
}