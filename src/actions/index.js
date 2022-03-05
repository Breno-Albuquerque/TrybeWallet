// Coloque aqui suas actions
export const sendEmail = (email) => ({ type: 'EMAIL', email });

export const addExpense = (expenseData, coinsData) => (
  { type: 'EXPENSE',
    payload: { ...expenseData, exchangeRates: { ...coinsData } } });

const sum = (newTotal) => ({ type: 'SUM', total: newTotal });

export const fetchRate = (expenseData, currTotal) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coinsData = await response.json();

  dispatch(addExpense(expenseData, coinsData,));
};

export const saveCoinsList = (coinsCode) => (
  { type: 'COINS_LIST', coinsCodeArr: coinsCode });

export const fetchCoinsList = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coinsData = await response.json();
  delete coinsData.USDT;
  const values = Object.values(coinsData);
  const coinsCode = values.map((item) => item.code);

  dispatch(saveCoinsList(coinsCode));
};
