import React from "react";

const Input = ({ input, handleInput }) => {
  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleInput}
        style={{
          padding: "5px",
        }}
      />
    </div>
  );
};

export default Input;
