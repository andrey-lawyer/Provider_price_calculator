import { Box, Progress, useMediaQuery } from '@chakra-ui/react';
import { ParagraphBackblaze, SpanBackblaze, Cast } from './Backblaze.styled';

export function BackBlaze({ cost, color }) {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <Box as="div" pt={4} pb={4} color={'black'} display="flex">
      <ParagraphBackblaze>backblaze</ParagraphBackblaze>
      <SpanBackblaze></SpanBackblaze>
      <Progress
        as="div"
        mt={'10px'}
        mb={'10px'}
        ml={'15px'}
        colorScheme={color === 'backBlaze' ? 'orange' : 'gray'}
        color="white"
        height="25px"
        value="100"
        width={isDesk ? `${cost * 4}px` : `${cost * 2}px`}
      />
      <Cast>{cost.toFixed(2)}$</Cast>
    </Box>
  );
}
