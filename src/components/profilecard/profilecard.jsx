// import user from '../datas/profileData/user.json';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.views}</span>
      </li>
    </ul>
  </div>
);
