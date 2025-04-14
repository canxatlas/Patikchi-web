import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const features = [
  {
    id: 1,
    title: 'Feature 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Feature 2',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Feature 3',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 4,
    title: 'Feature 4',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
];

export default function Features() {
  return (
    <Box p={4}>
      <Stack gap={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize="3xl" fontWeight="bold">
          Our Features
        </Heading>
        <Text color="gray.600" fontSize="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Stack>

      <Container maxW="6xl" mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align="top">
              <Box color="green.400" px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align="start">
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color="gray.600">{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
