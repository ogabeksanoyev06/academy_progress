<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__column auth__content">
        <div class="auth__wrap">
          <div
            class="auth__header w-100"
            :class="isDesktopSmall ? 'justify-content-center' : ''"
          >
            <div class="d-flex" :class="isMobile ? 'mb-30' : 'mb-60'">
              <router-link to="/" class="logo">
                <img src="/svg/logo1.svg" class="mb-10" alt="" />
                <AppText weight="700" size="22" line-height="24">
                  Progress Academy
                </AppText>
              </router-link>
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

      <div class="auth__column auth__photo greyBg" v-if="!isDesktopSmall">
        <img src="/images/login/login.png" class="auth__banner" alt="" />

        <div class="auth__professor">
          <kinesis-element class="layer" :strength="8">
            <img src="/images/login/login-professor.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__science">
          <kinesis-element class="layer" :strength="10">
            <img src="/images/login/login-science.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__test">
          <kinesis-element class="layer" :strength="12">
            <img src="/images/login/login-test.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__round">
          <kinesis-element class="layer" :strength="15">
            <img src="/icons/round.svg" alt="" />
          </kinesis-element>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { mapMutations } from "vuex";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

import "../assets/styles/pages/auth.scss";

export default {
  name: "AppAuth",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },

  methods: {
    ...mapMutations(["setWindowWidth", "setAccessToken", "setIsLoggedOn"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
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
