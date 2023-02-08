import styled from '@emotion/styled';

export const BlockSlider = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 719px) {
    position: absolute;
    left: 20px;
    top: 320px;
    display: block;
    margin: 0 auto;
  }
`;

export const Decorate = styled.div`
  position: absolute;
  top: 167px;
  left: 275px;
  background-color: black;
  display: block;

  max-width: 10px;
  height: 292px;
  border-radius: 5px;
  @media screen and (max-width: 719px) {
    transform: rotate(270deg);
    top: 65px;
    left: 145px;
  }
`;

export const BlockCompany = styled.div`
  @media screen and (max-width: 719px) {
    position: absolute;
    left: -100px;
    top: -80px;
    transform: rotate(270deg);
    max-height: 719px;
    width: 500px;
  }
`;
