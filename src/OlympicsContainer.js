import React, { useReducer } from "react";
import MedalTable from "./MedalTable";
import CountryForm from "./CountryForm";
import reducer, { initialState } from "./reducer";
import { selectAllCountries } from "./selectors";
import { addMedal, addCountry } from "./actions";
import { MainContainer } from "./styledComponents";

const OlympicsContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addMedalHandler = (country, type) => addMedal(dispatch, country, type);

  return (
    <MainContainer>
      <CountryForm onEnter={country => addCountry(dispatch, country)} />
      <MedalTable
        list={selectAllCountries(state)}
        onAddGold={addMedalHandler}
        onAddSilver={addMedalHandler}
        onAddBronze={addMedalHandler}
      />
    </MainContainer>
  );
};

export default OlympicsContainer;
