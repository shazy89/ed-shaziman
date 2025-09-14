import { Box, Flex, HStack, IconButton, useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Me', path: '/about' },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();

  return (
    <Box as="nav" w="100%" px={4} py={2} boxShadow="md" bg={useColorModeValue('gray.900', 'gray.800')}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="xl" color="teal.300">My Portfolio</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} passHref legacyBehavior>
                <Button
                  as="a"
                  variant={pathname === link.path ? 'solid' : 'ghost'}
                  colorScheme="teal"
                  size="sm"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </HStack>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          colorScheme="teal"
        />
      </Flex>
    </Box>
  );
}
