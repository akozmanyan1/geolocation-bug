import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC4QfFiCvmXdL0Rz-fWKt4QyaX0tX7Tsl4",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
