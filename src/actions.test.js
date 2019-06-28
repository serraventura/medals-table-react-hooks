import { addCountry, addMedal } from "./actions";

let addCountryDispatch, addMedalDispatch;

describe("actions", () => {
  beforeEach(() => {
    addCountryDispatch = jest.fn();
    addMedalDispatch = jest.fn();
  });

  it("should dispatch addCountry with right parameters", () => {
    addCountry(addCountryDispatch, "UK");
    expect(addCountryDispatch).toHaveBeenCalledWith({
      type: "add-country",
      payload: {
        country: "UK"
      }
    });
  });

  it("should dispatch addMedal with right parameters", () => {
    addMedal(addMedalDispatch, "UK", "add-something");
    expect(addMedalDispatch).toHaveBeenCalledWith({
      type: "add-something",
      payload: {
        country: "UK"
      }
    });
  });
});
