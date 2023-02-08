import styled from '@emotion/styled';
import iconBunny from 'images/bunny.svg';

export const SpanBunny = styled.span`
  display: block;
  width: 120px;

  background-color: #183d6d;
  background-image: url(${iconBunny});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 5px;
  @media screen and (max-width: 719px) {
    transform: rotate(90deg);
    width: 45px;
    height: 30px;
    margin-top: 6px;
    padding: 0;
    margin-left: 4px;
    margin-right: 1px;
  }
`;
export const BunnyBlock = styled.div`
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
    margin-left: 5px;
    text-align: center;
  }
`;
export const Cast = styled.p`
  line-height: 40px;
  margin-left: 3px;
`;
