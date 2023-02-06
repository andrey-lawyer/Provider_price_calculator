import { useState, useEffect } from 'react';
import oneImg from 'images/oneImage.png';
import heart from 'images/heart.png';
import circle from 'images/Ellipse.png';
import brickOne from 'images/brickOne.png';
import line from 'images/line.png';
import brickTwo from 'images/brickTwo.png';
import icons from 'images/icons.svg';

import {
  CardUser,
  NumberТweets,
  NumberFollowers,
  AvatarUser,
  Button,
  Heart,
  Circle,
  BrickOne,
  BrickTwo,
  Line,
  IconLogo,
} from './ItemUser.styled';

export const ItemUser = ({ id, avatar, user, tweets, followers }) => {
  const [switching, setSwitching] = useState(true);

  const onClickFollowers = () => {
    setSwitching(!switching);
  };

  let textButton;
  let userFollowers;
  if (switching) {
    textButton = 'Follow';
    userFollowers = followers;
  } else {
    textButton = 'Following';
    userFollowers = followers + 1;
  }

  userFollowers = String(userFollowers);
  const firstWord = userFollowers.slice(0, 3);
  const secondWord = userFollowers.slice(3, userFollowers.length);
  userFollowers = firstWord + ',' + secondWord;

  const CONTACTS_KEY = `${id}contacts`;

  useEffect(() => {
    const savedState = localStorage.getItem(CONTACTS_KEY);
    let parseState;
    try {
      parseState = JSON.parse(savedState) ?? true;
    } catch (error) {
      parseState = true;
    }
    setSwitching(parseState);
  }, [CONTACTS_KEY]);

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(switching));
  }, [switching, CONTACTS_KEY]);

  return (
    <CardUser>
      <IconLogo width="88">
        <use href={`${icons}#icon-Logo`}></use>
      </IconLogo>
      <Heart src={heart} alt={heart} width="44" />
      <Circle src={circle} alt={circle} width="96" />
      <BrickOne src={brickOne} alt={brickOne} width="56" />
      <Line src={line} alt={line} width="454" />
      <BrickTwo src={brickTwo} alt={brickTwo} width="39" />

      <img src={oneImg} alt={user} />

      <AvatarUser src={avatar} alt={user} width="80" />
      <NumberТweets>{tweets} tweets</NumberТweets>
      <NumberFollowers>{userFollowers} followers</NumberFollowers>
      <Button
        colorButton={switching}
        type="button"
        onClick={() => onClickFollowers()}
      >
        {textButton}
      </Button>
    </CardUser>
  );
};
