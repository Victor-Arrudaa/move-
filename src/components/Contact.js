import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdPerson,
} from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    
    // Mostra mensagem de sucesso
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Limpa o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Container maxW="7xl" mt={0} centerContent overflow="hidden">
      <Flex py={20}>
        <Box
          bg="white"
          borderRadius="lg"
          p={8}
          color="gray.700"
          shadow="base"
          w={{ base: 'full', md: '5xl' }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color="brand.black">Entre em Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Preencha o formulário abaixo para falar conosco
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="brand.black"
                        _hover={{ border: '2px solid #FF6B00' }}
                        leftIcon={<MdPhone color="#FF6B00" size="20px" />}>
                        +55 11 4002-8922
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="brand.black"
                        _hover={{ border: '2px solid #FF6B00' }}
                        leftIcon={<MdEmail color="#FF6B00" size="20px" />}>
                        contato@moveplus.com.br
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="brand.black"
                        _hover={{ border: '2px solid #FF6B00' }}
                        leftIcon={<MdLocationOn color="#FF6B00" size="20px" />}>
                        São Paulo, SP
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'brand.orange' }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <MotionBox
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Seu Nome</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              size="md"
                              placeholder="João Silva"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              size="md"
                              placeholder="exemplo@email.com"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="phone">
                          <FormLabel>Telefone</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdPhone color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              size="md"
                              placeholder="(11) 98765-4321"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Mensagem</FormLabel>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Sua mensagem"
                          />
                        </FormControl>
                        <FormControl float="right">
                          <Button
                            variant="solid"
                            bg="brand.orange"
                            color="white"
                            _hover={{ bg: 'orange.600' }}
                            onClick={handleSubmit}>
                            Enviar Mensagem
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </MotionBox>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
