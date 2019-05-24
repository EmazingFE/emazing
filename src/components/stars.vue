<template lang="html">
  <div>
    <div class="starsWrapper">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
// stars
@function multiple-box-shadow ($n) 
  $value: '#{random(2000)}px #{random(2000)}px #409EFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #409EFF'
  @return unquote($value)

$shadows: multiple-box-shadow(700), multiple-box-shadow(200), multiple-box-shadow(100)
$size: 1
$speed: 20

@for $i from 1 to 3
  #stars#{$i}
    width: #{$i * $size}px
    height: #{$i * $size}px
    border-radius: 50%
    background: transparent
    box-shadow: nth($shadows, $i)
    animation: animStar #{$i * $speed}s linear infinite    
    &:after
        content: " "
        width: #{$i * $size}px
        height: #{$i * $size}px
        background: transparent
        box-shadow: nth($shadows, $i)

@keyframes animStar
  from	
    transform: translateY(-1000px)  
  to		
    transform: translateY(0px)
</style>
