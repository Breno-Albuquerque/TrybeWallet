// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditing: false,
  editingIndex: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case 'EDIT_MODE':
    return {
      ...state,
      isEditing: true,
      editingIndex: action.editingIndex,
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses
        .map((expense, index) => {
          if (index === action.payload.index) {
            return {
              id: expense.id,
              ...action.payload.expenseData,
              exchangeRates: expense.exchangeRates,
            };
          }
          return expense;
        }),
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
