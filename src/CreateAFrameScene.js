import React from "react";
import ReactDOM from "react-dom";
import "aframe";


function CreateAFrameScene(props) {
  console.log(props.link)
  return (
    <div>
      <a-scene>
        <a-sky src={props.link} rotation="0 -90 0" />
      </a-scene>
    </div>
  );
}



export default CreateAFrameScene