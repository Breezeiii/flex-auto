import Layout from "./Layout";
import Container from "./Container";

import "./style/display.scss";

const components = [...Layout, ...Container];

export default function (app) {
  components.forEach((item) => {
    app.component(item.name, item);
  });
}
