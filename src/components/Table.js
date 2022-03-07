import React from 'react';
import './Table.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  getCoinName = (expense) => {
    const { exchangeRates, currency } = expense;

    const coinName = exchangeRates[currency].name;

    return coinName;
  }

  getExchangeValue = (expense) => {
    const { exchangeRates, currency } = expense;

    const { ask } = exchangeRates[currency];

    return Number(ask).toFixed(2);
  }

  getConvertedValue = (expense) => {
    const { exchangeRates, currency, value } = expense;

    const { ask } = exchangeRates[currency];

    return (Number(ask) * Number(value)).toFixed(2);
  }

  render() {
    const { expenses } = this.props;

    return (
      <div className="table-container">
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value).toFixed(2) }</td>
              <td>{ this.getCoinName(expense) }</td>
              <td>{ this.getExchangeValue(expense) }</td>
              <td>{ this.getConvertedValue(expense) }</td>
              <td>Real</td>
              <td>Editar/excluir</td>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
