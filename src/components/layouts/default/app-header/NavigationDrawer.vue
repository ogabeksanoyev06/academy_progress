<template>
  <div class="navigation-drawer"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  components: {},
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Yo'nalishlar",
          link: "/",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Web development",
              link: "#",
              children: [
                {
                  id: 7,
                  title: "Vue JS 3",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 8,
                  title: "React",
                  link: "#",
                  classMenu: false,
                },
              ],
            },
            {
              id: 21,
              title: "Economy",
              link: "#",
              children: [
                {
                  id: 9,
                  title: "International Financial Reporting Standards",
                  link: "#",
                },
              ],
            },
            {
              id: 22,
              title: "Natural sciences",
              link: "#",
              children: [
                {
                  id: 10,
                  title: "General, inorganic chemistry",
                  link: "#",
                },
              ],
            },
            {
              id: 23,
              title: "Computer graphics and design",
              link: "#",
              children: [
                {
                  id: 11,
                  title: "3d Max",
                  link: "#",
                },
              ],
            },
            {
              id: 24,
              title: "Exact Sciences",
              link: "#",
              children: [
                {
                  id: 12,
                  title: "Math",
                  link: "#",
                },
                {
                  id: 13,
                  title: "Physics",
                  link: "#",
                },
              ],
            },
            {
              id: 25,
              title: "Foreign languages",
              link: "#",
              children: [
                {
                  id: 14,
                  title: "General English",
                  link: "#",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Fanlar",
          link: "/subjects",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Web development",
              link: "#",
              children: [
                {
                  id: 7,
                  title: "Vue JS 3",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 8,
                  title: "React",
                  link: "#",
                  classMenu: false,
                },
              ],
            },
          ],
        },
        /*          {
                    id: 3,
                    title: "Miramanda o'qitish",
                    link: "111",
                    submenu: false,
                    children: []
                  },*/
        {
          id: 3,
          title: "Konkurs natijalari",
          link: "/top-50",
          submenu: false,
          children: [],
        },
        {
          id: 4,
          title: "Testlar",
          link: "/choose-test",
          submenu: false,
          children: [],
        },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions([""]),
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    handleShowDropdown(item) {
      console.log("sds");
      if (item.children.length) {
        return {
          click: () => (this.activeId = item.id),
        };
      } else {
        return {
          click: () => this.$router.push(item.link),
        };
      }
    },
    handleShowDropdownInner(id) {
      return {
        click: () => (this.subActiveId = this.subActiveId === id ? null : id),
      };
    },
    hideMenus() {
      this.activeId = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
  z-index: 50;
  overflow-y: auto;
  padding: 30px;

  &__close {
    background-color: #00d06c;
  }

  .header__search {
    margin-right: 0;

    .input__holder {
      max-width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    max-width: 75% !important;
  }
}
</style>
