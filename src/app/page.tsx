import { Box, Heading, Text, Stack, SimpleGrid, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Chakra UI',
  'Framer Motion',
  'Emotion',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'Jest',
  'Cypress',
];

const interestingData = [
  { label: 'Years Coding', value: '7+' },
  { label: 'Open Source PRs', value: '120+' },
  { label: 'Cups of Coffee', value: '∞' },
];

export default function HomePage() {
  return (
  <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} maxW="3xl" mx="auto" mt={10} p={6}>
      <Heading as="h1" size="2xl" mb={4} color="teal.300">
        Hi, I&apos;m Erdoan Shaziman
      </Heading>
      <Text fontSize="xl" mb={8} color="gray.300">
        A passionate full-stack developer focused on building performant, beautiful, and accessible web applications.
      </Text>
  <SimpleGrid columns={{ base: 1, md: 3 }} columnGap={6} rowGap={4} mb={8}>
        {interestingData.map((item) => (
          <Box key={item.label} bg="gray.800" p={5} borderRadius="lg" boxShadow="md" textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" color="teal.200">{item.value}</Text>
            <Text color="gray.400">{item.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Heading as="h2" size="lg" mb={4} color="teal.200">
        My Skills
      </Heading>
  <Stack direction="row" flexWrap="wrap" gap={3}>
        {skills.map((skill) => (
          <Badge key={skill} colorScheme="teal" fontSize="lg" marginBottom={2} px={3} py={1} borderRadius="md">
            {skill}
          </Badge>
        ))}
      </Stack>
  </MotionBox>
  );
}
