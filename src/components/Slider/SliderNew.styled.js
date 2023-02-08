import styled from '@emotion/styled';

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 5px;
  display: flex;
  @media screen and (max-width: 719px) {
    font-size: 14px;
    margin-bottom: 0;
    line-height: 1.3;
  }
`;

export const Span = styled.span`
  display: inline-block;
  margin-left: auto;
`;
