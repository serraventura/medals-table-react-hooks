import { selectAllCountries } from "./selectors";

describe("selectors", () => {
  it("selectAllCountries", () => {
    expect(selectAllCountries({ UK: { gold: 1 } })).toEqual([
      { country: "UK", gold: 1 }
    ]);
  });
});
