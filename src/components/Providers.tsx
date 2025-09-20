"use client";

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import * as React from "react";

const customConfig = defineConfig({
  globalCss: {
    "body": {
      backgroundColor: "blackAlpha.900",
      color: "whiteAlpha.200" 
    },
    "*::placeholder": {
      opacity: 1,
      color: "fg.subtle",
    },
    "*::selection": {
      bg: "green.200",
    },
  },
})

const darkSystem = createSystem(defaultConfig, customConfig);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={darkSystem}>{children}</ChakraProvider>;
}
