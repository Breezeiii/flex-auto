import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Router from "./router";

import FlexibleBox from "@lib";
// import "/dist/style.css";

createApp(App).use(FlexibleBox).use(Router).mount("#app");
