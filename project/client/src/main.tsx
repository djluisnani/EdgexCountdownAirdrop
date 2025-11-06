import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "@fontsource/inter/index.css"; // <-- new font

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
