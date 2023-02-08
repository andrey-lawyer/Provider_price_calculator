import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useMediaQuery,
} from '@chakra-ui/react';
import { Paragraph, Span } from './SliderNew.styled';

export function SliderNew({ name, value, setValue }) {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <Box
      pt={isDesk ? 6 : 2}
      pb={isDesk ? 2 : 1}
      width={isDesk ? 300 : 250}
      color={'black'}
      display="block"
    >
      <Paragraph>
        {name} : <Span>{value} GB</Span>
      </Paragraph>
      <Slider
        defaultValue={0}
        borderLeft={'4px'}
        borderLeftRadius={'2'}
        borderRight={'4px'}
        borderRightRadius={'2'}
        focusThumbOnChange={false}
        min={0}
        max={1000}
        aria-label="slider-ex-6"
        onChange={val => setValue(val)}
      >
        <SliderTrack bg="black" height={'5px'} borderRadius={0}>
          <SliderFilledTrack bg="black" />
        </SliderTrack>
        <SliderThumb
          bg="black"
          borderRadius={0}
          width={'15px'}
          height={'30px'}
        />
      </Slider>
      <Paragraph>
        0 <Span> 1000 </Span>
      </Paragraph>
    </Box>
  );
}
