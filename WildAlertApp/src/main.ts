import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router";

import * as Vue from 'vue' // in Vue 3
import axios from "axios";
import VueAxios from 'vue-axios'

import "./assets/main.css";
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import * as pl from 'dayjs/locale/pl';

const app = createApp(App);

dayjs.extend(relativeTime);
dayjs.locale(pl);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(Quasar, {
  plugins: {},
})

app.mount("#app");
