// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ItemUser } from 'components/ListUsers/ItemUser/ItemUser';
import { GalleryUsers } from './ListUsers.styled';

export const ListUsers = ({ users }) => {
  return (
    <GalleryUsers>
      {users.map(({ id, avatar, user, tweets, followers }) => (
        <ItemUser
          key={id}
          id={id}
          avatar={avatar}
          user={user}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </GalleryUsers>
  );
};

ListUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
