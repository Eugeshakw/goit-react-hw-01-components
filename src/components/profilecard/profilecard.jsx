import style from './profileCardStyles.module.scss';
import PropTypes from "prop-types"

export const ProfileCard = ({ username, tag, location, avatar, stats }) => (
  <div id="app">
    <input type="checkbox" id={style.toggle} />
    <br />
    <div className={style.cardcontainer}>
      <div className={style.card}>
        <div className={style.user}>
          <div className={style.img}>
            <img src={avatar} />
          </div>
          <div className={style.name}>{username}</div>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <div className={style.followstats}>
          <div className={style.stat}>
            <div className={style.num}>{stats.followers}</div>
            <div className={style.cap}>Followers</div>
          </div>

          <div className={style.stat}>
            <div className={style.num}>{stats.views}</div>
            <div className={style.cap}>views</div>
          </div>

          <div className={style.stat}>
            <div className={style.num}>{stats.likes}</div>
            <div className={style.cap}>likes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,

};


