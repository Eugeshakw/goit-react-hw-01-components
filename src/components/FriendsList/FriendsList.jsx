import style from './friendlistStyle.module.scss'
import PropTypes from "prop-types"
export const FriendsList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(friend => (
      <FriendsListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    <span className={isOnline ? style.online : style.offline}></span>
    <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
