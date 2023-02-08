import { Container, useMediaQuery } from '@chakra-ui/react';
import { SliderNew } from './components/Slider/SliderNew';
import { BlockSlider, BlockCompany, Decorate } from 'App.styled';
import { BackBlaze } from 'components/Backblaze/Backblaze';
import { Bunny } from 'components/Bunny/Bunny';
import { Scaleway } from 'components/Scaleway/Scaleway';
import { Vultr } from 'components/Vultr/Vultr';
import { useState } from 'react';
import { scaleway, backblaze, bunny, vultr } from 'constants/data';
import {
  calculator,
  calculatorBunny,
  calculatorScaleway,
} from 'services/calculator';

export const App = () => {
  const [sliderValueStorage, setSliderValueStorage] = useState(0);
  const [sliderValueTransfer, setSliderValueTransfer] = useState(0);

  const [valueScaleway, setValueScaleway] = useState('1');
  const [valueBunny, setValueBunny] = useState('1');

  const costScaleway = calculatorScaleway(
    sliderValueStorage,
    sliderValueTransfer,
    valueScaleway,
    scaleway
  );

  const costBunny = calculatorBunny(
    sliderValueStorage,
    sliderValueTransfer,
    valueBunny,
    bunny
  );
  const costBackBlaze = calculator(
    sliderValueStorage,
    sliderValueTransfer,
    backblaze
  );

  const costVultr = calculator(sliderValueStorage, sliderValueTransfer, vultr);

  const minCost = Math.min(costBunny, costScaleway, costVultr, costBackBlaze);
  let color;
  switch (minCost) {
    case costBunny:
      color = 'bunny';
      break;
    case costScaleway:
      color = 'scaleway';
      break;
    case costVultr:
      color = 'vultr';
      break;
    default:
      color = 'backBlaze';
  }
  const [isDesk] = useMediaQuery('(min-width: 720px)');
  return (
    <>
      <Container maxW="5xl">
        <Container
          boxShadow={isDesk && 'dark-lg'}
          rounded={isDesk && 'md'}
          bg="white"
          maxW={isDesk && '4xl'}
          marginTop={isDesk && '50px'}
          p={isDesk ? '20px' : 0}
          height={isDesk && '600px'}
          border={isDesk && '1px solid black'}
          borderRadius={isDesk && 15}
          position={'relative'}
        >
          <BlockSlider>
            <SliderNew
              name="Storage"
              value={sliderValueStorage}
              setValue={setSliderValueStorage}
            />
            <SliderNew
              name="Transfer"
              value={sliderValueTransfer}
              setValue={setSliderValueTransfer}
            />
          </BlockSlider>
          <BlockCompany>
            <BackBlaze cost={costBackBlaze} color={color} />
            <Bunny
              color={color}
              valueBunny={valueBunny}
              setValueBunny={setValueBunny}
              cost={costBunny}
            />
            <Scaleway
              color={color}
              valueScaleway={valueScaleway}
              setValueScaleway={setValueScaleway}
              cost={costScaleway}
            />
            <Vultr cost={costVultr} color={color} />
          </BlockCompany>
          <Decorate>span</Decorate>
        </Container>
      </Container>
    </>
  );
};
