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
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Download() {
  return (
    <Container maxW={'7xl'} id="download">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text as={'span'} color={'brand.black'}>
                Baixe agora o
              </Text>
              <br />
              <Text as={'span'} color={'brand.orange'}>
                Move+
              </Text>
            </Heading>
            <Text
              color={'gray.500'}
              maxW={'3xl'}
              fontSize={'xl'}
            >
              Disponível para Android e iOS. Baixe agora e comece a transformar
              sua experiência de mobilidade urbana.
            </Text>
          </MotionBox>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<FaGooglePlay />}
              bg={'brand.black'}
              color={'white'}
              _hover={{ bg: 'gray.800' }}
            >
              Google Play
            </Button>
            <Button
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<FaApple />}
              bg={'brand.black'}
              color={'white'}
              _hover={{ bg: 'gray.800' }}
            >
              App Store
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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'App Screenshot'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/app-store-preview.png'}
            />
          </MotionBox>
        </Flex>
      </Stack>
    </Container>
  );
}
