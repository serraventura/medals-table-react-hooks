const selectAllCountries = state => {
  return Object.keys(state)
    .map(i => ({ country: i, ...state[i] }))
    .sort((a, b) => b.totalPoints - a.totalPoints);
};

export { selectAllCountries };
