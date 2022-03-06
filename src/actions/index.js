// Coloque aqui suas actions
export const sendEmail = (email) => ({ type: 'EMAIL', email });

export const addExpense = (expenseData, coinsData) => (
  { type: 'EXPENSE',
    payload: { ...expenseData, exchangeRates: { ...coinsData } } });

export const fetchRate = (expenseData) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coinsData = await response.json();

  dispatch(addExpense(expenseData, coinsData));
};
