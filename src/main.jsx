import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
