import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OlympicsContainer from "./OlympicsContainer";

configure({ adapter: new Adapter() });

describe("<OlympicsContainer />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<OlympicsContainer />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = mount(<OlympicsContainer />);
    expect(wrapper).toMatchSnapshot();
  });  
});
