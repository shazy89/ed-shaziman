import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

export default function AboutPage() {
  return (
  <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} maxW="3xl" mx="auto" mt={10} p={6}>
  <Stack gap={6} alignItems="center">
  {/* You can add an avatar image at /public/avatar.png if desired */}
        <Heading as="h1" size="xl" color="teal.300">
          About Me
        </Heading>
        <Text fontSize="lg" color="gray.300" textAlign="center">
          I&apos;m Erdoan Shaziman, a full-stack developer with a passion for building modern, scalable, and delightful web experiences. I love open source, learning new technologies, and collaborating with creative people.
        </Text>
        <Text color="gray.400">
          Connect with me on{' '}
          <a href="https://github.com/erdoanshaziman" style={{ color: '#4FD1C5' }} target="_blank" rel="noopener noreferrer">GitHub</a>
          ,{' '}
          <a href="https://linkedin.com/in/erdoanshaziman" style={{ color: '#4FD1C5' }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          .
        </Text>
      </Stack>
  </MotionBox>
  );
}
