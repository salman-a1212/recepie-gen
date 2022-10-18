import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "./Comment";

const Details = ({ getId, unitData, resError }) => {
  const { id } = useParams();
  console.log(id, "id");

  useEffect(() => {
    getId(id);
  });

  return (
    <div>
      {unitData && unitData.length > 0 ? (
        <div style={{ margin: "20px 50px" }}>
          <Link to={"/"}>
            <button
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                backgroundColor: "#E59866",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Back
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      {unitData && unitData.length > 0
        ? unitData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "25px",
              }}
            >
              <div
                style={{
                  margin: "25px",
                }}
              >
                <img
                  src={item.strMealThumb}
                  alt=''
                  style={{ width: "300px" }}
                ></img>
              </div>
              <div>
                <p>
                  <i>Dish: </i>
                  <strong>{item.strMeal}</strong>
                </p>
                <p>
                  <i>Cuisine: </i>
                  <strong>{item.strArea}</strong>
                </p>
                <p>
                  <i>Type: </i>
                  <strong>{item.strCategory}</strong>
                </p>
                <p>
                  <b>Instructions: </b>
                  <i>{item.strInstructions}</i>
                </p>
                <div style={{ border: "1px solid #ccc", margin: "20px 0" }}>
                  <h4>Ingredients:</h4>
                  <ul
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto",
                      gridGap: "10px",
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <i>
                        {item.strIngredient1 === "" ||
                        item.strIngredient1 === null ||
                        item.strIngredient1 === undefined
                          ? ""
                          : `${item.strIngredient1}:`}
                      </i>{" "}
                      {item.strMeasure1}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient2 === "" ||
                        item.strIngredient2 === null ||
                        item.strIngredient2 === undefined
                          ? ""
                          : `${item.strIngredient2}:`}
                      </i>{" "}
                      {item.strMeasure2}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient3 === "" ||
                        item.strIngredient3 === null ||
                        item.strIngredient3 === undefined
                          ? ""
                          : `${item.strIngredient3}:`}
                      </i>{" "}
                      {item.strMeasure3}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient4 === "" ||
                        item.strIngredient4 === null ||
                        item.strIngredient4 === undefined
                          ? ""
                          : `${item.strIngredient4}:`}
                      </i>{" "}
                      {item.strMeasure4}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient5 === "" ||
                        item.strIngredient5 === null ||
                        item.strIngredient5 === undefined
                          ? ""
                          : `${item.strIngredient5}:`}
                      </i>{" "}
                      {item.strMeasure5}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient6 === "" ||
                        item.strIngredient6 === null ||
                        item.strIngredient6 === undefined
                          ? ""
                          : `${item.strIngredient6}:`}
                      </i>{" "}
                      {item.strMeasure6}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient7 === "" ||
                        item.strIngredient7 === null ||
                        item.strIngredient7 === undefined
                          ? ""
                          : `${item.strIngredient7}:`}
                      </i>{" "}
                      {item.strMeasure7}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient8 === "" ||
                        item.strIngredient8 === null ||
                        item.strIngredient8 === undefined
                          ? ""
                          : `${item.strIngredient8}:`}
                      </i>{" "}
                      {item.strMeasure8}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient9 === "" ||
                        item.strIngredient9 === null ||
                        item.strIngredient9 === undefined
                          ? ""
                          : `${item.strIngredient9}:`}
                      </i>{" "}
                      {item.strMeasure9}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient10 === "" ||
                        item.strIngredient10 === null ||
                        item.strIngredient10 === undefined
                          ? ""
                          : `${item.strIngredient10}:`}
                      </i>{" "}
                      {item.strMeasure10}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient11 === "" ||
                        item.strIngredient11 === null ||
                        item.strIngredient11 === undefined
                          ? ""
                          : `${item.strIngredient11}:`}
                      </i>{" "}
                      {item.strMeasure11}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient12 === "" ||
                        item.strIngredient12 === null ||
                        item.strIngredient12 === undefined
                          ? ""
                          : `${item.strIngredient12}:`}
                      </i>{" "}
                      {item.strMeasure12}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient13 === "" ||
                        item.strIngredient13 === null ||
                        item.strIngredient13 === undefined
                          ? ""
                          : `${item.strIngredient13}:`}
                      </i>{" "}
                      {item.strMeasure13}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient14 === "" ||
                        item.strIngredient14 === null ||
                        item.strIngredient14 === undefined
                          ? ""
                          : `${item.strIngredient14}:`}
                      </i>{" "}
                      {item.strMeasure14}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient15 === "" ||
                        item.strIngredient15 === null ||
                        item.strIngredient15 === undefined
                          ? ""
                          : `${item.strIngredient15}:`}
                      </i>{" "}
                      {item.strMeasure15}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient16 === "" ||
                        item.strIngredient16 === null ||
                        item.strIngredient16 === undefined
                          ? ""
                          : `${item.strIngredient16}:`}
                      </i>{" "}
                      {item.strMeasure16}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient17 === "" ||
                        item.strIngredient17 === null ||
                        item.strIngredient17 === undefined
                          ? ""
                          : `${item.strIngredient17}:`}
                      </i>{" "}
                      {item.strMeasure17}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient18 === "" ||
                        item.strIngredient18 === null ||
                        item.strIngredient18 === undefined
                          ? ""
                          : `${item.strIngredient18}:`}
                      </i>{" "}
                      {item.strMeasure18}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient19 === "" ||
                        item.strIngredient19 === null ||
                        item.strIngredient19 === undefined
                          ? ""
                          : `${item.strIngredient19}:`}
                      </i>{" "}
                      {item.strMeasure19}
                    </li>
                    <li>
                      <i>
                        {item.strIngredient20 === "" ||
                        item.strIngredient20 === null ||
                        item.strIngredient20 === undefined
                          ? ""
                          : `${item.strIngredient20}:`}
                      </i>{" "}
                      {item.strMeasure20}
                    </li>
                  </ul>
                </div>
                <iframe
                  src={item.strYoutube.replace("watch?v=", "embed/")}
                  frameBorder='0'
                  width='680'
                  height='400'
                  title='embed'
                ></iframe>
                <Comment />
              </div>
            </div>
          ))
        : resError}
    </div>
  );
};

export default Details;
