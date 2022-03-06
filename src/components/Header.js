import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  handleSum = () => {
    const zero = 0;
    const { expenses } = this.props;

    if (expenses.length > 0) {
      const totalSum = expenses.reduce((acc, curr) => {
        const { value } = curr;
        const currencyAsk = curr.exchangeRates[curr.currency].ask;
        const brlValue = Number(currencyAsk) * Number(value);
        return acc + brlValue;
      }, 0);

      return totalSum.toFixed(2);
    }
    return zero.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;

    return (
      <header>

        <div className="title-container">
          <h1>TRYBE WALLET</h1>
        </div>

        <div className="infos-div" data-testid="email-field">
          <span>Email:</span>
          {' '}
          { userEmail }
        </div>
        <div className="infos-div" data-testid="total-field">
          <span>Despesa Total:</span>
          {' '}
          {'R$ '}
          { this.handleSum() }
        </div>
        <div
          className="infos-div"
          data-testid="header-currency-field"
        >
          <span>BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
