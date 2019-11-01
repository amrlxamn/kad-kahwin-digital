<template>
  <div class="home-wrapper">
    <h3 class="header-wrapper">Walimatul Urus</h3>
    <span class="primary-wrapper"
      >ANDA DIJEMPUT UNTUK <br />
      MERAIKAN MAJLIS</span
    >
    <span class="name-wrapper">Amirul Azwar<br />&amp;<br />Nurul Asyikin</span>
    <span class="date-wrapper">AHAD, 29 DISEMBER 2019<br />12 PM - 4 PM</span>
    <a
      href="https://www.google.com/maps/place/Dewan+Alamanda+Sekysen+20/@3.0531362,101.5357508,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4d42ece6a359:0x4233ba2f9bc619f5!8m2!3d3.0531362!4d101.5379395"
      class="venue-wrapper"
      >DEWAN ALAMANDA<br />SEKSYEN 20, SHAH ALAM</a
    >
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables';

.home-wrapper {
  display: grid;
  width: $mediumMobile;
}

.header-wrapper {
  position: relative;
  width: 100%;
  color: $fontBrown;
  font-family: $fontStyle;

  @media (min-width: $mobileSmall) {
    top: 10px;
    font-size: $fontMediumSmall;
  }
}

.primary-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;

  @media (min-width: $mobileSmall) {
    top: 30px;
    font-size: $fontSmall;
  }
}

.name-wrapper {
  position: relative;
  font-size: $fontMedium;
  font-family: $fontStyle;
  color: $fontBright;

  @media (min-width: $mobileMedium) {
    top: 70px;
  }
}

.date-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;

  @media (min-width: $mobileMedium) {
    top: 100px;
  }
}

.venue-wrapper {
  position: relative;
  color: $fontBrown;
  font-family: $fontPrimary;
  cursor: pointer;
  z-index: 100;

  @media (min-width: $mobileMedium) {
    top: 120px;
  }
}
</style>
