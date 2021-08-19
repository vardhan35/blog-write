import React, { useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./../../App.css";

const Image = ({ isClick }) => {
  const [image, setImage] = useState("");
  const [result, setResults] = useState([]);

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  const handleClick = () => {
    console.log(image);
    const id = "sMvfVF3jzSaomCoebE8lub7yudpeOtvdTAqLUHzUF7I";
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      id;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setImage("");
  };

  return (
    <div className={isClick ? "hideImage" : "image"}>
      <h1 className="imageTitle">Search for Image</h1>
      <div className="searchBar">
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Search for Image..."
        />
        <button type="Submit" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="image-list">
        {result.map((img) => (
          <Item image={img.urls.small} key={img.id} />
        ))}
      </div>
    </div>
  );
};

export default Image;
