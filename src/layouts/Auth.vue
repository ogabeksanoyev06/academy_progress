<template>
  <div class="auth" style="background-color: rgb(245, 249, 253)">
    <div class="auth__column auth__content">
      <div class="auth__wrap">
        <div
          class="auth__header w-100"
          :class="isDesktopSmall ? 'justify-content-center' : ''"
        >
          <div class="d-flex mb-30">
            <router-link to="/" class="auth_logo">
              <img src="/svg/logo1.svg" class="mb-10" alt="" />
              <AppText weight="700" size="22" line-height="24">
                Progress Academy
              </AppText>
            </router-link>
          </div>
        </div>
        <div class="auth__lang-buttons mb-30">
          <div class="switch-text">
            <div
              class="switch-label"
              v-for="(item, i) in langs"
              :key="i"
              :class="idLang === item.id ? 'active' : ''"
              @click="activeLang(item.id)"
            >
              {{ item.name }}
            </div>
            <div class="animation start"></div>
          </div>
        </div>
        <RouterView />
        <div class="auth__footer">
          <AppText
            size="14"
            line-height="17"
            :class="isDesktopSmall ? 'text-center' : ''"
          >
            Copyright © 2023 Online platforma
          </AppText>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import "../assets/styles/pages/auth.scss";
export default {
  name: "AppAuth",
  components: {},
  data() {
    return {
      idLang: 0,
      langs: [
        {
          id: 0,
          name: "O'zbekcha",
        },
        {
          id: 1,
          name: "Русский",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth", "setAccessToken", "setIsLoggedOn"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    activeLang(idLang) {
      this.idLang = idLang;
    },
  },
  mounted() {
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss">
@import "../assets/styles/abstracts/variables";

.auth__form {
  .checkbox__input {
    &:checked ~ .checkbox__title:before {
      background-image: url("../../public/svg/check-blue.svg") !important;
      border-color: $color-main;
    }

    &::before {
    }
  }
}
</style>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
