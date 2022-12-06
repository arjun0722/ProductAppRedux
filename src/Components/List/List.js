import React, { useEffect, useState } from "react";
import "./List.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const List = () => {
  const [movieList, setMovieList] = useState([]);

  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setMovieList(data.products));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">Products</h2>
      <div className="list__cards">
        <Card movies={movieList} />
      </div>
    </div>
  );
};

export default List;
