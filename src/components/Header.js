import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, totalSum } = this.props;

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
  totalSum: state.wallet.total,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalSum: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
