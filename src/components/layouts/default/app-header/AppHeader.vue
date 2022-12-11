<template>
  <div>
    <header
      class="header"
      :class="{
        greyBg: $route.path === '/',
        header__shadow: $route.path !== '/',
      }"
    >
      <marquee behavior="" direction="left" style="color: #95abc6">
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
                            'has-dropdown': submenu && submenu.children.length,
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
              class="header__language"
              :class="isMobileMedium ? '' : 'mr-20'"
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
              class="header__account"
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
                  <ul class="header__dropdown-wrap shadowed radius overflow">
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
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";
import "./header.scss";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton },
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
          link: "/a",
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
  background-color: #ffffff96;
  z-index: 49;
}
</style>
