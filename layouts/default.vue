<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button-show {
  display: flex;
  width: 7.25rem;
  height: 2.7rem;
  margin: 1.875rem auto;
  border-radius: 0.313rem;
  color: #ffffff;
  background: #41443c;
  justify-content: space-evenly;
}

.itinerary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 1.125rem;
}

.image-clock {
  width: 1.25rem;
}

hr {
  margin: 0.938rem;
  border: solid 0.063rem #41443c;
  width: 12.5rem;
  align-self: center;
}

/*
 * Nuxt Transition
 */
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.8, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 25rem;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
