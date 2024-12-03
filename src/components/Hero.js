import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Container maxW={'7xl'} pt={{ base: '6rem', md: '8rem' }}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                color={'brand.black'}
              >
                Mobilidade
              </Text>
              <br />
              <Text as={'span'} color={'brand.orange'}>
                ao seu alcance!
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
              O Move+ é o seu novo companheiro de mobilidade urbana. 
              Com nossa tecnologia inovadora, conectamos você aos melhores 
              serviços de transporte da sua cidade.
            </Text>
          </MotionBox>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'orange'}
              bg={'brand.orange'}
              _hover={{ bg: 'orange.600' }}
            >
              Baixe agora
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              variant='outline'
            >
              Saiba mais
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/app-preview.png'}
            />
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
}
