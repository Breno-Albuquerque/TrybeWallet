// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };

  case ('DELETE_EXPENSE'):
    return {
      ...state,
      expenses: (state.expenses).filter((_item, index) => index !== action.expenseIndex),
    };
  default:
    return state;
  }
};

export default wallet;
