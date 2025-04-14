import React from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface MaterialCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const MaterialCard: React.FC<MaterialCardProps> = ({
  title,
  description,
  imageSrc,
  delay,
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <VStack
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="xl"
      spacing={4}
      h="100%"
      align="start"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="lg"
        w="100%"
        h="200px"
        objectFit="cover"
      />
      <Heading size="md" color="#A67F56">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
    </VStack>
  </MotionBox>
);

export default function Materials() {
  const materials = [
    {
      title: 'Premium Lambskin',
      description:
        "Our booties are crafted from the finest quality lambskin, known for its exceptional softness and natural breathability. This premium material ensures maximum comfort for your baby's delicate feet.",
      imageSrc: '/images/lambskin.jpg',
    },
    {
      title: 'Natural Cotton Lining',
      description:
        'The interior of our booties features 100% organic cotton lining, providing an extra layer of comfort while maintaining breathability and preventing moisture buildup.',
      imageSrc: '/images/cotton.jpg',
    },
    {
      title: 'Non-Slip Soles',
      description:
        "We use specially designed non-slip soles made from eco-friendly materials, ensuring safety for your little one's first steps while being gentle on the environment.",
      imageSrc: '/images/soles.jpg',
    },
  ];

  return (
    <Box py={16} bg="rgba(248, 243, 233, 0.8)">
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          mb={12}
          textAlign="center"
        >
          <Heading color="#A67F56" mb={4}>
            Our Premium Materials
          </Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl" mx="auto">
            We carefully select each material to ensure the highest quality and
            comfort for your baby's developing feet.
          </Text>
        </MotionBox>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {materials.map((material, index) => (
            <MaterialCard
              key={material.title}
              {...material}
              delay={index * 0.2}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
