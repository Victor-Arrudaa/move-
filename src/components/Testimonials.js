import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Testimonial = ({ content, avatar, name, title }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}
      >
        {content}
      </Text>
      <Stack mt={8} direction={'row'} spacing={4} align={'center'}>
        <Avatar src={avatar} />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{name}</Text>
          <Text color={'gray.500'}>{title}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color="brand.black">Nossos Usuários Amam o Move+</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Veja o que estão dizendo sobre nossa plataforma
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Testimonial
              content={'O Move+ revolucionou minha forma de me locomover pela cidade. Praticidade e segurança em um só app!'}
              avatar={'/images/avatar1.jpg'}
              name={'Maria Silva'}
              title={'Usuária há 2 anos'}
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Testimonial
              content={'Preços justos e motoristas muito bem avaliados. Recomendo para todos!'}
              avatar={'/images/avatar2.jpg'}
              name={'João Santos'}
              title={'Usuário há 1 ano'}
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Testimonial
              content={'O atendimento ao cliente é excepcional. Sempre resolvem minhas questões rapidamente.'}
              avatar={'/images/avatar3.jpg'}
              name={'Ana Costa'}
              title={'Usuária há 6 meses'}
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
