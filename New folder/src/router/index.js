import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      {
        path: "/choose-test",
        name: "chooseTest",
        component: () => import("../views/site/choose-test"),
      },
      {
        path: "/choose-IQ-test",
        name: "choose-IQ-test",
        component: () => import("../views/site/choose-subject"),
      },
      {
        path: "/choose-subject-school",
        name: "choose-subject-school",
        component: () => import("../views/site/choose-subject/school"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/test"),
      },
      {
        path: "/IELTS",
        name: "IELTS",
        component: () => import("../views/site/video-course"),
      },
    ],
  },
  {
    path: "/sign-in",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        component: () => import("../components/layouts/auth/login"),
      },
    ],
  },
  {
    path: "/sign-up",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-up",
        name: "register",
        component: () => import("../components/layouts/auth/register"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
