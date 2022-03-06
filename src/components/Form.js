import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRate } from '../actions';
import './Form.css';

class Form extends React.Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
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

    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { coinsList } = this.props;

    return (
      <form>
        <label htmlFor="value-input">
          {' '}
          Valor:
          {' '}
          {' '}
          <input
            value={ value }
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
            name="currency"
            onChange={ this.handleChange }
            id="currency-input"
            data-testid="currency-input"
          >
            { coinsList && coinsList.map((coinCode) => (
              <option
                data-testid={ coinCode }
                key={ coinCode }
              >
                { coinCode }

              </option>
            ))}
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
            data-testid="tag-input"
            id="tag-input"
          >
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Trabalho</option>
            <option>Alimentação</option>
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
  coinsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expensesArr: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expenseData) => dispatch(fetchRate(expenseData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
