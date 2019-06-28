import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CountryForm from "./CountryForm";

configure({ adapter: new Adapter() });

let onEnter;

describe("<CountryForm />", () => {
  beforeEach(() => {
    onEnter = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<CountryForm />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<CountryForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle onEnter prop", () => {
    const wrapper = shallow(<CountryForm onEnter={onEnter} />);

    wrapper
      .find('*[data-test="add-country-input"]')
      .first()
      .simulate("keydown", { keyCode: 13, target: { value: "uk" } });

    expect(onEnter).toHaveBeenCalled();
    expect(onEnter).toHaveBeenCalledWith("uk");
  });
});
