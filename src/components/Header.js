import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    totalSum: 0,
  }

  handleSum = () => {
    const { expensesArr } = this.props;

    expensesArr.forEach((expense) => {
      const value = Number(expense.value);
      const rate = Number(expense.exchangeRates.ask);
      const result = value * rate;
      this.setState((prevState) => ({
        totalSum: Number(prevState.totalSum) + result,
      }));
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalSum } = this.state;

    return (
      <>
        <div data-testid="email-field">{ userEmail }</div>
        <div data-testid="total-field">{ totalSum }</div>
        <div data-testid="header-currency-field">BRL</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesArr: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesArr: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
