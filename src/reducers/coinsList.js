const INITIAL_STATE = {
  coinsListArr: [],
};

const coinsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'COINS_LIST':
    return {
      ...state,
      coinsListArr: action.coinsCodeArr,
    };
  default:
    return state;
  }
};

export default coinsList;
