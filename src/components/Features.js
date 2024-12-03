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
import { FaRoute, FaClock, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const features = [
  {
    id: 1,
    title: 'Rotas Inteligentes',
    text: 'Encontre o melhor caminho com nossa tecnologia de otimização de rotas.',
    icon: FaRoute,
  },
  {
    id: 2,
    title: 'Tempo Real',
    text: 'Acompanhe seu trajeto em tempo real com atualizações instantâneas.',
    icon: FaClock,
  },
  {
    id: 3,
    title: 'Segurança',
    text: 'Viaje com tranquilidade com nosso sistema de segurança avançado.',
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: 'Melhor Custo-Benefício',
    text: 'Economize tempo e dinheiro com nossas tarifas competitivas.',
    icon: FaMoneyBillWave,
  },
];

export default function Features() {
  return (
    <Box bg="gray.50" py={20} id="recursos">
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'} color="brand.black">
            Recursos Exclusivos
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Descubra por que o Move+ é a escolha ideal para sua mobilidade
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {features.map((feature) => (
              <MotionBox
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.id * 0.1 }}
              >
                <HStack align={'top'}>
                  <Box color={'brand.orange'} px={2}>
                    <Icon as={feature.icon} w={10} h={10} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600} fontSize={'lg'} color="brand.black">
                      {feature.title}
                    </Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Container>
    </Box>
  );
}
