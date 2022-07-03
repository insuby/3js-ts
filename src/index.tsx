import { App } from "app";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Suspense fallback={<span>loading...</span>}>
      <App />
    </Suspense>
  </StrictMode>
);
