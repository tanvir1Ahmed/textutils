import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Button is clicked");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("Button is clicked");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("Text has been changed");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    setText("");
  };
  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.title}</h1>
          <textarea
            className="form-control"
            value={text}
            id="myText"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "lightyellow" : "#e5e7e9",
              color: "black",
            }}
          ></textarea>
          <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary mx-2 my-4"
            onClick={handleDownClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-4"
            onClick={handleCopyClick}
          >
            Copy text
          </button>
          <button
            className="btn btn-primary mx-2 my-4"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            className="btn btn-primary mx-2 my-4"
            onClick={handleSpacesClick}
          >
            Remove space
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summery</h1>
        <p>
          {text !== "" ? text.split(" ").length : "0"} word and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes will be taken to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
