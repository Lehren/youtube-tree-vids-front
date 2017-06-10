import React from "react";
import ReactDOM from "react-dom";
import SearchDisplayYoutube from "../components/SearchDisplayYoutube/SearchDisplayYoutube";
import { mount } from "enzyme";

describe(SearchDisplayYoutube, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchDisplayYoutube />, div);
  });

  it("should update the value internally when something is typed", () => {
    const startValue = "";
    const endValue = "I have typed something";
    const component = mount(<SearchDisplayYoutube />);
    const inputElement = component.find("FormControl");

    expect(inputElement.props().value).toEqual(startValue);

    inputElement.simulate("change", { target: { value: endValue } });
    expect(inputElement.props().value).toEqual(endValue);
  });

  it("should call the onChange method when something is typed", () => {
    const textToType = "I have typed something";
    const component = mount(<SearchDisplayYoutube />);
    const spyOnChange = jest.spyOn(component.instance(), "onChange");
    component.update();
    const inputElement = component.find("FormControl");
    inputElement.simulate("change", { target: { value: textToType } });
    expect(spyOnChange).toHaveBeenCalledTimes(1);
  });
});
