const GOLD_POINTS = 3;
const SILVER_POINTS = 2;
const BRONZE_POINTS = 1;

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "add-country": {
      const newState = { ...state };
      newState[action.payload.country] = {
        gold: 0,
        silver: 0,
        bronze: 0,
        totalMedals: 0,
        totalPoints: 0
      };
      return newState;
    }
    case "add-gold": {
      const newState = { ...state };
      const currentGold = newState[action.payload.country].gold;
      newState[action.payload.country].gold = currentGold + 1;
      return newState;
    }
    case "add-silver": {
      const newState = { ...state };
      const currentSilver = newState[action.payload.country].silver;
      newState[action.payload.country].silver = currentSilver + 1;
      return newState;
    }
    case "add-bronze": {
      const newState = { ...state };
      const currentBronze = newState[action.payload.country].bronze;
      newState[action.payload.country].bronze = currentBronze + 1;
      return newState;
    }
    case "add-total": {
      const newState = { ...state };
      const item = newState[action.payload.country];
      item.totalMedals = item.gold + item.silver + item.bronze;
      return newState;
    }
    case "add-total-points": {
      const newState = { ...state };
      const item = newState[action.payload.country];
      item.totalPoints =
        item.gold * GOLD_POINTS +
        item.silver * SILVER_POINTS +
        item.bronze * BRONZE_POINTS;
      return newState;
    }
    default:
      return state;
  }
};

export const initialState = {};

export default reducer;
