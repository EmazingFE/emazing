<template>
  <div class="fun-body flex columns justify-center align-center">
    <div class="typing flex align-center" id="welcome" :class="{'typing-end': typingEnd}">
      <span class="yellow">{{typedText}}</span>
      <input class="input"
        spellcheck="false"
        v-model="egg" 
        placeholder="Emm..." />
    </div>
  </div>
</template>
<script>
  import { removeClass } from '@/utils/dom'
  import checkEgg from '@/utils/egg'

  export default {
    data () {
      return {
        text: 'We Are ',
        typedText: '',
        typingText: [],
        typingEnd: false,
        egg: '',
      }
    },
    methods: {
      typing(text) {
        return new Promise((resolve, reject) => {
          if (text) {
            this.typingText = text.split('')
          } else {
            this.typedText += this.typingText.shift()
            this.typingEnd = this.typedText === this.text
            if (this.typingEnd) {
              this.$el.querySelector('.input').focus()
              removeClass(this.$el.querySelector('.typing'), 'typing')
            }
          }

          if (this.typingText.length) {
            let interval = Math.random() * 300
            interval = interval < 150 ? 150 : interval
            setTimeout(() => {
              resolve(this.typing())
            }, interval)
          } else {
            resolve()
          }
        })
      },
      keyPress(e) {
        if (e.key === 'Enter') {
          this.check()
        }
      },
      pass() {
        sessionStorage.setItem('egg', this.egg)
        this.$router.push('/home')
      },
      check() {
        checkEgg(this.egg).then(() => {
          this.pass()
        }).catch(() => {
          console.log('Aha...')
        })
      }
    },
    mounted() {
      this.check()
      this.typing(this.text)
      this.$el.querySelector('.input').addEventListener('keypress', this.keyPress)
    }
  }
</script>
<style lang="sass">
  #welcome
    span, input
      font-size: .4rem
      line-height: 1
    &.typing
      &:after
        content: '|'
        color: $yellow
        font-size: .4rem
        -webkit-animation: blink 1s infinite
        animation: blink 1s infinite
    .input
      background: transparent
      padding: .05rem 0
      margin: 0
      width: 0
      outline: 0
      color: $blue
      border: 0
      transition: width 1s
      border-bottom: 2px solid $blue
    &.typing-end
      .input
        margin-left: .1rem
        width: 1.7rem
      &:after
        content: '!'
        color: $yellow
        font-size: .4rem
        animation: none

  @keyframes blink 
    0% 
      opacity: 0
    50% 
      opacity: 0
    51% 
      opacity: 1
    100% 
      opacity: 1
</style>