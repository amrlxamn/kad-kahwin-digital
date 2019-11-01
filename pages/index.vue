<template>
  <div class="container">
    <div>
      <Home />
      <Frame />
      <Square />
    </div>
  </div>
</template>

<script>
import Home from '~/components/HomePage/Home'
import Frame from '~/components/Images/Frame'
import Square from '~/utils/Square'

export default {
  components: {
    Home,
    Frame,
    Square
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables';

.container {
  margin: 0 auto;
  padding: 0 auto;
  max-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
