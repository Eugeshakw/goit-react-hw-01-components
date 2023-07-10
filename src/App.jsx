import { ProfileCard } from 'components/profilecard/profilecard';
import user from './components/datas/profileData/user.json';
import { Statistics } from 'components/Statistics/statistics';
import data from 'components/datas/Statistics/data.json';
import {FriendsList} from './components/FriendsList/FriendsList';
import friends from './components/datas/FriendsData/friends.json';

export const App = () => {
  return (
    <>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

    </>
  );
};
