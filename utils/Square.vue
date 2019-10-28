<template>
  <div class="square-wrapper">
    <div class="square"></div>
    <span class="countdown-wrapper">HARI LAGI</span>
  </div>
</template>

<script>
export default {
  name: 'Square'
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.square-wrapper {
  position: relative;
  top: 10rem;
}

.square {
  margin: auto;
  height: 4.275rem;
  width: 4.25rem;
  opacity: 0.5;
  border-radius: 0.313rem;
  background-color: #000000;
}

.countdown-wrapper {
  position: relative;
  top: 0.5rem;
  color: $fontBrown;
  font-family: $fontPrimary;
}
</style>
