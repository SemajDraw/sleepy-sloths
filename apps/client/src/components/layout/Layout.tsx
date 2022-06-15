import { Box } from '@chakra-ui/react';
import { Props } from '../../interfaces/component';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }: Props) => {
  return (
    <Box h={'100%'} w={'100%'} maxWidth={'1800px'}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
