"use client";
import { Box, Heading, Text, Stack, Badge } from '@chakra-ui/react';



const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A beautiful, animated portfolio built with Next.js, Chakra UI, and Framer Motion.',
    link: 'https://github.com/erdoanshaziman/personal-next',
  },
  {
    name: 'Open Source CLI',
    description: 'A CLI tool for automating open source contributions.',
    link: 'https://github.com/erdoanshaziman/oss-cli',
  },
  {
    name: 'Realtime Chat App',
    description: 'A full-stack chat app with websockets and authentication.',
    link: 'https://github.com/erdoanshaziman/realtime-chat',
  },
];

export default function ProjectsPage() {
  return (
  <Box maxW="3xl" mx="auto" mt={10} p={6}>
      <Heading as="h1" size="xl" mb={8} color="teal.300">
        Projects
      </Heading>
  <Stack gap={6}>
        {projects.map((project) => (
          <Box key={project.name} bg="gray.800" p={5} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="md" color="teal.200" mb={2}>{project.name}</Heading>
            <Text color="gray.300" mb={2}>{project.description}</Text>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Badge colorScheme="teal" fontSize="md" px={3} py={1} borderRadius="md" style={{ cursor: 'pointer' }}>
                View on GitHub
              </Badge>
            </a>
          </Box>
        ))}
      </Stack>
  </Box>
  );
}
