import Vue from 'vue'
import App from './main/App.vue';
import { AxiosHttpClient } from "./infra";
import {
  createVideoBrowserServiceByVideoServiceId,
  createVimeoHttpClient,
  createYoutubeHttpClient,
} from "./main/factories";

const videoBrowserServiceByVideoServiceId = createVideoBrowserServiceByVideoServiceId(
  createYoutubeHttpClient(AxiosHttpClient),
  createVimeoHttpClient(AxiosHttpClient)
);

new Vue({
  render: (createElement) =>
    createElement(App, {
      props: { videoBrowserServiceByVideoServiceId },
    }),
}).$mount("#app");