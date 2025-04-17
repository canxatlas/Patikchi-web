import React from 'react';
import {
  Box,
  Container,
  HStack,
  Text,
  Link,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    color="#A67F56"
    _hover={{ color: '#C4A67C' }}
    fontWeight="medium"
    fontSize="sm"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <Box bg="rgba(248, 243, 233, 0.5)" py={8}>
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={6}>
            {/* Logo and Tagline */}
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="#A67F56" mb={2}>
                Patikchi
              </Text>
              <Text fontSize="sm" color="#A67F56" fontWeight="medium">
                Natural comfort for little feet
              </Text>
            </Box>

            {/* Navigation */}
            <HStack spacing={8}>
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#benefits">Benefits</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </HStack>

            <Divider borderColor="rgba(166, 127, 86, 0.2)" />

            {/* Copyright */}
            <VStack spacing={2}>
              <Text fontSize="sm" color="#A67F56" fontWeight="medium">
                © 2024 Patikchi. All rights reserved. Manufacturer and wholesale
                exporter of lambskin baby booties since 1995.
              </Text>
              <Text fontSize="xs" color="#A67F56" fontWeight="medium">
                Made with ♡ for happy little feet
              </Text>
            </VStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
