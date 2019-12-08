<template>
  <div class="home-wrapper">
    <h3 class="header-wrapper">Walimatul Urus</h3>
    <br />
    <div class="groom-bride-name">
      <UpperLine />
      <br />
      <span class="name-wrapper">
        Amirul Azwar<br />&amp;<br />Nurul Asyikin</span
      >
      <br />
      <BottomLine />
    </div>
    <br />
    <span class="date-wrapper"
      >AHAD, 29 DISEMBER 2019<br />11.30 AM - 4 PM</span
    >
    <br />
    <span class="venue-wrapper">DEWAN ALAMANDA<br />SEKSYEN 20, SHAH ALAM</span>
    <br />
    <CountdownTimer />
  </div>
</template>

<script>
import UpperLine from '~/assets/images/UpperLine.svg'
import BottomLine from '~/assets/images/BottomLine.svg'
import CountdownTimer from '~/components/Countdown/App'

export default {
  name: 'Home',
  components: {
    UpperLine,
    BottomLine,
    CountdownTimer
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables';

.home-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: $mobileMedium) {
    margin-top: 3.438rem;
  }
  @media (min-width: $mobileLarge) {
    margin-top: 6.438rem;
  }
}

.header-wrapper {
  color: $fontBrown;
  font-family: $fontStyle;

  @media (min-width: $mobileSmall) {
    font-size: $fontMediumSmall;
  }
}

.groom-bride-name {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.name-wrapper {
  font-family: $fontStyle;
  color: $fontBright;

  @media (min-width: $mobileMedium) {
    font-size: 2.5rem;
  }
}

.date-wrapper {
  color: $fontBrown;
  font-family: $fontPrimary;
}

.venue-wrapper {
  color: $fontBrown;
  font-family: $fontPrimary;
}
</style>
