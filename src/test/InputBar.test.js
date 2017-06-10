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
    const component = mount(
      <InputBar value={startValue} text={placeholderText} />
    );
    expect(component.find("FormControl").props().placeholder).toEqual(
      placeholderText
    );
    expect(component.find("FormControl").props().value).toEqual(startValue);
  });
});
