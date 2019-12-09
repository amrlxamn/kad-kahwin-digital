<template>
  <div>
    <div class="navbar-wrapper">
      <div class="bottom-navigation">
        <div class="menu">
          <span class="call link" @click="isCall = !isCall">
            <img src="~/assets/images/Navigation/call.png" />
            <span class="svg-text">CALL</span>
          </span>
          <span class="link">
            <a
              href="https://www.google.com/maps/place/Dewan+Alamanda+Sekysen+20/@3.0531362,101.5357508,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4d42ece6a359:0x4233ba2f9bc619f5!8m2!3d3.0531362!4d101.5379395"
            >
              <img src="~/assets/images/Navigation/map.png" />
              <span class="svg-text">
                LOCATION
              </span>
            </a>
          </span>
          <span class="link" @click="onInvite">
            <img src="~/assets/images/Navigation/invitation.png" />
            <span class="svg-text">INVITATION</span>
          </span>
        </div>
      </div>
    </div>
    <transition name="fade" mode="in-out">
      <div v-show="!isCall">
        <div class="overlay">
          <div class="action-call">
            <div class="row">
              <div class="wrapper">
                <a href="tel:0136295150">
                  <span class="name">AZMAN (AYAH PENGANTIN)</span>
                </a>
                <div class="icon-wrapper">
                  <img src="~/assets/images/Navigation/callblack.png" />
                </div>
              </div>
              <div class="wrapper">
                <a href="tel:0136687989">
                  <span class="name">AZIZAH (IBU PENGANTIN)</span>
                </a>
                <div class="icon-wrapper">
                  <img src="~/assets/images/Navigation/callblack.png" />
                </div>
              </div>
              <div class="wrapper">
                <a href="tel:0102919656">
                  <span class="name">AMIRUL (ABANG PENGANTIN)</span>
                </a>
                <div class="icon-wrapper">
                  <img src="~/assets/images/Navigation/callblack.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isCall: true
    }
  },
  methods: {
    onInvite() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

a {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.navbar-wrapper {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.bottom-navigation {
  height: 4.625rem;
  background: $navBar;
  font-family: $fontPrimary;
  margin: 0 auto;
}

.menu {
  display: flex;
  justify-content: space-around;
  padding: 0.313rem;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  margin: 10px;
}

.svg-text {
  font-size: 0.813rem;
  color: $fontWhite;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 26.25rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 11;

  &:active {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: $mobileMedium) {
    height: 30rem;
  }
  @media (min-width: $mobileAndroid) {
    height: 27.8rem;
  }
  @media (min-width: $mobileLarge) {
    height: 34.3rem;
  }
}

.action-call {
  background-color: #f5f5f6;
  width: 100%;
  // padding: 30px 0px 150px 0px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 4.688rem;
  max-width: 420px;
  max-height: 90vh;
  overflow: scroll;
  z-index: 10;

  &:active {
    transform: translateY(0);
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
}

.row {
  font-family: $fontPrimary;
  font-size: 0.813rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
}

.icon-wrapper {
  display: flex;
  flex-direction: row-reverse;
}
</style>
