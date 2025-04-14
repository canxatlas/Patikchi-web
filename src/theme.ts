import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Playfair Display', serif",
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: '#A67F56',
      },
    },
  },
});

export default theme; 