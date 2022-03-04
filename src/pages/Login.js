import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendEmail from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, () => this.handleDisable());
  }

  handleClick = () => {
    const { history, saveEmail } = this.props;
    const { email } = this.state;

    saveEmail(email);
    history.push('/carteira');
  }

  handleDisable = () => {
    const { email, password } = this.state;

    if (this.validPassword(password) && this.validEmail(email)) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  validPassword = (password) => {
    const MIN_LENGTH = 6;

    if (password.length >= MIN_LENGTH) {
      return true;
    }

    return false;
  }

  validEmail = (email) => {
    if (email.endsWith('.com') && email.includes('@')) {
      return true;
    }

    return false;
  }

  render() {
    const { isDisabled } = this.state;

    return (
      <form>
        <label htmlFor="email-input">
          {' '}
          Email:
          {' '}
          {' '}
          <input
            name="email"
            onChange={ this.handleChange }
            id="email-input"
            data-testid="email-input"
            type="email"
          />
        </label>
        <label htmlFor="password-input">
          {' '}
          Senha:
          {' '}
          {' '}
          <input
            name="password"
            onChange={ this.handleChange }
            id="password-input"
            data-testid="password-input"
            type="password"
          />
        </label>
        <button
          disabled={ isDisabled }
          onClick={ this.handleClick }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(sendEmail(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
