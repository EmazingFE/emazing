const getStyle = (dom, attr) => {
  let value = null
  if (dom.currentStyle) {
    value = dom.currentStyle[attr]
  } else {
    value = document.defaultView.getComputedStyle(dom, null)[attr]
  }
  return value
}

class Heart {

  constructor (canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = parseFloat(getStyle(this.canvas, 'width'))
    this.height = parseFloat(getStyle(this.canvas, 'height'))
    this.centerX = this.width / 2
    this.centerY = this.height / 2
    this.init()
  }

  init () {
    this.pieces = 50
    this.antiTooth(2)
    this.createVectors()
  }

  /**
   * Cartesian Coordinate
   * x = 16sin(t)^3
   * y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
   */
  cartesian (radian) {
    let scale = 0.8
    return {
      x: scale * 16 * Math.pow(Math.sin(radian), 3),
      y: -scale * (13 * Math.cos(radian) -
          5 * Math.cos(2 * radian) -
          2 * Math.cos(3 * radian) -
          Math.cos(4 * radian))
    }
  }

  // create heart vectors
  createVectors () {
    this.vertices = []
    let pieces = this.pieces
    for (let i = 0; i < pieces; i++) {
      let radian = i / pieces * (Math.PI * 2)
      this.vertices.push(this.cartesian(radian))
    }
  }

  draw ({ fillColor, lineColor, fill }) {
    this.clear()
    // draw
    this.ctx.beginPath()
    this.vertices.forEach(vertex => {
      this.ctx.lineTo(this.centerX + vertex.x, this.centerY + vertex.y)
    })
    if (fill) {
      this.ctx.fillStyle = fillColor
      this.ctx.fill()
    } else {
      this.ctx.strokeStyle = lineColor
      this.ctx.stroke()
    }
    this.ctx.closePath()
  }

  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  // 抗锯齿
  antiTooth (ratio) {
    this.canvas.style.width = this.width + 'px'
    this.canvas.style.height = this.height + 'px'
    this.canvas.height = 2 * this.height * ratio
    this.canvas.width = 2 * this.width * ratio
    this.ctx.scale(ratio * 2, ratio * 2)
  }

}

export default Heart