<template>
  <div>
    <headroom>
      <header
        class="header"
        :class="{
          greyBg: $route.path === '/',
          header__shadow: $route.path !== '/',
        }"
      >
        <marquee direction="left" style="color: #95abc6">
          Sayt test rejimida ishlamoqda...Kamchiliklar uchun uzr so'raymiz
        </marquee>
        <div class="container">
          <div class="header__inner">
            <div class="header__left">
              <router-link to="/" class="logo">
                <img src="/svg/logo1.svg" alt="logo" />
              </router-link>

              <ul class="header__menu" v-if="!isDesktopMedium">
                <li
                  class="header__menu-item"
                  v-for="(item, index) in menu"
                  :key="index"
                >
                  <router-link :to="item.link" class="header__menu-link">
                    {{ item.title }}
                  </router-link>

                  <transition name="slide">
                    <div class="dropdown__menu" v-if="item.id === activeId">
                      <ul class="dropdown__menu-inner">
                        <li
                          class="dropdown__menu-item"
                          v-for="(submenu, idx) in item.children"
                          :key="idx"
                        >
                          <router-link
                            to="/"
                            class="dropdown__menu-link"
                            :class="{
                              'has-dropdown':
                                submenu && submenu.children.length,
                            }"
                          >
                            {{ submenu.title }}
                          </router-link>

                          <transition name="slide-right">
                            <div
                              class="dropdown__menu"
                              v-if="submenu.id === subActiveId"
                            >
                              <ul class="dropdown__menu-inner">
                                <li
                                  class="dropdown__menu-item"
                                  v-for="(children, idx) in submenu.children"
                                  :key="idx"
                                >
                                  <router-link
                                    :to="'/detailed-page/' + children.id"
                                    class="dropdown__menu-link"
                                  >
                                    {{ children.title }}
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                          </transition>
                        </li>
                      </ul>
                    </div>
                  </transition>
                </li>
              </ul>
            </div>
            <div class="header__right">
              <div class="header__auth" v-if="!userIsLoggedOn">
                <AppButton
                  theme="main"
                  :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                  :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                  class="header__login mr-10"
                  v-if="!isMobileSmall"
                  @click="$router.push({ path: '/sign-in' })"
                >
                  Kirish
                </AppButton>
                <AppButton
                  theme="secondary"
                  @click="$router.push({ path: '/sign-up' })"
                  :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                  :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                  class="header__register"
                  :class="isMobileMedium ? 'mr-10' : 'mr-20'"
                  v-if="!isMobileSmall"
                  >Ro'yxatdan o'tish
                </AppButton>
              </div>
              <div
                class="header__language mr-20"
                v-if="!isMobileSmall"
                @click="languageDropdown = !languageDropdown"
                v-on-click-outside:excludedClass="hideLanguageDropdown"
              >
                <div class="header__language-icon">
                  <img src="/icons/globe.svg" alt="" />
                </div>
                <transition name="slide">
                  <div class="header__dropdown" v-if="languageDropdown">
                    <ul
                      class="header__dropdown-wrap bordered shadowed radius overflow"
                    >
                      <li class="header__dropdown-item">
                        <router-link to="/" class="header__dropdown-link pa-10">
                          <AppText size="14" line-height="18" weight="700">
                            Uzbek
                          </AppText>
                        </router-link>
                      </li>

                      <li class="header__dropdown-item">
                        <router-link to="/" class="header__dropdown-link pa-10">
                          <AppText size="14" line-height="18" weight="700">
                            Russian
                          </AppText>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>

              <div
                class="header__account mr-10"
                @click="accountDropdown = !accountDropdown"
                v-on-click-outside:excludedClass="hideAccountDropdown"
              >
                <!-- <div class="header__account-photo" v-if="user && user.photo">
                <img :src="baseURL + user.photo" alt="" />
              </div> -->
                <div class="header__account-photo">
                  <img src="/images/user-photo.jpg" alt="" />
                </div>
                <transition name="slide">
                  <div class="header__dropdown" v-if="accountDropdown">
                    <ul
                      class="header__dropdown-wrap bordered shadowed radius overflow"
                    >
                      <li class="header__dropdown-item">
                        <router-link
                          to="/cabinet"
                          class="header__dropdown-link pa-10"
                        >
                          <AppText size="14" line-height="18" weight="700">
                            Mening profilim
                          </AppText>
                        </router-link>
                      </li>
                      <li class="header__dropdown-item" @click.prevent="logout">
                        <router-link to="/" class="header__dropdown-link pa-10">
                          <AppText size="14" line-height="18" weight="700">
                            Chiqish
                          </AppText>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
              <div
                class="hamburger__menu"
                @click="showNavigationDrawer"
                :class="{ active: navigationDrawer }"
                v-if="isDesktopMedium"
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  class="svg-icon"
                  style="width: 24px; height: 24px"
                >
                  <path
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    class="line line1"
                  ></path>
                  <path d="M 20,50 H 80" class="line line2"></path>
                  <path
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    class="line line3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </headroom>
    <transition name="slide-right">
      <NavigationDrawer
        v-if="navigationDrawer"
        @closeNavigationDrawer="closeDrawer"
      />
    </transition>
    <transition name="fade">
      <div
        class="overlay"
        v-if="navigationDrawer"
        @click="navigationDrawer = false"
      ></div>
    </transition>
  </div>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";
import { headroom } from "vue-headroom";
import NavigationDrawer from "./NavigationDrawer";
import "./header.scss";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton, headroom, NavigationDrawer },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Bosh sahifa",
          link: "/",
          submenu: false,
        },
        {
          id: 2,
          title: "Testlar",
          link: "/choose-test",
          submenu: false,
        },
        {
          id: 3,
          title: "Video kurslar",
          link: "/video-course",
          submenu: false,
          children: [],
        },
        {
          id: 4,
          title: "Xalqaro tadqiqotlar",
          link: "/choose-internation-test",
          submenu: false,
          children: [],
        },
        {
          id: 5,
          title: "Kutubxona",
          link: "/library",
          submenu: false,
          children: [],
        },
      ],
      search: "",
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
</style>
