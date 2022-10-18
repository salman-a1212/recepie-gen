import React from "react";

const Reset = ({ clearInput }) => {
  return (
    <div>
      <button
        type='reset'
        style={{
          padding: "5px",
          cursor: "pointer",
          margin: "0 10px",
          backgroundColor: "#AEB6BF",
          color: "#111",
          borderRadius: "5px",
        }}
        onClick={clearInput}
      >
        Clear
      </button>
    </div>
  );
};

export default Reset;
