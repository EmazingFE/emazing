<template>
  <!-- particles -->
  <div class="emazing-particles">
    <div id="particles-container"></div>
  </div>
</template>

<script>
	export default {
	    data () {
	      return {
		      	NUM_PARTICLES: ( ( this.ROWS = 100 ) * ( this.COLS = 300 ) ),
			    THICKNESS: Math.pow( 80, 2 ),
			    SPACING: 3,
			    MARGIN: 100,
			    COLOR: 220,
			    DRAG: 0.95,
			    EASE: 0.25,
			    particle: {
				  vx: 0,
				  vy: 0,
				},
			    container: null,
			    canvas: null,
			    mouse: null,
			    stats: null,
			    list: [],
			    ctx: null,
			    tog: true,
			    man: false,
			    dx: null,
			    dy: null,
			    mx: null,
			    my: null,
			    d: null,
			    t: null, 
			    f: null,
			    a: null,
			    b: null,
			    i: null,
			    n: null,
			    w: null,
			    h: null,
			    p: null,
			    s: null,
			    r: null,
			    c: null,
	      }
	    },
	    mounted () {
	      this.init()
		  this.step()
	    },
	    methods: {
			init () {
				this.container = document.getElementById( 'particles-container' )
				this.canvas = document.createElement( 'canvas' )
				this.ctx = this.canvas.getContext( '2d' )
				this.man = false
				// this.tog = true

				// this.list = []

				this.w = this.canvas.width = this.COLS * this.SPACING + this.MARGIN * 2
				this.h = this.canvas.height = this.ROWS * this.SPACING + this.MARGIN * 2

				this.container.style.marginLeft = Math.round( this.w * -0.5 ) * 2 + 'px'
				// this.container.style.marginTop = Math.round( this.h * -0.5 ) * 2 + 'px'
				// this.container.style.border = '1px solid red'

				for ( let i = 0; i < this.NUM_PARTICLES; i++ ) {

					this.p = Object.create( this.particle )
					this.p.x = this.MARGIN + this.SPACING * ( i % this.COLS )
					this.p.ox = this.p.x
					this.p.y = this.MARGIN + this.SPACING * Math.floor( i / this.COLS )
					this.p.oy = this.p.y

					this.list[i] = this.p
				}

				let vm = this

				this.container.addEventListener( 'mousemove', function(e) {


					vm.bounds = vm.container.getBoundingClientRect()
					vm.mx = e.clientX - vm.bounds.left
					vm.my = e.clientY - vm.bounds.top
					vm.man = true
					// console.error(vm.bounds)
					// console.error(e.clientX)
					// console.error(e.clientY)

				})

				// if ( typeof this.Stats === 'function' ) {
				// 	document.body.appendChild( ( this.stats = new Stats() ).domElement )
				// }

				this.container.appendChild( this.canvas )

				// console.error(this.container)
				// console.error(this.canvas)
				// console.error(this.ctx)
				// console.error(this.list)
			},
			step () {
				// if ( this.stats ) this.stats.begin()

			  // if ( this.tog = !this.tog ) {

			    // if ( !this.man ) {

			    //   let t = +new Date() * 0.001;
			    //   this.mx = this.w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * this.w * 0.45 );
			    //   this.my = this.h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * this.h * 0.45 );
			    // }
			      
			    for ( let i = 0; i < this.NUM_PARTICLES; i++ ) {
			      
			      this.p = this.list[i]
			      
			      this.d = ( this.dx = this.mx - this.p.x ) * this.dx + ( this.dy = this.my - this.p.y ) * this.dy
			      this.f = -this.THICKNESS / this.d

			      if ( this.d < this.THICKNESS ) {
			        this.t = Math.atan2( this.dy, this.dx )
			        this.p.vx += this.f * Math.cos(this.t)
			        this.p.vy += this.f * Math.sin(this.t)
			      }

			      this.p.x += ( this.p.vx *= this.DRAG ) + (this.p.ox - this.p.x) * this.EASE
			      this.p.y += ( this.p.vy *= this.DRAG ) + (this.p.oy - this.p.y) * this.EASE

			    }

			  // } else {

			  	this.a = this.ctx.createImageData( this.w, this.h )


			    for ( let i = 0; i < this.NUM_PARTICLES; i++ ) {

			      this.p = this.list[i]
			      this.n = ( ~~this.p.x + ( ~~this.p.y * this.w ) ) * 4
			      this.a.data[this.n]
				      = this.a.data[this.n+1]
				      = this.a.data[this.n+2]
				      = this.a.data[this.n+3]
				      = this.COLOR
				      = 255

			    }

			    this.ctx.putImageData( this.a, 0, 0 )
			  // }

			  // if ( this.stats ) this.stats.end()

			  window.requestAnimationFrame( this.step )
			},
	    }
	}
</script>

<style lang="sass" scoped>
	#particles-container
		position: absolute
	    left: 50%
	    top: 50%
	    color: red
	#stats
		position: absolute
		right: 10px
		top: 10px
</style>
