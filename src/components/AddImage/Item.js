import React from "react";
import { connect } from "react-redux";
import { addImage } from "./../../redux/Actions";
import "./../../App.css";

const Item = ({ image, addImage }) => {
  const handleClick = () => {
    if (image) {
      addImage(image);
      console.log("IMAGE", image);
    }
  };

  return (
    <img className="itemImage" src={image} alt="imag" onClick={handleClick} />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (image) => dispatch(addImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
