import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import VueKatex from "vue-katex";
import "katex/dist/katex.min.css";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import TokenService from "./service/TokenService";
import api from "./service/apiService";
import axios from "axios/index";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import i18n from "./locales/i18n";
import VueMask from "v-mask";
import Moment from "vue-moment";
import * as veeValidate from "./plugins/vee-validate/vee-validate";

Vue.config.productionTip = false;
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      router.push({ name: "login" });
    }
    return Promise.reject(error);
  }
);
Vue.component("AppText", AppText);
Vue.use(api);
Vue.use(Notifications, { velocity });
Vue.use(VueKatex, {
  globalOptions: {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: true },
      { left: "\\(", right: "\\)", display: true },
      { left: "\\[", right: "\\]", display: true },
    ],
    trust: true,
  },
});

Vue.use(VueMask);
Vue.use(Moment);

new Vue({
  router,
  store,
  veeValidate,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
