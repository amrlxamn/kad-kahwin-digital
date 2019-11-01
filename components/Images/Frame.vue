<template>
  <div class="frame-wrapper">
    <FrameBorder />
  </div>
</template>

<script>
import FrameBorder from '~/assets/images/Frame.svg'

export default {
  name: 'Frame',
  components: {
    FrameBorder
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.frame-wrapper {
  position: absolute;
  width: 50%;

  @media (min-width: $mobileMedium) {
    left: 0.938rem;
    top: 30px;
  }
}
</style>
