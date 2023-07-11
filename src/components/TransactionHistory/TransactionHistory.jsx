import style from './transactionStyle.module.scss'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => (
  <section>
    <table className={style.transactionhistory}>
      <thead className="head">
        <tr className="headtable">
          <th className={style.theaditem}>Type</th>
          <th className={style.theaditem}>Amount</th>
          <th className={style.theaditem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};