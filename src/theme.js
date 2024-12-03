import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      orange: '#FF6B00',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'brand.orange',
          color: 'white',
          _hover: {
            bg: 'orange.600',
          },
        },
        outline: {
          borderColor: 'brand.orange',
          color: 'brand.orange',
        },
      },
    },
  },
});

export default theme;
