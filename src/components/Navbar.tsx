"use client";
import { Box, Flex, HStack,  Button } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Me', path: '/about' },
];

export default function Navbar() {

  const pathname = usePathname();

  return (
    <Box as="nav" w="100%" px={4} py={2} boxShadow="md" bg={'bg.panel'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spaceX={8} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="xl" color="teal.300">My Portfolio</Box>
          <HStack as="nav" spaceX={8} display={{ base: 'none', md: 'flex' }}>
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
      </Flex>
    </Box>
  );
}
