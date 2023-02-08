import { Box, Progress, useMediaQuery } from '@chakra-ui/react';
import { ParagraphVultr } from './Vultr.styled';
import { VultrIcon } from 'components/Vultr/VultrIcon';
import { Cast } from '../Backblaze/Backblaze.styled';

export function Vultr({ cost, color }) {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <Box pt={4} pb={4} color={'black'} display="flex">
      <ParagraphVultr>vultr</ParagraphVultr>
      <VultrIcon />
      <Progress
        mt={'10px'}
        mb={'10px'}
        ml={'15px'}
        // colorScheme="gray"
        colorScheme={color === 'vultr' ? 'orange' : 'gray'}
        color="white"
        height="25px"
        value="100"
        width={isDesk ? `${cost * 4}px` : `${cost * 2}px`}
      />
      <Cast>{cost.toFixed(2)}$</Cast>
    </Box>
  );
}
