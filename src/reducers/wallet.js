// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      total: action.totalSpent,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.allExpenses }],
    };
  default:
    return state;
  }
};

export default wallet;
