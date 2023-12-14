import React, { useState } from 'react';
import CreateAFrameScene from './CreateAFrameScene';
import './AFrame360Viewer.css'; // Import the CSS file
import TagSidebar from './TagSidebar';

const AFrame360Viewer = () => {
  const [photoLink, setPhotoLink] = useState('');
  const [FLAG, setFLAG] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photoLink) {
      setFLAG(true);
      setIsSidebarOpen(true);
    }
  };

  const handleReset = () => {
    setPhotoLink('');
  };

  const openInstructionsPopup = () => {
    const popupMessage =
      "Step 1: Click OK\n" +
      "Step 2: Upload Picture and copy the 'Direct Link'\n" +
      "Step 3: Paste it in 'Enter 360-Degree Photo Link':";
    alert(popupMessage);
  };

  return (
    <div className="aframe-container">
      <h1>360-Degree Photo Viewer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="photoLink">Enter 360-Degree Photo Link:</label>
        <input
          type="text"
          id="photoLink"
          name="photoLink"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <br/>
        <a
          href="https://postimages.org/"
          target="_blank"
          className="button-link"
        >
          <button type="button" onClick={openInstructionsPopup}>
            Image from Laptop
          </button>
        </a>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {FLAG && <CreateAFrameScene link={photoLink} />}
      {/* <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button> */}
      {FLAG && <CreateAFrameScene link={photoLink} />}
      {FLAG && <TagSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />}       
    
    </div>
  );
};

export default AFrame360Viewer;
