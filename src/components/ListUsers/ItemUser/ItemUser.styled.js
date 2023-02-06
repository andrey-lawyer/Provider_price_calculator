import styled from 'styled-components';

export const Heart = styled.img`
  position: absolute;
  left: 344px;
  bottom: 312px;
`;
export const Circle = styled.img`
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 246px;
  left: 179px;
  z-index: 2;
`;
export const BrickOne = styled.img`
  position: absolute;
  /* top: 252px; */
  bottom: 320px;
  left: 54px;
`;
export const BrickTwo = styled.img`
  position: absolute;
  bottom: 466px;
  left: 370px;
`;

export const Line = styled.img`
  position: absolute;
  bottom: 288px;
  z-index: 0;
`;
export const IconLogo = styled.svg`
  position: absolute;
  top: -38px;
  left: 24px;
`;

export const CardUser = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${props => props.theme.spacing(12)};
  padding-top: 38px;

  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  width: 454px;
  height: 547px;
  border-radius: ${props => props.theme.spacing(6)};
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const AvatarUser = styled.img`
  margin-bottom: ${props => props.theme.spacing(11)};
  margin-top: 9px;
  padding: 13px;
  z-index: 1;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50%;
`;
export const NumberТweets = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.21;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.buttonFollow};
`;
export const NumberFollowers = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.21;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing(8)};
  margin-top: 0;
  color: ${props => props.theme.colors.buttonFollow};
`;
export const Button = styled.button`
  background-color: ${props => {
    return props.colorButton
      ? props.theme.colors.buttonFollow
      : props.theme.colors.buttonFolowing;
  }};
  color: ${props => props.theme.colors.text};

  font-weight: 600;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.2;
  text-transform: uppercase;

  min-width: 226px;
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-top: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(3)};

  text-align: center;
  display: inline-block;

  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
