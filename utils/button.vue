<template>
  <div class="button-wrapper">
    <button class="button-show" @click="isShow = !isShow">
      <div class="image-clock">
        <img src="~/assets/images/clock.png" />
      </div>
      <span>Aturcara</span>
    </button>
    <div v-show="!isShow" class="itinerary">
      <h3 class="itinerary-name">Aturcara</h3>
      <span>29 Disember 2019</span>
      <hr />
      <span>11.30 AM - Ketibaan Tetamu</span>
      <span>12.00 PM - Ketibaan Pengantin</span>
      <span>12.00 PM - Jamuan Makan</span>
      <span>4.00 PM - Jamuan Berakhir</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.button-wrapper {
  margin-bottom: 1.563rem;
}

.itinerary-name {
  font-size: 1.438rem;
  font-weight: $fontHeavy;
}
</style>
