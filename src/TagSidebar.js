// TagSidebar.js

import React, { useState } from 'react';
import './TagSidebar.css';
import TextLabel from './TextLabel';
// import GetCoordinates from './GetCoordinates';


const TagSidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showAddTagOptions, setShowAddTagOptions] = useState(false);
  const [showTextLabel, setShowTextLabel] = useState(false);
  // const [showCordinates, setshowCordinates] = useState(false);


  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setShowAddTagOptions(false);
    setShowTextLabel(false);
    // setshowCordinates(false);

  };

  const handleAddTagClick = () => {
    setShowAddTagOptions(true);
    setShowTextLabel(false);
    // setshowCordinates(false);

  };

  const handleTextLabelClick = () => {
    console.log('Text Label button clicked');
    setShowTextLabel(true);
    setShowAddTagOptions(false);
    // setshowCordinates(false);

  };

  // const handleTransitClick = () => {
  //   console.log('Transit button clicked');
  //   setshowCordinates(true);
  //   setShowAddTagOptions(false);
  //   setShowTextLabel(false);
  // };

  const handleDoneClick = () => {
    console.log('Done button clicked');
  };

  return (
    <div className={`container ${sidebarVisible ? 'sidebar-visible' : ''}`}>
      <div className="toggle-button" onClick={handleToggleSidebar}>
        ☰
      </div>

      {sidebarVisible && (
        <div className="sidebar">
          <div className="close-icon" onClick={handleToggleSidebar}>
            &#10006;
          </div>

          {!showAddTagOptions && (
            <>
              <button className="sidebar-button" onClick={handleAddTagClick}>
                <span className="plus-icon"></span> Add Tag
              </button>
              <button className="sidebar-button" onClick={handleDoneClick}>
                <span className="tick-icon"></span> Done
              </button>
            </>
          )}

          {showAddTagOptions && (
            <>
              <button className="sidebar-button" onClick={handleTextLabelClick}>
                Text Label
              </button>
              {/* <button className="sidebar-button" onClick={handleTransitClick}>
                Get Coordinates
              </button> */}
            </>
          )}
        </div>
      )}
      {showTextLabel && <TextLabel onClose={() => setShowTextLabel(false)} />}
      {/* {showCordinates && <GetCoordinates onClose={() => setshowCordinates(false)} />} */}

    </div>
  );
};

export default TagSidebar;

