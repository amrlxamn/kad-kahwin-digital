<template>
  <div id="app">
    <Countdown date="2019-12-29T08:15:00"></Countdown>
  </div>
</template>

<script>
import Countdown from './Countdown'

export default {
  name: 'App',
  components: {
    Countdown
  }
}
</script>

<style lang="scss" scoped></style>
