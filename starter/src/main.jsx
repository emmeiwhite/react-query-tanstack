import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const htmlElement = document.getElementById("root");
const root = ReactDOM.createRoot(htmlElement);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
