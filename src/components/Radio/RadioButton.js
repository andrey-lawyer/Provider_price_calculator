import { Radio, RadioGroup, Stack, useMediaQuery } from '@chakra-ui/react';

export const RadioButton = ({ setValue, value, button1, button2 }) => {
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <RadioGroup size="sm" onChange={setValue} value={value}>
      <Stack
        direction={isDesk ? 'row' : 'column'}
        pt={!isDesk ? '10px' : '0'}
        fontWeight="400"
      >
        <Radio height={isDesk ? '30px' : '15px'} value="1">
          {button1}
        </Radio>
        <Radio height={isDesk ? '30px' : '0px'} value="2">
          {button2}
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
