/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Badge,
  CodeBlock,
  Flex,
  createShikiAdapter,
} from "@chakra-ui/react";
import type { HighlighterGeneric } from "shiki";

const file = {
  code: `
function App() {
 return <h1> Hello World </h1>;
}
`,
  language: "tsx",
  title: "index.tsx",
};

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx"],
      themes: ["github-dark"],
    });
  },
  theme: "github-dark",
});

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Chakra UI",
  "Framer Motion",
  "Emotion",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "Jest",
  "Cypress",
];

const interestingData = [
  { label: "Years Coding", value: "7+" },
  { label: "Open Source PRs", value: "120+" },
  { label: "Cups of Coffee", value: "∞" },
];

export default function HomePage() {
  return (
    <Box padding={12}>
      <Box minHeight={725}>
        <Flex direction="row" justify="space-between" mb={8}>
          <Flex direction="column" align="flex-start" >
            <Heading as="h1" size="7xl" color="white">
              Hi, I&apos;m{" "}
              <Heading size="7xl" as="span" color="blue.400">
                Erdoan Shaziman{" "}
              </Heading>
              Full-Stack Engineer
            </Heading>
            <Text fontSize="xl" mb={8} color="gray.300">
             I design and build modern web apps with React, FastAPI, and AWS.
            </Text>
          </Flex>

          <Flex  justify="center">
            <CodeBlock.AdapterProvider value={shikiAdapter}>
              <CodeBlock.Root
                code={file.code}
                language={file.language}
                size="lg"
              >
                <CodeBlock.Header>
                  <CodeBlock.Title>{file.title}</CodeBlock.Title>
                </CodeBlock.Header>
                <CodeBlock.Content>
                  <CodeBlock.Code>
                    <CodeBlock.CodeText />
                  </CodeBlock.Code>
                </CodeBlock.Content>
              </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
