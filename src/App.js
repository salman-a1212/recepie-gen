import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import Search from "./components/Search";
import Render from "./components/Render";
import Details from "./components/Details";
import { Routes, Route, useLocation } from "react-router-dom";
import Reset from "./components/Reset";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [unitData, setUnitData] = useState([]);
  const [id, setID] = useState("");
  const [resError, setResError] = useState("");
  const { pathname } = useLocation();

  const getId = (id) => {
    setID(id);
  };

  useEffect(() => {
    console.log(id);
    fetchbyId();
  }, [id]);

  console.log(id);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const dataFetcher = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      console.log("response", response.data.meals);
      setData(response.data.meals);
      if (data === null || data === undefined || data === "") {
        setResError(
          `No recepies found for ${input}. Please retry with different keyword`
        );
      } else {
        setResError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(resError);

  const fetchbyId = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log("response", response.data.meals);
      setUnitData(response.data.meals);
      if (unitData === null || unitData === undefined || unitData === "") {
        setResError(
          `We are having trouble with fetching details for the recepie ${input}. Please try again later.`
        );
      } else {
        setResError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className='App'>
      {pathname === "/" ? (
        <div style={{ display: "flex", margin: "50px" }}>
          <Input input={input} handleInput={handleInput} />
          <Search dataFetcher={dataFetcher} />
          <Reset clearInput={clearInput} />
        </div>
      ) : null}

      <Routes>
        <Route
          path='/'
          element={
            <Render data={data} fetchbyId={fetchbyId} resError={resError} />
          }
        />
        <Route
          path={`/details/:id`}
          element={
            <Details
              unitData={unitData}
              getId={(id) => {
                getId(id);
              }}
              resError={resError}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
