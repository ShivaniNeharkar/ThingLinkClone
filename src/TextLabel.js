// TextLabel.js

import React, { useState } from 'react';
import './TextLabel.css';

const TextLabel = ({ onClose }) => {
  const [coordinates, setCoordinates] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color: white
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000'); // Default color: black

  const handleCoordinatesChange = (e) => {
    setCoordinates(e.target.value);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any actions you need with the form data
    console.log('Form submitted with data:', {
      coordinates,
      backgroundColor,
      text,
      textColor,
    });

    // Close the pop-up
    onClose();
  };

  return (
    <div className="text-label-popup">
      <div className="text-label-content">
        <div className="close-icon" onClick={onClose}>
          &#10006;
        </div>
        <form className="text-label-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="coordinates">Coordinates:</label>
            <input
              type="text"
              id="coordinates"
              value={coordinates}
              onChange={handleCoordinatesChange}
              placeholder="Enter coordinates"
            />
          </div>

          <div className="form-group">
            <label htmlFor="backgroundColor">Background Color:</label>
            <select
              id="backgroundColor"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            >
              <option value="#000000">Black</option>
              <option value="#ffffff">White</option>
              <option value="#800080">Purple</option>
              <option value="#008000">Green</option>
              <option value="#000080">Navy</option>
              <option value="#ffd700">Yellow</option>
              <option value="#c71585">Pink</option>
              <option value="#ff0000">Red</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <textarea
              id="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text"
              rows="5"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="textColor">Text Color:</label>
            <select
              id="textColor"
              value={textColor}
              onChange={handleTextColorChange}
            >
              <option value="#000000">Black</option>
              <option value="#ffffff">White</option>
              <option value="#800080">Purple</option>
              <option value="#008000">Green</option>
              <option value="#000080">Navy</option>
              <option value="#ffd700">Yellow</option>
              <option value="#c71585">Pink</option>
              <option value="#ff0000">Red</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TextLabel;
