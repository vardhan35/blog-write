import React, { useState } from "react";
import { connect } from "react-redux";
import { addTitle } from "./../../redux/Actions";
import styles from "./Title.module.css";

const Title = ({ addTitle }) => {
  const [title, setTitile] = useState("");

  const handleChange = (e) => {
    setTitile(e.target.value);
    if (title) {
      addTitle(title);
    }
  };
  console.log("from title", title);
  return (
    <div className={styles.title}>
      <input
        type="text"
        value={title}
        onChange={(e) => handleChange(e)}
        placeholder="What's the Awesome Title ?"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(addTitle(title)),
  };
};

export default connect(null, mapDispatchToProps)(Title);
