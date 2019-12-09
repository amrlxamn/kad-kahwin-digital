<template>
  <div>
    <div class="image-wrapper">
      <div class="note-image-recite-wrapper">
        <span class="note-image-wrapper"
          >Ya Allah, berkatilah satukanlah hati<br />kedua pasangan mempelai ini
          dengan<br />iman, keyakinan dan tawakal<br />kepadaMu, panjangkan umur
          mereka,<br />lapangkanlah rezeki mereka, dekatlah<br />mereka menuju
          kebaikan, jauhkanlah<br />mereka dari keburukan, kurniakanlah<br />mereka
          zuriat yang soleh dan<br />solehah.</span
        >
        <div class="thank-you">
          <span>~ Terima Kasih ~</span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import image from '~/assets/images/Floral.png'

export default {
  name: 'Floral',
  data() {
    return {
      image: {
        image
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.image-wrapper {
  margin-bottom: 12.5rem;

  @media (min-width: $mobileMedium) {
    height: 15.188rem;
    background-image: url('~assets/images/Floral.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: $mobileAndroid) {
    height: 15.188rem;
    background-image: url('~assets/images/FloralAndroid.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: $mobileLarge) {
    height: 18rem;
    background-image: url('~assets/images/FloralLarge.png');
    background-repeat: no-repeat;
    background-position: center;
  }
}

.note-image-recite-wrapper {
  width: 100%;

  @media (min-width: $mobileMedium) {
    padding: 2rem;
  }
  @media (min-width: $mobileAndroid) {
    padding: 2rem;
  }
  @media (min-width: $mobileLarge) {
    padding: 3.5rem;
  }
}

.note-image-wrapper {
  display: flex;
  justify-content: center;
  font-family: $fontPrimary;
  font-size: 0.875rem;
  color: $fontBrown;
}

.thank-you {
  font-family: $fontStyle;
  color: $fontBrown;
  font-size: 1.875rem;

  @media (min-width: $mobileMedium) {
    margin: {
      top: 3.75rem;
      bottom: 3.75rem;
    }
  }
  @media (min-width: $mobileAndroid) {
    margin: {
      top: 3.75rem;
      bottom: 3.75rem;
    }
  }
  @media (min-width: $mobileLarge) {
    margin: {
      top: 5.75rem;
    }
  }
}
</style>
