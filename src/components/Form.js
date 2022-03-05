import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';

class Form extends React.Component {
  state = {
    value: '',
    description: '',
    coin: '',
    method: '',
    tag: '',
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { saveExpense } = this.props;

    saveExpense(this.state);
  }

  render() {
    return (
      <form>
        <label htmlFor="value-input">
          {' '}
          Valor:
          {' '}
          {' '}
          <input
            name="value"
            onChange={ this.handleChange }
            id="value-input"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description-input">
          {' '}
          Descrição:
          {' '}
          {' '}
          <input
            name="description"
            onChange={ this.handleChange }
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          {' '}
          Moeda
          {' '}
          {' '}
          <select
            name="coin"
            onChange={ this.handleChange }
            id="currency-input"
            data-testid="currency-input"
          >
            <option>a</option>
          </select>
        </label>

        <label htmlFor="method-input">
          {' '}
          Método de pagamento:
          {' '}
          {' '}
          <select
            name="method"
            onChange={ this.handleChange }
            id="method-input"
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          {' '}
          Categoria:
          {' '}
          {' '}
          <select
            name="tag"
            onChange={ this.handleChange }
            id="tag-input"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>

        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expenseData) => dispatch(addExpense(expenseData)),
});

export default connect(null, mapDispatchToProps)(Form);
