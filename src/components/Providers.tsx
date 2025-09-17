"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

import * as React from "react";

const darkSystem = createSystem(defaultConfig);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={darkSystem}>{children}</ChakraProvider>;
}
