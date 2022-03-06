import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  handleSum = () => {
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
    return 0;
  }

  render() {
    const { userEmail } = this.props;

    return (
      <>
        <div data-testid="email-field">{ userEmail }</div>
        <div data-testid="total-field">{ this.handleSum() }</div>
        <div data-testid="header-currency-field">BRL</div>
      </>
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
