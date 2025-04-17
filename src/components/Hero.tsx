import React from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  HStack,
  Image,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const defaultTransition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth animation
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  const handleExploreClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      bg="rgba(248, 243, 233, 0.3)"
      minH={{ base: '100vh', md: '90vh' }}
      position="relative"
      overflow="hidden"
      pt={{ base: '76px', md: '76px' }}
      display="flex"
      alignItems="center"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgGradient="radial(circle at 30% 20%, #D4B68C 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: '8', md: '12' }}
          py={{ base: '12', md: '20' }}
        >
          {/* Left Content */}
          <MotionBox
            flex="1"
            initial="hidden"
            animate="visible"
            variants={fadeInLeftVariant}
            transition={defaultTransition}
          >
            <VStack
              align={{ base: 'center', md: 'flex-start' }}
              spacing={{ base: '6', md: '8' }}
              maxW="600px"
            >
              <MotionBox
                variants={fadeInUpVariant}
                transition={{ ...defaultTransition, delay: 0.2 }}
                w="full"
              >
                <Text
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="black"
                  color="#A67F56"
                  lineHeight="1.2"
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Natural Comfort for Baby's First Steps
                </Text>
              </MotionBox>

              <MotionBox
                variants={fadeInUpVariant}
                transition={{ ...defaultTransition, delay: 0.4 }}
                w="full"
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                  color="#A67F56"
                  fontWeight="medium"
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Premium lambskin baby booties with natural wool inside and
                  suede outside. Crafted with care since 1995 in Antalya,
                  Turkey.
                </Text>
              </MotionBox>

              <MotionBox
                variants={fadeInUpVariant}
                transition={{ ...defaultTransition, delay: 0.6 }}
                w="full"
              >
                <HStack
                  spacing={{ base: '3', md: '4' }}
                  justify={{ base: 'center', md: 'flex-start' }}
                  direction={{ base: 'column', sm: 'row' }}
                  w="full"
                >
                  <Button
                    bg="#D4B68C"
                    color="white"
                    borderRadius="full"
                    size="lg"
                    px="8"
                    py="7"
                    fontSize="md"
                    fontWeight="medium"
                    _hover={{
                      bg: '#C4A67C',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(212, 182, 140, 0.3)',
                    }}
                    transition="all 0.3s ease"
                    onClick={handleExploreClick}
                    w={{ base: 'full', sm: 'auto' }}
                  >
                    Explore Collection
                  </Button>
                  <Button
                    variant="outline"
                    borderColor="#D4B68C"
                    borderWidth="2px"
                    color="#A67F56"
                    borderRadius="full"
                    size="lg"
                    px="8"
                    py="7"
                    fontSize="md"
                    fontWeight="medium"
                    _hover={{
                      bg: 'rgba(212, 182, 140, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(212, 182, 140, 0.15)',
                    }}
                    transition="all 0.3s ease"
                    onClick={handleContactClick}
                    w={{ base: 'full', sm: 'auto' }}
                  >
                    Contact Us
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
          </MotionBox>

          {/* Right Image */}
          <MotionBox
            flex="1"
            initial="hidden"
            animate="visible"
            variants={fadeInRightVariant}
            transition={{ ...defaultTransition, delay: 0.3 }}
            maxW={{ base: '100%', md: '600px' }}
            w="full"
            px={{ base: 4, md: 0 }}
          >
            <MotionBox
              variants={scaleInVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              position="relative"
              w="full"
            >
              {/* Image glow effect */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="80%"
                height="80%"
                bgGradient="radial(circle at center, #D4B68C 0%, transparent 70%)"
                filter="blur(40px)"
                opacity="0.3"
                zIndex={0}
              />
              <Image
                src={require('../assets/image1.png')}
                alt="Baby booties"
                w="full"
                h="auto"
                objectFit="contain"
                position="relative"
                zIndex={1}
                maxH={{ base: '400px', md: 'none' }}
                filter="drop-shadow(0px 10px 20px rgba(166, 127, 86, 0.2))"
              />
            </MotionBox>
          </MotionBox>
        </Flex>

        {/* Scroll Indicator */}
        <MotionBox
          position="absolute"
          bottom="2rem"
          left="50%"
          transform="translateX(-50%)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          display={{ base: 'none', md: 'block' }}
        >
          <MotionBox
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Box
              w="6px"
              h="6px"
              borderLeft="2px"
              borderBottom="2px"
              borderColor="#A67F56"
              transform="rotate(-45deg)"
              opacity={0.7}
            />
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
