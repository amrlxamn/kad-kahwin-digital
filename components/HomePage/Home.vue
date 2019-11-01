<template>
  <div class="home-wrapper">
    <h3 class="header-wrapper">Walimatul Urus</h3>
    <span class="primary-wrapper"
      >ANDA DIJEMPUT UNTUK <br />
      MERAIKAN MAJLIS</span
    >
    <UpperLine class="upper-line" />
    <span class="name-wrapper">Amirul Azwar<br />&amp;<br />Nurul Asyikin</span>
    <BottomLine class="bottom-line" />
    <span class="date-wrapper">AHAD, 29 DISEMBER 2019<br />12 PM - 4 PM</span>
    <a
      href="https://www.google.com/maps/place/Dewan+Alamanda+Sekysen+20/@3.0531362,101.5357508,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4d42ece6a359:0x4233ba2f9bc619f5!8m2!3d3.0531362!4d101.5379395"
      class="venue-wrapper"
      >DEWAN ALAMANDA<br />SEKSYEN 20, SHAH ALAM</a
    >
  </div>
</template>

<script>
import UpperLine from '~/assets/images/UpperLine.svg'
import BottomLine from '~/assets/images/BottomLine.svg'

export default {
  name: 'Home',
  components: {
    UpperLine,
    BottomLine
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables';

.home-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: $mediumMobile;
}

.header-wrapper {
  position: relative;
  width: 100%;
  color: $fontBrown;
  font-family: $fontStyle;

  @media (min-width: $mobileSmall) {
    bottom: 100px;
    font-size: $fontMediumSmall;
  }
}

.upper-line {
  position: relative;
  width: 100%;

  @media (min-width: $mobileMedium) {
    bottom: 50px;
  }
}

.bottom-line {
  position: relative;
  width: 100%;

  @media (min-width: $mobileMedium) {
    bottom: 10px;
  }
}

.primary-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;

  @media (min-width: $mobileSmall) {
    bottom: 80px;
    font-size: $fontSmall;
  }
}

.name-wrapper {
  position: relative;
  font-size: $fontMedium;
  font-family: $fontStyle;
  color: $fontBright;

  @media (min-width: $mobileMedium) {
    bottom: 30px;
  }
}

.date-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;

  @media (min-width: $mobileMedium) {
    top: 20px;
  }
}

.venue-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;
  cursor: pointer;
  z-index: 1;

  @media (min-width: $mobileMedium) {
    top: 30px;
  }
}
</style>
