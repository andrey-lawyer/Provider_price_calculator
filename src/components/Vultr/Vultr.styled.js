import styled from '@emotion/styled';

export const DivIcon = styled.div`
  background-color: #1e38a3;
  border-radius: 5px;
  height: 45px;
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 6px;
  @media screen and (max-width: 719px) {
    transform: rotate(90deg);

    padding-left: 1px;
    width: 45px;
    height: 30px;
    margin-top: 6px;
    margin-left: 4px;
    margin-right: 3px;
`;
export const ParagraphVultr = styled.p`
  display: block;
  min-width: 130px;
  padding-top: 10px;

  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 719px) {
    transform: rotate(90deg);
    line-height: 0px;
    min-width: 0px;
    font-size: 12px;
    text-align: center;
    margin-left: 26px;
  }
`;
