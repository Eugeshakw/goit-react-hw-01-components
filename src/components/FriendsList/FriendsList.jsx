export const FriendsList = ({ friends }) => (
  <ul>
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
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);
