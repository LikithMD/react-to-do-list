import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onEntered} type="text" value={props.textValue} />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
