import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/normalize";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
