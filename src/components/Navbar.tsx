import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Container,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavLink = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 76; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      onClick?.();
    }
  };

  return (
    <Link
      href={href}
      fontSize="md"
      fontWeight="medium"
      color="#A67F56"
      _hover={{
        opacity: 0.8,
        transform: 'translateY(-2px)',
        transition: 'all 0.3s ease',
        _after: {
          width: '100%',
        },
      }}
      onClick={handleClick}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '0',
        width: '0%',
        height: '2px',
        backgroundColor: '#A67F56',
        transition: 'width 0.3s ease',
      }}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#products' },
    { name: 'Features', href: '#benefits' },
    { name: 'About Us', href: '#about' },
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (isOpen) onClose();
  };

  return (
    <Box
      position="fixed"
      w="100%"
      bg="rgba(248, 243, 233, 0.95)"
      backdropFilter="blur(10px)"
      zIndex={100}
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
      transition="all 0.3s ease"
    >
      <Container maxW="container.xl">
        <Flex h="76px" alignItems="center" justifyContent="space-between">
          <Link
            href="#home"
            _hover={{ opacity: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Box fontSize="2xl" fontWeight="bold" color="#A67F56">
              <span translate="no">Patikchi</span>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </HStack>

          <Button
            bg="#D4B68C"
            color="white"
            borderRadius="full"
            px={6}
            _hover={{
              bg: '#C4A67C',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(212, 182, 140, 0.3)',
            }}
            transition="all 0.3s ease"
            display={{ base: 'none', md: 'flex' }}
            onClick={handleContactClick}
          >
            Contact Us
          </Button>

          {/* Mobile Navigation Icon */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color="#A67F56"
            _hover={{
              bg: 'rgba(166, 127, 86, 0.1)',
            }}
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(248, 243, 233, 0.98)">
          <DrawerCloseButton color="#A67F56" />
          <DrawerHeader color="#A67F56">Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href} onClick={onClose}>
                  {link.name}
                </NavLink>
              ))}
              <Button
                bg="#D4B68C"
                color="white"
                borderRadius="full"
                px={6}
                _hover={{
                  bg: '#C4A67C',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(212, 182, 140, 0.3)',
                }}
                transition="all 0.3s ease"
                w="full"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
