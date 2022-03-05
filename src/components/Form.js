import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRate } from '../actions';

class Form extends React.Component {
  state = {
    value: '',
    description: '',
    coin: 'USD',
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
    const { expensesArr } = this.props;

    if (expensesArr.length > 0) {
      const currTotal = expensesArr.reduce((acc, curr) => {
        const { value } = curr;
        const code = curr.exchangeRates[curr.coin];
        const { ask } = code;
        const convertion = Number(value) * Number(ask);
        return acc + convertion;       
      }, 0);
      saveExpense(this.state, currTotal);
    } else {
      saveExpense(this.state);
    } 
  }

  render() {
    const { coinsList } = this.props;

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
            { coinsList.map((coinCode) => (
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
            id="tag-input"totalption>
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
  coinsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coinsList: state.coinsList.coinsListArr,
  expensesArr: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expenseData, currTotal) => dispatch(fetchRate(expenseData, currTotal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
