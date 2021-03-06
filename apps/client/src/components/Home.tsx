import { Flex, VStack } from '@chakra-ui/react';
import { Attributes } from './Attributes';
import { Hero } from './Hero';
import { ScrollCarousel } from './ScrollCarousel';

export const Home = () => {
  return (
    <VStack
      id={'home'}
      w={'100%'}
      spacing={12}
      bg={'black'}
      pt={{ base: 10, lg: 12 }}
      pb={{ base: 12, lg: 12 }}
      justify={'space-between'}
      overflow={'hidden'}
    >
      <Hero />
      <Attributes />
      <Flex maxW={'7xl'} overflow={'hidden'}>
        <ScrollCarousel />
      </Flex>
    </VStack>
  );
};
