const addCountry = (dispatch, country) =>
  dispatch({
    type: "add-country",
    payload: {
      country
    }
  });

const addMedal = (dispatch, country, type) => {
  const param = {
    type,
    payload: {
      country
    }
  };
  dispatch(param);
  dispatch({ ...param, type: "add-total" });
  dispatch({ ...param, type: "add-total-points" });
};

export { addCountry, addMedal };
