import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/normalize";

import "./index.css";

// components
import { GlobalContextProvider } from "./lib/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
