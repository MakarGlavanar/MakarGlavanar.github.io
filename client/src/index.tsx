import * as React from "react";
import * as ReactDOM from "react-dom";
import "@scss/index.scss";
import { App } from "./App";
import { Registry } from "@registry/Registry";

Registry.getVideoBackgroundProvider().fetchBackgroundVideoFrames();

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
