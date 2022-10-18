import React from "react";
import { Link } from "react-router-dom";

const Render = ({ data, fetchbyId, resError }) => {
  console.log(resError);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
      }}
    >
      {data && data.length > 0
        ? data.map((item, index) => (
            <div key={index} style={{ margin: "25px", width: "100%" }}>
              <div
                style={{
                  margin: "10px",
                  boxShadow: "5px 10px 15px #EAECEE",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                <Link to={`/details/${item.idMeal}`} onClick={fetchbyId}>
                  <img
                    src={item.strMealThumb}
                    alt=''
                    style={{ width: "300px" }}
                  ></img>
                </Link>

                <p>{item.strMeal}</p>
              </div>
            </div>
          ))
        : resError}
    </div>
  );
};

export default Render;
