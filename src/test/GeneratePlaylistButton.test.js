import React from "react";
import ReactDOM from "react-dom";
import GeneratePlaylistButton from "../components/GeneratePlayListButton/GeneratePlaylistButton";

describe(GeneratePlaylistButton, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GeneratePlaylistButton />, div);
  });
});
