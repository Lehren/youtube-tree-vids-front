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

  it("should call the onKeyPress method when something is pressed", () => {
    const textToType = "I have typed something";
    const component = mount(<SearchDisplayYoutube />);
    const spyOnKeyPress = jest.spyOn(component.instance(), "onKeyPress");
    component.update();
    const inputElement = component.find("FormControl");
    inputElement.simulate("keyPress", { target: { value: textToType } });
    expect(spyOnKeyPress).toHaveBeenCalledTimes(1);
  });

  it("should only set the url when the enter key is pressed", () => {
    const textToType = "https://www.youtube.com/watch?v=YW5-0zxpVqY";
    const component = mount(<SearchDisplayYoutube />);
    const spyOnKeyPress = jest.spyOn(component.instance(), "onKeyPress");
    const spyOnChange = jest.spyOn(component.instance(), "onChange");
    component.update();

    const inputElement = component.find("FormControl");
    inputElement.simulate("change", { target: { value: textToType } });
    expect(component.state().value).toBe(textToType);
    expect(component.state().url).toBe("");

    inputElement.simulate("keyPress", { key: "Enter" });

    expect(component.state().value).toBe(textToType);
    expect(component.state().url).toBe("YW5-0zxpVqY");

    expect(spyOnChange).toHaveBeenCalledTimes(1);
    expect(spyOnKeyPress).toHaveBeenCalledTimes(1);
  });

  it("should not set the url when the enter key is not pressed", () => {
    const textToType = "I have typed something";
    const component = mount(<SearchDisplayYoutube />);
    const spyOnKeyPress = jest.spyOn(component.instance(), "onKeyPress");
    const spyOnChange = jest.spyOn(component.instance(), "onChange");
    component.update();

    const inputElement = component.find("FormControl");
    inputElement.simulate("change", { target: { value: textToType } });
    expect(component.state().value).toBe(textToType);
    expect(component.state().url).toBe("");

    inputElement.simulate("keyPress", { key: "LeftArrow" });

    expect(component.state().value).toBe(textToType);
    expect(component.state().url).toBe("");

    expect(spyOnChange).toHaveBeenCalledTimes(1);
    expect(spyOnKeyPress).toHaveBeenCalledTimes(1);
  });

  it("should get the id from a youtube url when it is typed and the enter key is pressed", () => {
    const youtubeUrls = [
      "http://www.youtube.com/user/dreamtheater#p/u/1/oTJRivZTMLs",
      "https://youtu.be/oTJRivZTMLs?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b",
      "http://www.youtube.com/watch?v=oTJRivZTMLs&feature=youtu.be",
      "https://youtu.be/oTJRivZTMLs",
      "http://youtu.be/oTJRivZTMLs&feature=channel",
      "http://www.youtube.com/ytscreeningroom?v=oTJRivZTMLs",
      "http://www.youtube.com/embed/oTJRivZTMLs?rel=0",
      "http://youtube.com/v/oTJRivZTMLs&feature=channel",
      "http://youtube.com/v/oTJRivZTMLs&feature=channel",
      "http://youtube.com/vi/oTJRivZTMLs&feature=channel",
      "http://youtube.com/?v=oTJRivZTMLs&feature=channel",
      "http://youtube.com/?feature=channel&v=oTJRivZTMLs",
      "http://youtube.com/?vi=oTJRivZTMLs&feature=channel",
      "http://youtube.com/watch?v=oTJRivZTMLs&feature=channel",
      "http://youtube.com/watch?vi=oTJRivZTMLs&feature=channel"
    ];

    const wantedId = "oTJRivZTMLs";

    youtubeUrls.map(url => {
      const component = mount(<SearchDisplayYoutube />);
      const inputElement = component.find("FormControl");
      inputElement.simulate("change", { target: { value: url } });
      inputElement.simulate("keyPress", { key: "Enter" });
      expect(component.state().url).toEqual(wantedId);
    });
  });
});
