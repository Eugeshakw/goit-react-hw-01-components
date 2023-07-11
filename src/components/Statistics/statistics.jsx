import style from './statisticsStyle.module.scss'
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.statlist}>
      {stats.map(stat => (
        <li className={style.item} key={stat.id}>
          <span className={style.label}>{stat.label}</span>
          <span className={style.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
