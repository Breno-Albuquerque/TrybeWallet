import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRate, editExpense } from '../actions';
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
    const { saveExpense, edit, isEditing, editingIndex } = this.props;

    if (isEditing) {
      edit(this.state, editingIndex);
    } else {
      saveExpense(this.state);

      this.setState({
        value: '',
      });
    }
  }

  render() {
    const { value } = this.state;
    const { currencies, isEditing } = this.props;

    return (
      <div className="div-form-container">
        <form className="main-form">
          <label className="input-label" htmlFor="value-input">
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
              autoComplete="off"
            />
          </label>

          <label className="input-label" htmlFor="description-input">
            {' '}
            Descrição:
            {' '}
            {' '}
            <input
              name="description"
              onChange={ this.handleChange }
              id="description-input"
              data-testid="description-input"
              autoComplete="off"
            />
          </label>

          <label className="select-label" htmlFor="currency-input">
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
              { currencies.map((coinCode) => (
                <option
                  data-testid={ coinCode }
                  key={ coinCode }
                >
                  { coinCode }

                </option>
              ))}
            </select>
          </label>

          <label className="select-label" htmlFor="method-input">
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

          <label htmlFor="tag-input" className="select-label">
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

          <button
            className="form-button"
            onClick={ this.handleClick }
            type="button"
          >
            { isEditing ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  edit: PropTypes.func.isRequired,
  editingIndex: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  expensesArr: state.wallet.expenses,
  isEditing: state.wallet.isEditing,
  editingIndex: state.wallet.editingIndex,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expenseData) => dispatch(fetchRate(expenseData)),
  edit: (expenseData, index) => dispatch(editExpense(expenseData, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
