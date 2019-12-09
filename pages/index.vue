<template>
  <div class="container">
    <div class="index-wrapper">
      <Home />
      <InvitationNote />
      <BackgroundNote />
      <NavBar />
    </div>
  </div>
</template>

<script>
import Home from '~/components/HomePage/Home'
import InvitationNote from '~/components/Invitation'
import BackgroundNote from '~/components/Recitation'
import NavBar from '~/components/Navbar'

export default {
  components: {
    Home,
    InvitationNote,
    BackgroundNote,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables';

.container {
  display: flex;
  align-items: center;
  text-align: center;
  // min-height: 100vh;
}

.index-wrapper {
  width: 100%;

  @media (min-width: $mobileAndroid) {
    height: $heightAndroid;
    background-image: url('~assets/images/BackgroundAndroid.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: $mobileMedium) {
    height: $heightMedium;
    background-image: url('~assets/images/Background.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: $mobileLarge) {
    height: $heightLarge;
    background-image: url('~assets/images/BackgroundLarge.png');
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
