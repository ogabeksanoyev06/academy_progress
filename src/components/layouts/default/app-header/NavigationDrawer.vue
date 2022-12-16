<template>
  <div class="navigation-drawer">
    <div class="header__auth mb-20 mr-20">
      <AppButton
        theme="secondary"
        :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
        sides="20"
        height="40"
        class="header__login mr-5"
        v-if="!isDesktop"
        @click="$router.push({ path: '/sign-in' })"
      >
        Kirish
      </AppButton>
      <AppButton
        theme="white"
        :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
        sides="20"
        height="40"
        class="header__register"
        v-if="!isDesktop"
        @click="$router.push({ path: '/sign-up' })"
        >Ro'yxatdan o'tish
      </AppButton>
    </div>
  </div>
</template>
<script>
import AppButton from "../../../shared-components/AppButton";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  components: { AppButton },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
};
</script>

<style lang="scss" scoped>
.navigation-drawer {
  position: fixed;
  top: 0px;
  left: 0;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 99999;
  overflow-y: auto;
  padding: 30px 10px;
}

@media (max-width: 500px) {
  .navigation-drawer {
    max-width: 85%;
  }
}
</style>
