<template>
  <div>
    <AppHeader />
    <div class="page__wrap py-30">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="700"
          >
            Mening profilim
          </app-text>
        </div>
        <div class="content">
          <div
            class="sidebar sm mt-20"
            :class="isMobile ? '' : isDesktopMedium ? 'mr-30' : 'mr-60'"
          >
            <div class="account__details text-center">
              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 24"
                weight="700"
                class="mb-10"
              >
                Og'abek Sanoyev
              </AppText>

              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 24"
                weight="700"
                class="color-secondary mb-10"
              >
                Hisobim: {{ userBalance.balance }} UZS
              </AppText>

              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 24"
                weight="700"
                class="color-secondary mb-10"
              >
                Reyting: {{ userRating.position }}
                {{ userRating.examBall }} ball
              </AppText>
            </div>

            <div class="sidebar__menu">
              <button
                class="sidebar__menu-item text-center"
                :class="
                  currentRouteName === item.path.replace('/', '')
                    ? 'active'
                    : ''
                "
                v-for="(item, idx) in sidebarMenu"
                :key="idx"
                @click="$router.push({ path: `${item.path}` })"
              >
                {{ item.title }}
              </button>
            </div>
          </div>
          <div
            class="content__main lg bordered radius w-100"
            :class="
              isMobileSmall ? 'pa-15' : isDesktopSmall ? 'pa-20' : 'pa-30'
            "
          >
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import "../assets/styles/pages/cabinet.scss";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppCabinet",
  components: { AppHeader, AppFooter },
  data() {
    return {
      hasImage: false,
      image: null,
      sidebarMenu: [
        {
          title: "Asosiy malumotlar",
          path: "/cabinet",
        },
        {
          title: "Hisobni to`ldirish",
          path: "/top-up-balance",
        },
        {
          title: "To`lovlar tarixi",
          path: "/payment-history",
        },
        {
          title: "Mening kurslarim",
          path: "/my-courses",
        },
        /*        {
                  title: 'Test natijalari',
                  path: '/tests-results'
                },*/
        {
          title: "Test natijalari",
          path: "/tests-results-2",
        },
      ],
      userBalance: {
        balance: 0,
      },
      userRating: {
        examBall: 0,
        examCount: 0,
        position: 0,
      },
    };
  },
  computed: {
    ...mapGetters([]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },

    changePhoto() {
      this.updateProfile();
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

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  transform: translateY(-20px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
</style>
