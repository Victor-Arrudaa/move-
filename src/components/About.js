import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const Feature = ({ text }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Icon as={FaCheckCircle} color={'brand.orange'} w={5} h={5} />
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Container maxW={'7xl'} py={20} id="sobre">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <MotionFlex
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/about-image.png'}
            objectFit={'cover'}
          />
        </MotionFlex>
        <Stack spacing={4}>
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text
              textTransform={'uppercase'}
              color={'brand.orange'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('orange.50', 'orange.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Nossa História
            </Text>
          </MotionFlex>
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heading color="brand.black">Uma nova era na mobilidade urbana</Heading>
          </MotionFlex>
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text color={'gray.500'} fontSize={'lg'}>
              O Move+ nasceu da necessidade de transformar a maneira como as pessoas
              se locomovem nas cidades. Nossa missão é proporcionar uma experiência
              de mobilidade mais inteligente, segura e sustentável.
            </Text>
          </MotionFlex>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }
          >
            <Feature text={'Presente em mais de 50 cidades'} />
            <Feature text={'Mais de 1 milhão de usuários satisfeitos'} />
            <Feature text={'Compromisso com sustentabilidade'} />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
