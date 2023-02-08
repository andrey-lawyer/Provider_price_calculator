import styled from '@emotion/styled';
import iconBackBlaze from 'images/logo-backblaze-flame-header.webp';

export const SpanBackblaze = styled.span`
 display: block;
  width: 120px;
  background-image: url(${iconBackBlaze});
  background-repeat: no-repeat;
   background-position: center;
  background-size: contain; 
  @media screen and (max-width: 719px) {
    
    transform: rotate(90deg);
    max-width: 49px;
    height: 50px;
    margin-top: 0px;
    padding: 0;
    margin:0
    margin-left: 0px;
  }
`;
export const ParagraphBackblaze = styled.p`
  line-height: 40px;
  display: block;
  min-width: 130px;
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
