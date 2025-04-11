import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./theme/theme.scss";
import AppRoutes from "@routes/AppRoutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
