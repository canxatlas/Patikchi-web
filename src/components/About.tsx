import React from 'react';
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { CalendarIcon, StarIcon, CheckIcon } from '@chakra-ui/icons';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Box
    bg="white"
    p={6}
    borderRadius="8px"
    boxShadow="0 1px 2px rgba(0, 0, 0, 0.05)"
    height="160px"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box mb={4}>
      <Icon as={icon} boxSize={10} color="#D4B68C" />
    </Box>
    <Text
      fontSize="md"
      fontWeight="bold"
      color="#A67F56"
      mb={3}
      textAlign="center"
    >
      {title}
    </Text>
    <Text
      fontSize="sm"
      color="#A67F56"
      opacity={0.7}
      textAlign="center"
      lineHeight="1.6"
      maxW="240px"
    >
      {description}
    </Text>
  </Box>
);

export default function About() {
  return (
    <Box id="about" py={20} bg="rgba(248, 243, 233, 0.2)">
      <Container maxW="896px">
        <VStack spacing={12}>
          {/* About Us Header */}
          <VStack spacing={4} textAlign="center">
            <VStack spacing={1}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="black"
                color="#A67F56"
                fontFamily="Playfair Display"
                position="relative"
                mb={2}
              >
                About Us
              </Heading>
              <Box width="80px" height="3px" bg="#D4B68C" borderRadius="full" />
            </VStack>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="#A67F56"
              fontWeight="medium"
              lineHeight="1.8"
              maxW="860px"
              px={4}
            >
              Since 1995, Patikchi has been a premier manufacturer and wholesale
              exporter of lambskin baby booties. Our commitment to quality and
              natural materials has made us a trusted choice for parents
              worldwide.
            </Text>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            <Feature
              icon={CalendarIcon}
              title="Since 1995"
              description="Over 25 years of experience crafting premium baby footwear"
            />
            <Feature
              icon={StarIcon}
              title="Premium Quality"
              description="Handcrafted using natural materials for superior comfort"
            />
            <Feature
              icon={CheckIcon}
              title="Baby Safe"
              description="Natural & Lab Tested materials that are gentle on your baby's skin"
            />
          </SimpleGrid>

          {/* Materials Section */}
          <Box
            bg="white"
            p={6}
            borderRadius="8px"
            borderWidth="1px"
            borderColor="rgba(212, 182, 140, 0.2)"
            boxShadow="0 1px 2px rgba(0, 0, 0, 0.05)"
            w="full"
          >
            <VStack spacing={4} align="start">
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                color="#A67F56"
                fontFamily="Playfair Display"
              >
                Our Materials
              </Text>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="#A67F56"
                opacity={0.8}
                lineHeight="1.8"
              >
                Our shoes are made of natural leather material called
                'Doubleface', with lamb's wool inside and suede outside. This
                combination provides the perfect balance of comfort, warmth, and
                durability.
              </Text>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="#A67F56"
                opacity={0.8}
                lineHeight="1.8"
              >
                Each pair is carefully crafted to provide the best support for
                your baby's developing feet, with sizes available for different
                age ranges: 0-9 months (size 17/18), 9-18 months (size 19/20),
                and 18-24 months (size 21/22).
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
