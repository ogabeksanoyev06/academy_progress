<template>
  <div class="navigation-drawer">
    <div class="mobile-menu__search mb-15 border__bottom">
      <base-input
        v-model="search"
        :placeholder="'Saytdan qidirish...'"
        label="Qidiruv"
        type="text"
        vid="name"
      >
        <template #prepend>
          <img src="/icons/search.svg" alt="" />
        </template>
      </base-input>
    </div>

    <div class="mobile-menu__language mb-15 border__bottom">
      <div class="icon-lang mr-15"><img src="/icons/globe.svg" alt="" /></div>
      <ul>
        <li class="active" @click="changeLanguage('uz')">
          <a>O‘zbek</a>
        </li>
        <li @click="changeLanguage('ru')"><a>Русский</a></li>
      </ul>
    </div>
    <div class="header__auth mb-20 border__bottom">
      <AppButton
        theme="secondary"
        :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
        sides="20"
        height="40"
        class="header__login mr-5"
        v-if="isDesktopMedium"
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
        v-if="isDesktopMedium"
        @click="$router.push({ path: '/sign-up' })"
      >
        Ro'yxatdan o'tish
      </AppButton>
    </div>
    <ul class="mobile-menu-wrap" v-on-click-outside:excludedClass="hideMenus">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="mobile-menu__item"
        @click="handleShowDropdown(item)"
      >
        <span class="mobile-menu__link">
          {{ $t(item.title) }}
        </span>
        <transition name="slide">
          <ul class="mobile-submenu" v-if="activeId === item.id">
            <li
              v-for="(submenu, index) in item.children"
              :key="index"
              class="mobile-submenu__item"
              @click="handleShowDropdownInner(submenu.id)"
            >
              <span class="mobile-submenu__link">
                {{ submenu.title }}
              </span>
              <transition name="slide">
                <ul
                  class="mobile-submenu__inner"
                  v-if="submenu.id === subActiveId"
                >
                  <li
                    class="mobile-submenu__item"
                    v-for="(children, idx) in submenu.children"
                    :key="idx"
                  >
                    <router-link
                      :to="children.link"
                      class="mobile-submenu__link"
                    >
                      {{ children.title }}
                    </router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton";
import BaseInput from "@/components/shared-components/BaseInput";
import i18n from "@/locales/i18n";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  components: { AppButton, BaseInput },
  data() {
    return {
      search: "",
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Bosh sahifa",
          link: "/",
          submenu: false,
          children: [],
        },
        {
          id: 2,
          title: "Testlar",
          link: "/choose-test",
          submenu: false,
          children: [
            {
              id: 20,
              title: "IQ test",
              link: "#",
              children: [],
            },
            {
              id: 21,
              title: "Abituriyentlar uchun test",
              link: "#",
              children: [],
            },
            {
              id: 22,
              title: "Maktab o'quvchilari uchun test",
              link: "#",
              children: [],
            },
            {
              id: 23,
              title: "Olimpiada test",
              link: "#",
              children: [
                // {
                //   id: 12,
                //   title: "Math",
                //   link: "#",
                // },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Video kurslar",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Web development",
              link: "#",
              children: [
                {
                  id: 7,
                  title: "JavaScript",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 8,
                  title: "Pyhton",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 9,
                  title: "Java",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 9,
                  title: "C#",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 10,
                  title: "Vue Js",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 11,
                  title: "React Js",
                  link: "#",
                  classMenu: false,
                },
              ],
            },
            {
              id: 21,
              title: "Xorijiy tillar",
              link: "#",
              children: [
                {
                  id: 9,
                  title: "Ingliz tili",
                  link: "#",
                },
                {
                  id: 9,
                  title: "Rus tili",
                  link: "#",
                },
                {
                  id: 9,
                  title: "Nemis tili",
                  link: "#",
                },
                {
                  id: 9,
                  title: "Koreys tili",
                  link: "#",
                },
              ],
            },
            {
              id: 22,
              title: "Dizayn",
              link: "#",
              children: [
                {
                  id: 10,
                  title: "Grafik dizayn",
                  link: "#",
                },
                {
                  id: 10,
                  title: "Web dizayn",
                  link: "#",
                },
                {
                  id: 10,
                  title: "3d Max",
                  link: "#",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Xalqaro tadqiqotlar",
          link: "/",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Pisa test",
              link: "#",
              children: [],
            },
            {
              id: 21,
              title: "Tmess test",
              link: "#",
              children: [],
            },
            {
              id: 22,
              title: "Pirls test",
              link: "#",
              children: [],
            },
          ],
        },
        {
          id: 5,
          title: "Kutubxona",
          link: "/",
          submenu: false,
          children: [],
        },
      ],
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    handleShowDropdown(item) {
      console.log("sds");
      if (item.children.length) {
        this.activeId = item.id;
      } else {
        this.$router.push(item.link);
      }
    },
    handleShowDropdownInner(id) {
      this.subActiveId = this.subActiveId === id ? null : id;
    },
    hideMenus() {
      this.activeId = false;
    },

    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
    },
  },
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "uz");
    }
    i18n.locale = localStorage.getItem("lang");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/abstracts/variables";
.navigation-drawer::-webkit-scrollbar {
  width: 0px;
  height: 8px;
}
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
.mobile-menu__language {
  display: flex;
  align-items: center;
  ul li {
    list-style: none;
    display: inline-block;
    padding: 0 12px 0 12px;
    &.active {
      a {
        color: #a30041;
      }
    }
    a {
      display: block;
      font-family: inherit;
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;
    }
  }
}
.mobile-menu {
  &__item {
    background-color: #f6f6f8;
    border-radius: 10px;
    color: #37363c;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 10px;
    &:hover {
    }
    .mobile-submenu__item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
  &__link {
    font-size: 1.4rem/1.2857;
    font-family: "Gilroy", sans-serif;
    font-weight: 600;
    display: flex;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

.mobile-submenu {
  &__item {
  }
  &__link {
    font-size: 1.6rem/1.1875;
    font-weight: 500;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}
.border__bottom {
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(127, 127, 155, 0.15);
}
@media (max-width: 500px) {
  .navigation-drawer {
    max-width: 85%;
  }
}
</style>
