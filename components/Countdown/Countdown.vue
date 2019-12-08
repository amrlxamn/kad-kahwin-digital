<template>
  <div class="countdown-timer-wrapper">
    <div class="circle-timer">
      <div class="block">
        <p class="digit">{{ days }}</p>
        <p class="text">Hari</p>
      </div>
    </div>
    <div class="circle-timer">
      <div class="block">
        <p class="digit">{{ hours }}</p>
        <p class="text">Jam</p>
      </div>
    </div>
    <div class="circle-timer">
      <div class="block">
        <p class="digit">{{ minutes }}</p>
        <p class="text">Minit</p>
      </div>
    </div>
    <div class="circle-timer">
      <div class="block">
        <p class="digit">{{ seconds }}</p>
        <p class="text">Saat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.countdown-timer-wrapper {
  display: flex;
  justify-content: center;
}

.block {
  display: flex;
  flex-direction: column;
}

.text {
  color: $fontBrown;
  font-family: $fontPrimary;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: $fontWhite;
  font-size: 20px;
  font-weight: 100;
  font-family: $fontPrimary;
  margin: 10px;
}

.circle-timer {
  display: flex;
  justify-content: center;
  margin: 5px;
  height: 50px;
  width: 50px;
  opacity: 0.5;
  border-radius: 100%;
  background-color: #000000;
  text-align: center;
}
</style>
