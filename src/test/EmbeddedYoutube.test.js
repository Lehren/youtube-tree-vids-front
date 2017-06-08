import React from "react";
import ReactDOM from "react-dom";
import EmbeddedYoutube from "../components/EmbeddedYoutube/EmbeddedYoutube";
import Youtube from "react-youtube";
import { mount } from "enzyme";

describe(EmbeddedYoutube, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EmbeddedYoutube />, div);
  });

  it("should have the correct options for the youtube api", () => {
    const opts = {
      playerVars: {
        iv_load_policy: 3,
        rel: 0
      }
    };
    const url = "KMU0tzLwhbE";
    const component = mount(<EmbeddedYoutube url={url} />);
    expect(component.find(Youtube).props().opts).toEqual(opts);
  });

  it("should have a defined url property if one is given", () => {
    const url = "KMU0tzLwhbE";
    const component = mount(<EmbeddedYoutube url={url} />);
    expect(component.props().url).toBe(url);
  });
});
