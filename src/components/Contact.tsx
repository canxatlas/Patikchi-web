import React from 'react';
import {
  Box,
  Container,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { EmailIcon, PhoneIcon, InfoIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: IconComponent,
  title,
  content,
}) => (
  <HStack spacing={4} color="#A67F56">
    <IconComponent />
    <Box>
      <Text fontWeight="medium">{title}</Text>
      <Text opacity={0.8}>{content}</Text>
    </Box>
  </HStack>
);

export default function Contact() {
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you soon.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box id="contact" py={20} bg="rgba(248, 243, 233, 0.3)">
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          mb={12}
        >
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="medium"
            color="#A67F56"
            mb={4}
          >
            Contact Us
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="#A67F56"
            opacity={0.8}
            maxW="800px"
            mx="auto"
          >
            For price information, sample requests, or any questions about our
            products, please get in touch with us.
          </Text>
        </MotionBox>

        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={10}
          alignItems="flex-start"
        >
          {/* Contact Information */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            flex="1"
          >
            <Text fontSize="2xl" fontWeight="medium" color="#A67F56" mb={6}>
              Get in Touch
            </Text>

            <VStack align="stretch" spacing={6}>
              <ContactInfo
                icon={EmailIcon}
                title="Email"
                content="info@patikchi.com"
              />
              <ContactInfo
                icon={PhoneIcon}
                title="Phone"
                content="+90 242 234 0661"
              />
              <ContactInfo
                icon={InfoIcon}
                title="Address"
                content="Zafer Mah. Mehmet Akif Cd. No:123 | Antalya, Turkey / German Ltd."
              />
            </VStack>

            <Box mt={8}>
              <Text fontSize="xl" fontWeight="medium" color="#A67F56" mb={4}>
                Wholesale Inquiries
              </Text>
              <Text color="#A67F56" opacity={0.8}>
                As a manufacturer and wholesale exporter since 1995, we only
                accept bulk orders and distribution partnership only. Contact us
                for special pricing and custom inquiries.
              </Text>
            </Box>
          </MotionBox>

          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            flex="1"
            as="form"
            // @ts-ignore - MotionBox doesn't properly type form attributes
            action="https://formsubmit.co/alelentini@live.com"
            method="POST"
          >
            <VStack spacing={6} align="stretch">
              <FormControl isRequired>
                <FormLabel color="#A67F56">Full Name</FormLabel>
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
                <FormLabel color="#A67F56">Email Address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="#A67F56">Phone Number</FormLabel>
                <Input
                  name="phone"
                  placeholder="Phone number with Country Code"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="#A67F56">Company Name</FormLabel>
                <Input
                  name="company"
                  placeholder="Your Company Name"
                  bg="white"
                  borderColor="#D4B68C"
                  _hover={{ borderColor: '#A67F56' }}
                  _focus={{ borderColor: '#A67F56', boxShadow: 'none' }}
                  _placeholder={{ color: '#A67F56', opacity: 0.5 }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="#A67F56">How Can We Help You?</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell us about your inquiry, including product models and quantities you're interested in"
                  rows={5}
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
                value="New Contact Form Submission"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Patikchi! We have received your message and will get back to you soon."
              />

              <MotionBox
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  bg="#D4B68C"
                  color="white"
                  size="lg"
                  width="full"
                  _hover={{ bg: '#C4A67C' }}
                >
                  Send Message →
                </Button>
              </MotionBox>
            </VStack>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
