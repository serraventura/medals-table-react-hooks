import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedalTable from "./MedalTable";
import { selectAllCountries } from "./selectors";

configure({ adapter: new Adapter() });

let onAddGold, onAddSilver, onAddBronze;

describe("<MedalTable />", () => {
  const listData = {
    UK: { gold: 0, silver: 0, bronze: 0, totalMedals: 0, totalPoints: 0 }
  };

  beforeEach(() => {
    onAddGold = jest.fn();
    onAddSilver = jest.fn();
    onAddBronze = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<MedalTable />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<MedalTable />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with data", () => {
    const wrapper = mount(<MedalTable list={selectAllCountries(listData)} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle onAddGold prop", () => {
    const wrapper = shallow(
      <MedalTable list={selectAllCountries(listData)} onAddGold={onAddGold} />
    );

    wrapper.find('*[data-test="gold"]').simulate("click");

    expect(onAddGold).toHaveBeenCalled();
    expect(onAddGold).toHaveBeenCalledWith("UK", "add-gold");
  });

  it("should handle onAddSilver prop", () => {
    const wrapper = shallow(
      <MedalTable
        list={selectAllCountries(listData)}
        onAddSilver={onAddSilver}
      />
    );

    wrapper.find('*[data-test="silver"]').simulate("click");

    expect(onAddSilver).toHaveBeenCalled();
    expect(onAddSilver).toHaveBeenCalledWith("UK", "add-silver");
  });

  it("should handle onAddBronze prop", () => {
    const wrapper = shallow(
      <MedalTable
        list={selectAllCountries(listData)}
        onAddBronze={onAddBronze}
      />
    );

    wrapper.find('*[data-test="bronze"]').simulate("click");

    expect(onAddBronze).toHaveBeenCalled();
    expect(onAddBronze).toHaveBeenCalledWith("UK", "add-bronze");
  });
});
