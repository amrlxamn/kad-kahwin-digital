<template>
  <div class="invite-wrapper">
    <span class="greeting"
      >Assalamualaikum Warrahmatullahi<br />
      Wabarakatuh</span
    ><br />
    <span class="word-polite"
      >Dengan penuh rasa kesyukuran ke hadrat Illahi, <br />
      dengan segala hormatnya, kami</span
    ><br />
    <span class="parents-name"
      >AZMAN BIN SALLEH<br />&amp;<br />NUR AZIZAH BINTI AHMAD</span
    ><br />
    <span class="word-polite"
      >mempersilakan Dato/Datin/Tuan/Puan/Encik/Cik <br />
      sekeluarga ke majlis perkahwinan anakanda kami</span
    ><br />
    <div class="fullname-wrapper">
      <span>AMIRUL AZWAR BIN AZMAN</span><br />
      <span class="word-polite">dengan pasangannya</span><br />
      <span>NURUL ASYIKIN BINTI AZLI</span>
    </div>
    <br />
    <div class="contact-info">
      <span>Tarikh<br />Ahad, 29 Disember 2019</span>
    </div>
    <br />
    <div class="contact-info">
      <span>Masa<br />11.30 AM - 4.00 PM</span>
    </div>
    <br />
    <div class="contact-info">
      <span
        >Tempat<br />Jalan Singa 20/1, Dewan Alamanda,<br />
        Seksyen 20, 40300, Shah Alam, Selangor</span
      >
    </div>
    <ButtonShow />
  </div>
</template>

<script>
import ButtonShow from '~/utils/button'

export default {
  name: 'Invite',
  components: {
    ButtonShow
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.greeting {
  font-family: $fontInfo;
  font-weight: $fontHeavy;
  font-style: $fontItalic;

  @media (min-width: $mobileMedium) {
    margin-top: 7.5rem;
    font-size: 0.938rem;
  }
  @media (min-width: $mobileAndroid) {
    margin-top: 7.5rem;
    font-size: 0.938rem;
  }
  @media (min-width: $mobileLarge) {
    margin-top: 9.5rem;
  }
}

.invite-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: $fontPrimary;
  color: $fontGrey;
}

.parents-name {
  @media (min-width: $mobileMedium) {
    font-size: 20px;
  }
  @media (min-width: $mobileAndroid) {
    font-size: 20px;
  }
}

.word-polite {
  font-family: $fontInfo;
  font-style: $fontItalic;
  font-weight: $fontLight;

  @media (min-width: $mobileMedium) {
    font-size: 15px;
    padding: {
      left: 20px;
      right: 20px;
    }
  }
  @media (min-width: $mobileAndroid) {
    font-size: 15px;
    padding: {
      left: 20px;
      right: 20px;
    }
  }
}

.fullname-wrapper {
  @media (min-width: $mobileMedium) {
    font-size: 20px;
  }
  @media (min-width: $mobileAndroid) {
    font-size: 20px;
  }
}

.contact-info {
  @media (min-width: $mobileMedium) {
    padding: {
      left: 15px;
      right: 15px;
    }
  }
  @media (min-width: $mobileAndroid) {
    padding: {
      left: 15px;
      right: 15px;
    }
  }
}
</style>
