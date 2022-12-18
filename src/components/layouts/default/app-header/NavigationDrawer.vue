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
        <li class="active"><router-link to="/">O‘zbek</router-link></li>
        <li><router-link to="/">Русский</router-link></li>
      </ul>
    </div>
    <div class="header__auth mb-20 border__bottom">
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
    <ul class="mobile-menu-wrap" v-on-click-outside:excludedClass="hideMenus">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="mobile-menu__item"
        @click="handleShowDropdown(item)"
      >
        <span class="mobile-menu__link">
          {{ item.title }}
        </span>
        <transition name="slide">
          <ul class="mobile-submenu" v-if="item.id === activeId">
            <li
              v-for="(submenu, index) in item.children"
              :key="index"
              class="mobile-submenu__item"
            >
              <router-link :to="submenu.link" class="mobile-submenu__link">
                {{ submenu.title }}
              </router-link>
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
              id: 0,
              title: "IQ testlar",
              link: "#",
            },
            {
              id: 1,
              title: "Blok testlar",
              link: "#",
            },
            {
              id: 2,
              title: "Maktab o'quvchilari uchun",
              link: "#",
            },

            {
              id: 3,
              title: "Olimpiada testlari",
              link: "#",
            },
          ],
        },

        {
          id: 3,
          title: "Video kusrlar",
          link: "/video-course",
          submenu: false,
          children: [
            {
              id: 0,
              title: "IQ testlar",
              link: "#",
            },
            {
              id: 1,
              title: "Blok testlar",
              link: "#",
            },
            {
              id: 2,
              title: "Maktab o'quvchilari uchun",
              link: "#",
            },

            {
              id: 3,
              title: "Olimpiada testlari",
              link: "#",
            },
          ],
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
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    handleShowDropdown(item) {
      if (item.children.length) {
        this.activeId = item.id;
      } else {
        return {
          click: () => this.$router.push(item.link),
        };
      }
    },

    hideMenus() {
      this.activeId = false;
    },
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    prepareSkillCourseTree(data, menu) {
      data.forEach((d) => {
        let parentMenuModel = {
          id: d.id,
          title: d.name,
          link: "",
          children: [],
        };
        let childrenMenus = [];
        if (d.courseList) {
          d.courseList.forEach((children) => {
            let childrenMenuModel = {
              id: children.id,
              title: children.name,
              link: "",
            };
            childrenMenus.push(childrenMenuModel);
          });
          parentMenuModel.children = childrenMenus;
        }
        menu.push(parentMenuModel);
      });
    },
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
    display: inline-flex;
    align-items: center;
    padding: 0 12px 0 12px;
    height: 40px;
    border-radius: 10px;
    &.active {
      background-color: #f6f6f8;
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
    background-color: rgba(163, 0, 65, 0.05);
    margin-bottom: 10px;
    border-radius: 10px;

    .mobile-submenu__item {
      background-color: #fafafa;
      padding-left: 15px;
      border-bottom: 1px solid $border-color;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__link {
    font-size: 16px;
    font-family: "Gilroy", sans-serif;
    font-weight: 700;
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
    font-size: 14px;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}
@media (max-width: 500px) {
  .navigation-drawer {
    max-width: 85%;
  }
}
</style>
