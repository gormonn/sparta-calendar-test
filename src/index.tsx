import * as React from "react";
import { render } from "react-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import Calendar from "./calendar";

import "./styles.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={ruRU}>
        <Calendar />
      </ConfigProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
