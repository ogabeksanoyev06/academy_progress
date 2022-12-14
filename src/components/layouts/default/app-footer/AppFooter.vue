<template>
  <footer class="footer" :class="isDesktopSmall ? 'py-30' : 'py-60'">
    <div class="container">
      <div class="footer__inner">
        <router-link to="/" class="footer__logo">
          <img src="/svg/logo2.svg" alt="" />
        </router-link>
        <div class="footer__details">
          <div class="footer__details-item">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 18 : 21"
              weight="600"
              class="mb-20"
            >
              Bo'limlar
            </app-text>

            <div class="footer__links">
              <router-link to="/choose-test" tag="a">Testlar</router-link>
              <router-link to="/video-course" tag="a">
                Video kurslar
              </router-link>
              <router-link to="/choose-internation-test" tag="a">
                Xalqaro tadqiqotlar
              </router-link>
              <router-link to="/library" tag="a">Kutubxona</router-link>
            </div>
          </div>
          <div class="footer__details-item">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 18 : 21"
              weight="600"
              class="mb-20"
            >
              Kurslar
            </app-text>

            <div class="footer__links">
              <router-link to="/choose-test" tag="a">Web design</router-link>
              <router-link to="/video-course" tag="a"> 3D </router-link>
              <router-link to="/choose-internation-test" tag="a">
                Web dasturlash
              </router-link>
              <router-link to="/library" tag="a">
                Backend dasturlash
              </router-link>
            </div>
          </div>
          <div class="footer__details-item">
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 18 : 21"
              weight="600"
              class="mb-20"
            >
              Aloqa
            </app-text>

            <div class="footer__links">
              <a href="tel:+998930819140"> +998 93 081 91 40 </a>
              <a href="pa@progressacademy.uz"> progressacademy@.uz </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/+dcbeoS6DQvhmOTU6"
              >
                Yordam
              </a>
            </div>
          </div>
          <div class="footer__details-item">
            <div class="footer__socials">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 18 : 21"
                weight="600"
                class="mb-20"
              >
                Ijtimoiy tarmoqlar
              </app-text>
              <div class="footer__socials-wrap">
                <a
                  href="https://www.facebook.com/MiramanEducation"
                  target="_blank"
                  class="footer__socials-item"
                  ><img src="/icons/facebook.svg" alt="" /></a
                ><a
                  href="https://www.youtube.com/channel/UCeilMUjnNEDxgTqqbKCDRRQ"
                  target="_blank"
                  class="footer__socials-item"
                  ><img src="/icons/youtube.svg" alt="" /></a
                ><a
                  href="https://www.instagram.com/miramaneducation"
                  target="_blank"
                  class="footer__socials-item"
                  ><img src="/icons/instagram.svg" alt="" /></a
                ><a
                  href="https://t.me/MiramanEducation"
                  target="_blank"
                  class="footer__socials-item"
                  ><img src="/icons/telegram.svg" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";

export default {
  name: "AppFooter",
};
</script>

<style scoped></style>
