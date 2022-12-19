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
import i18n from "./locales/i18n";
import VueMask from "v-mask";
import Moment from "vue-moment";
import * as veeValidate from "./plugins/vee-validate/vee-validate";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);
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
