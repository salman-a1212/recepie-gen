import React from "react";

const Search = ({ dataFetcher }) => {
  return (
    <div>
      <button
        style={{
          padding: "5px",
          cursor: "pointer",
          backgroundColor: "#CD5C5C",
          color: "#fff",
          borderRadius: "0 5px 5px 0px",
        }}
        onClick={dataFetcher}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
