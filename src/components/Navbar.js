import React from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" position="fixed" w="100%" zIndex={100} bg="white" boxShadow="sm">
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        justify={'space-between'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Image
            h="40px"
            src="/images/logo.png"
            alt="Move+"
          />
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <Stack direction={'row'} spacing={4}>
            {['Início', 'Recursos', 'Sobre', 'Contato', 'Download'].map((navItem) => (
              <Link
                key={navItem}
                to={navItem.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  color="black"
                  _hover={{
                    color: 'brand.orange',
                  }}
                >
                  {navItem}
                </Button>
              </Link>
            ))}
          </Stack>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>

      {/* Mobile menu */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        bg="white"
        p={4}
      >
        <Stack as={'nav'} spacing={4}>
          {['Início', 'Recursos', 'Sobre', 'Contato', 'Download'].map((navItem) => (
            <Link
              key={navItem}
              to={navItem.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button
                w="full"
                variant="ghost"
                color="black"
                _hover={{
                  color: 'brand.orange',
                }}
                onClick={onToggle}
              >
                {navItem}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
