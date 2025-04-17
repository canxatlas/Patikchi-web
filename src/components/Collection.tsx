import React, { useState } from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  SimpleGrid,
  Flex,
  HStack,
  Image,
  Circle,
  IconProps,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TemperatureIcon,
  MoistureIcon,
  SkinIcon,
  OrthopedicIcon,
} from '../assets/icons';

const MotionDiv = motion.div;

const defaultTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

interface SizeProps {
  range: string;
  note?: string;
}

interface ProductProps {
  title: string;
  description: string;
  colors: Array<{ color: string; image: any }>;
  sizes: SizeProps[];
  image: any;
  imagePosition?: 'left' | 'right';
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  onClose,
  productTitle,
}) => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Request Sent!',
      description: "We'll get back to you with pricing and samples soon.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setIsSubmitting(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#A67F56">Request Price & Samples</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form
            action="https://formsubmit.co/cemal989@hotmail.com"
            method="POST"
          >
            <VStack spacing={4}>
              <FormControl>
                <FormLabel color="#A67F56">Product</FormLabel>
                <Input
                  name="product"
                  value={productTitle}
                  isReadOnly
                  bg="gray.50"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="#A67F56">Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Your name"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="#A67F56">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#A67F56">Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Any specific requirements or questions?"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>

              <input type="hidden" name="_next" value={window.location.href} />
              <input
                type="hidden"
                name="_subject"
                value="New Product Inquiry"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your interest in Patikchi products! We have received your inquiry and will get back to you soon with pricing and sample information."
              />

              <Button
                type="submit"
                bg="#D4B68C"
                color="white"
                size="lg"
                width="full"
                _hover={{ bg: '#C4A67C' }}
                isLoading={isSubmitting}
              >
                Submit Request
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const ProductCard: React.FC<ProductProps> = ({
  title,
  description,
  colors,
  sizes,
  image,
  imagePosition = 'right',
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(image);

  const handleColorClick = (color: string, colorImage: string) => {
    setSelectedColor(color);
    setCurrentImage(colorImage);
  };

  return (
    <MotionDiv
      style={{
        display: 'flex',
        flexDirection: imagePosition === 'right' ? 'row' : 'row-reverse',
        gap: '2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem',
        flexWrap: 'wrap',
      }}
      variants={fadeInUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={defaultTransition}
    >
      <Box flex="1" minW={{ base: '100%', md: '0' }}>
        <MotionDiv
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <Text fontSize="3xl" color="#A67F56" fontWeight="bold" mb="4">
            {title}
          </Text>
        </MotionDiv>

        <MotionDiv
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <Text color="#A67F56" fontWeight="medium" mb="6">
            {description}
          </Text>
        </MotionDiv>

        <Box mb="6">
          <Text color="#A67F56" mb="3">
            Available Colors:
          </Text>
          <HStack spacing="2">
            {colors.map((colorObj, index) => (
              <MotionDiv
                key={index}
                style={{ display: 'inline-block' }}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                transition={defaultTransition}
              >
                <Circle
                  size="6"
                  bg={colorObj.color}
                  cursor="pointer"
                  onClick={() =>
                    handleColorClick(colorObj.color, colorObj.image)
                  }
                  border={
                    selectedColor === colorObj.color
                      ? '2px solid #A67F56'
                      : 'none'
                  }
                />
              </MotionDiv>
            ))}
          </HStack>
        </Box>

        <Box mb="8">
          <Text color="#A67F56" mb="3">
            Available Sizes:
          </Text>
          <HStack spacing="6">
            {sizes.map((size: SizeProps, index: number) => (
              <MotionDiv
                key={index}
                style={{ textAlign: 'center' }}
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={defaultTransition}
                whileHover={{ y: -2 }}
              >
                <Text color="#A67F56" fontWeight="medium">
                  {size.range}
                </Text>
                {size.note && (
                  <Text fontSize="sm" color="#A67F56" fontWeight="medium">
                    {size.note}
                  </Text>
                )}
              </MotionDiv>
            ))}
          </HStack>
        </Box>

        <MotionDiv
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.5 }}
        >
          <Button
            bg="#D4B68C"
            color="white"
            borderRadius="full"
            size="lg"
            px="8"
            _hover={{ bg: '#C4A67C' }}
            onClick={onOpen}
          >
            Contact for Price & Samples
          </Button>
        </MotionDiv>
      </Box>

      <MotionDiv
        style={{
          flex: 1,
          minWidth: '0',
        }}
        variants={scaleInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={defaultTransition}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={currentImage}
          alt={title}
          w="full"
          h="auto"
          objectFit="contain"
        />
      </MotionDiv>

      <ContactForm isOpen={isOpen} onClose={onClose} productTitle={title} />
    </MotionDiv>
  );
};

const BenefitCard: React.FC<{
  icon: React.ReactElement<IconProps>;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <MotionDiv
    style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
    }}
    variants={fadeInUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={defaultTransition}
    whileHover={{ y: -5, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
  >
    <MotionDiv
      style={{ color: '#A67F56', marginBottom: '1rem' }}
      whileHover={{ scale: 1.1 }}
      transition={defaultTransition}
    >
      {React.cloneElement(icon, { boxSize: '2rem' })}
    </MotionDiv>
    <Text fontSize="xl" color="#A67F56" fontWeight="bold" mb="3">
      {title}
    </Text>
    <Text color="#A67F56" fontWeight="medium">
      {description}
    </Text>
  </MotionDiv>
);

export default function Collection() {
  const products: ProductProps[] = [
    {
      title: 'Laced Booties',
      description:
        'Classic design with laces for a secure and adjustable fit. Soft lambskin with natural wool inside.',
      colors: [
        { color: '#8B4513', image: require('../assets/laced/brown.png') },
        { color: '#151555', image: require('../assets/laced/blue.png') },
        { color: '#C26A1E', image: require('../assets/laced/classic.png') },
        { color: '#D2B48C', image: require('../assets/laced/beije.png') },
        { color: '#FFC0CB', image: require('../assets/laced/pink.png') },
        { color: '#87CEEB', image: require('../assets/laced/lightblue.png') },
      ],
      sizes: [
        { range: '0-9 months', note: 'Size (1-2)' },
        { range: '9-18 months', note: 'Size (3-4)' },
        { range: '18-24 months', note: 'Size (5)' },
      ],
      image: require('../assets/laced/classic.png'),
    },
    {
      title: 'Velcro Booties',
      description:
        'Easy on-and-off design with velcro closure. Perfect for quick changes while maintaining warmth.',
      colors: [
        { color: '#8B4513', image: require('../assets/Velcro/brown.png') },
        { color: '#151555', image: require('../assets/Velcro/blue.png') },
        { color: '#C26A1E', image: require('../assets/Velcro/classic.png') },
        { color: '#D2B48C', image: require('../assets/Velcro/beije.png') },
        { color: '#FFC0CB', image: require('../assets/Velcro/pink.png') },
      ],
      sizes: [
        { range: '0-9 months', note: 'Size (1-2)' },
        { range: '9-18 months', note: 'Size (3-4)' },
        { range: '18-24 months', note: 'Size (5)' },
      ],
      image: require('../assets/Velcro/classic.png'),
      imagePosition: 'left',
    },
    {
      title: 'Classy Booties',
      description:
        'Elegant slip-on design with a cozy cuff. Stylish and practical for everyday comfort.',
      colors: [
        { color: '#8B4513', image: require('../assets/classy/brown.png') },
        { color: '#151555', image: require('../assets/classy/blue.png') },
        { color: '#C26A1E', image: require('../assets/classy/classic.png') },
        { color: '#D2B48C', image: require('../assets/classy/beije.png') },
        { color: '#FFC0CB', image: require('../assets/classy/pink.png') },
      ],
      sizes: [
        { range: '0-9 months', note: 'Size (1-2)' },
        { range: '9-18 months', note: 'Size (3-4)' },
        { range: '18-24 months', note: 'Size (5)' },
      ],
      image: require('../assets/classy/classic.png'),
    },
  ];

  const benefits = [
    {
      icon: <TemperatureIcon />,
      title: 'Temperature Regulation',
      description:
        'Natural wool maintains baby temperature, acting as a thermostat to protect from both cold and hot environments.',
    },
    {
      icon: <MoistureIcon />,
      title: 'Moisture Absorption',
      description:
        'Natural wool fibers absorb moisture 7 times faster than synthetic fibers, protecting from skin bacterial formation.',
    },
    {
      icon: <SkinIcon />,
      title: 'Skin Friendly',
      description:
        'The lanolin substance found in lambskin is also found in human skin, providing skin renewal and repair.',
    },
    {
      icon: <OrthopedicIcon />,
      title: 'Orthopedic Support',
      description:
        'The long fibers of lambskin using the best D-2 dimension, creating a natural orthopedic cushion during walking.',
    },
  ];

  return (
    <Box id="products" py={20} bg="white">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Text
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            color="#A67F56"
            fontWeight="bold"
            mb="4"
          >
            Our Collection
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="#A67F56"
            fontWeight="medium"
            maxW="800px"
            mx="auto"
          >
            Explore our range of premium lambskin baby booties, each designed
            with natural materials for your baby's comfort and development.
          </Text>
        </Box>

        <Box mb="20">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Box>

        <Box textAlign="center" mb="12" id="benefits">
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            color="#A67F56"
            fontWeight="black"
            mb="4"
          >
            Why Choose Patikchi Booties ?
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="#A67F56"
            fontWeight="medium"
            maxW="800px"
            mx="auto"
            mb="12"
          >
            Our natural wool booties are a must-have for your baby's comfort,
            health, and development. Made with natural and bio-tested materials,
            they provide the perfect balance of comfort and safety for your
            baby's first steps.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
