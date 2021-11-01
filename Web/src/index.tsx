import * as React from "react";
import * as ReactDOM from "react-dom";

// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "./styles.css";

import App from "./App";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
