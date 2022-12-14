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
        path: "/choose-internation-test",
        name: "choose-internation-test",
        component: () => import("../views/site/choose-internation-test"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/test"),
      },
      {
        path: "/video-course",
        name: "video-course",
        component: () => import("../views/site/video-course"),
      },
      {
        path: "/library",
        name: "library",
        component: () => import("../views/site/library"),
      },
    ],
  },
  {
    path: "/cabinet",
    component: () => import("../layouts/Cabinet"),
    children: [
      {
        path: "/cabinet",
        name: "cabinet",
        component: () =>
          import("../views/cabinet/my-account/general-information"),
      },
      {
        path: "/my-courses",
        name: "my-courses",
        component: () => import("../views/cabinet/my-account/my-courses"),
      },
      {
        path: "/tests-results",
        name: "tests-results",
        component: () => import("../views/cabinet/my-account/tests-results"),
      },
      {
        path: "/tests-results-2",
        name: "tests-results-2",
        component: () => import("../views/cabinet/my-account/tests-results-2"),
      },
      {
        path: "/payment-history",
        name: "payment-history",
        component: () => import("../views/cabinet/my-account/payment-history"),
      },
      {
        path: "/top-up-balance",
        name: "top-up-balance",
        component: () => import("../views/cabinet/my-account/top-up-balance"),
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
