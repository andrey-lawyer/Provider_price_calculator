import { Box, Progress, useMediaQuery } from '@chakra-ui/react';
import { BlockScaleway, SpanScaleway, Cast } from './Scaleway.styled';
import { RadioButton } from '../Radio/RadioButton';

export function Scaleway({ color, setValueScaleway, valueScaleway, cost }) {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <Box pt={4} pb={4} color={'black'} display="flex">
      <BlockScaleway>
        scaleway
        <RadioButton
          setValue={setValueScaleway}
          value={valueScaleway}
          button1="Multi"
          button2="Single"
        />
      </BlockScaleway>
      <SpanScaleway></SpanScaleway>
      <Progress
        mt={'10px'}
        mb={'10px'}
        ml={'15px'}
        colorScheme={color === 'scaleway' ? 'orange' : 'gray'}
        color="white"
        height="25px"
        value="100"
        width={isDesk ? `${cost * 4}px` : `${cost * 2}px`}
      />
      <Cast>{cost.toFixed(2)}$</Cast>
    </Box>
  );
}
