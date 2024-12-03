import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const FAQItem = ({ question, answer }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'brand.orange', color: 'white' }}>
          <Box flex="1" textAlign="left" fontWeight="medium">
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} color="gray.600">
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: 'Como funciona o Move+?',
      answer: 'O Move+ é um aplicativo de mobilidade urbana que conecta passageiros a motoristas parceiros. Basta baixar o app, cadastrar-se e solicitar sua primeira viagem!'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos cartões de crédito, débito, dinheiro e pagamentos via PIX para sua conveniência.'
    },
    {
      question: 'O Move+ é seguro?',
      answer: 'Sim! Todos os motoristas parceiros passam por uma rigorosa verificação de antecedentes e o app possui diversos recursos de segurança.'
    },
    {
      question: 'Em quais cidades o Move+ está disponível?',
      answer: 'Atualmente estamos presentes em mais de 30 cidades brasileiras e continuamos expandindo nossa cobertura.'
    },
    {
      question: 'Como me tornar um motorista parceiro?',
      answer: 'Para se tornar um motorista parceiro, baixe o app Move+ Driver e siga as instruções de cadastro. É necessário ter CNH com EAR e documentação do veículo em dia.'
    }
  ];

  return (
    <Box bg="white" py={16}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading color="brand.black">Perguntas Frequentes</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            Tire suas dúvidas sobre o Move+
          </Text>
        </Stack>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </MotionBox>
      </Container>
    </Box>
  );
}
