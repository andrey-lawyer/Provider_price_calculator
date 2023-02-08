import styled from '@emotion/styled';
import iconScaleway from 'images/scaleway.svg';

export const SpanScaleway = styled.span`
  width: 120px;
  /* background-size: 90; */
  background-color: rgb(21, 26, 45);
  background-image: url(${iconScaleway});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 5px;
  @media screen and (max-width: 719px) {
    transform: rotate(90deg);
    width: 45px;
    height: 30px;
    margin-top: 7px;
    /* margin-right: 5px; */
    padding: 0;
    margin-right: 2px;
  }
`;
export const BlockScaleway = styled.div`
  line-height: 15px;
  min-width: 130px;
  display: block;
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 719px) {
    transform: rotate(90deg);
    line-height: 0px;
    min-width: 0px;
    font-size: 12px;
    text-align: center;
  }
`;
export const Cast = styled.p`
  line-height: 40px;
  margin-left: 3px;
`;
