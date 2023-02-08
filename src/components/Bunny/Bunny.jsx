import { Box, Progress, useMediaQuery } from '@chakra-ui/react';
import { RadioButton } from 'components/Radio/RadioButton';
import { BunnyBlock, SpanBunny, Cast } from './Bunny.styled';

export function Bunny({ valueBunny, setValueBunny, color, cost }) {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <Box as="div" pt={4} pb={4} color={'black'} display="flex">
      <BunnyBlock>
        bunny
        <RadioButton
          setValue={setValueBunny}
          value={valueBunny}
          button1="HDD"
          button2="SSD"
        />
      </BunnyBlock>
      <SpanBunny></SpanBunny>
      <Progress
        as="div"
        mt={'10px'}
        mb={'10px'}
        ml={'15px'}
        colorScheme={color === 'bunny' ? 'orange' : 'gray'}
        color="white"
        height="25px"
        value="100"
        width={isDesk ? `${cost * 4}px` : `${cost * 2}px`}
      />
      <Cast>{cost.toFixed(2)}$</Cast>
    </Box>
  );
}
