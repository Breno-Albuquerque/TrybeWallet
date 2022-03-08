// Coloque aqui suas actions
export const sendEmail = (email) => ({ type: 'EMAIL', email });

export const saveCurrencies = (currenciesArr) => ({
  type: 'ADD_CURRENCIES', currencies: currenciesArr });

export const addExpense = (expenseData, coinsData) => (
  { type: 'ADD_EXPENSE',
    payload: { ...expenseData, exchangeRates: { ...coinsData } } });

export const turnEditModeOn = (index) => ({ type: 'EDIT_MODE', editingIndex: index });

export const editExpense = (expenseData, index) => ({
  type: 'EDIT_EXPENSE',
  payload: { expenseData, index },
});

export const deleteExpense = (expenseIndex) => ({ type: 'DELETE_EXPENSE', expenseIndex });

export const fetchRate = (expenseData) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coinsData = await response.json();

  dispatch(addExpense(expenseData, coinsData));
};
