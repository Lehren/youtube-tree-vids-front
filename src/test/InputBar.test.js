import React from "react";
import ReactDOM from "react-dom";
import InputBar from "../components/InputBar/InputBar";
import { shallow, mount } from "enzyme";

describe(InputBar, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputBar />, div);
  });

  it("renders with a placeholder and startvalue", () => {
    const placeholderText = "Input something here!";
    const startValue = "";
    const component = mount(<InputBar text={placeholderText} />);
    expect(component.find("FormControl").props().placeholder).toEqual(
      placeholderText
    );
    expect(component.find("FormControl").props().value).toEqual(startValue);
  });

  it("should update the value internally when something is typed", () => {
    const startValue = "";
    const endValue = "I have typed something";
    const component = mount(<InputBar />);
    const inputElement = component.find("FormControl");

    expect(inputElement.props().value).toEqual(startValue);

    inputElement.simulate("change", { target: { value: endValue } });
    expect(inputElement.props().value).toEqual(endValue);
  });

  it("should call the onChange method when something is typed", () => {
    const textToType = "I have typed something";
    const component = mount(<InputBar />);
    const spyOnChange = jest.spyOn(component.instance(), "handleChange");
    component.update();
    const inputElement = component.find("FormControl");
    inputElement.simulate("change", { target: { value: textToType } });
    expect(spyOnChange).toHaveBeenCalledTimes(1);
  });

  it("should call onKeyPress from props when a key is pressed", () => {
    const mockOnKeyPress = jest.fn();
    const component = mount(<InputBar onKeyPress={mockOnKeyPress} />);
    const inputElement = component.find("FormControl");
    expect(inputElement.props().onKeyPress).toEqual(mockOnKeyPress);
    inputElement.simulate("keyPress", { keyCode: 13, which: 13 });
    expect(mockOnKeyPress).toHaveBeenCalledTimes(1);
  });
});
