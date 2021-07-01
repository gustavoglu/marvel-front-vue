import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import apiClient from "./api/client";

import VueLocalForage from "vue-localforage";
Vue.use(VueLocalForage);

import Notifications from "vue-notification";
Vue.use(Notifications);

Vue.prototype.$http = apiClient;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
