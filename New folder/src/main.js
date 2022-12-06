import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import VueMask from "v-mask";
import Moment from "vue-moment";
import * as veeValidate from "./plugins/vee-validate/vee-validate";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);

Vue.use(VueMask);
Vue.use(Moment);

new Vue({
  router,
  store,
  veeValidate,
  render: (h) => h(App),
}).$mount("#app");
