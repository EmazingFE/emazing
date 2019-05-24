<template>
  <div id="container"></div>
</template>
<script>
  export default {
    props: {
      navs: Array,
      width: {
        type: Number,
        default: 1140
      },
      height: {
        type: Number,
        default: 500
      },
    },
    data() {
      return {
        camera: null,
        controls: null,
        scene: null,
        renderer: null,
        objects: [],
        light: null,
        container: null,
        sphereTab: []
      }
    },
    mounted() {
      this.init()
      this.animate()  
    },
    methods: {
      init() {
        console.error(window.THREE)
        // 照相机-透视投影
        this.camera = new window.THREE.PerspectiveCamera(75, this.width / this.height, 1, 1000)
        this.camera.position.z = 68
        // controls
        this.controls = new window.THREE.OrbitControls(this.camera)
        this.controls.maxDistance = 300
        this.controls.minDistance = 30
        // scene
        this.scene = new window.THREE.Scene()

        // 球体-小星星
        let lumiereS
        for (var i = 0; i < 100; i++) {
            // Phong材质
            lumiereS = new window.THREE.MeshPhongMaterial({
                emissive: '#fff'
            })
            this.sphereTab.push(new window.THREE.Mesh(new window.THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS))
        }
        for (var j = 0; j < this.sphereTab.length; j++) {
            this.sphereTab[j].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300)
            
            // 小星星添加到场景中
            this.scene.add(this.sphereTab[j])
        }
        // render
        this.renderer = new window.THREE.WebGLRenderer({
            antialias: true
        })
        this.renderer.sortObjects = false
        this.renderer.setClearColor(0x293449, 1)
        this.renderer.setSize(this.width, this.height)
        this.container = document.getElementById('container')
        this.container.appendChild(this.renderer.domElement)
        window.addEventListener('resize', this.onWindowResize(), false)
      },
      onWindowResize() {
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.width, this.height)
        this.render()
      },
      animate() {
        var timer = 0.00001 * Date.now()
        for (var i = 0, il = this.sphereTab.length; i < il; i++) {
            var sfere = this.sphereTab[i]
            sfere.position.x = 400 * Math.sin(timer + i)
            sfere.position.z = 400 * Math.sin(timer + i * 1.1)
        }
        requestAnimationFrame(this.animate)
        this.controls.update()
        this.render()
      },
      render() {
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>
<style lang="sass">
  #container
    margin: 0
    touch-action: pan-y
</style>