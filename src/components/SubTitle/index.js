import React, { useState } from "react";
import styles from "./Subtitle.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { addSubTitle } from "./../../redux/Actions";

const SubTitle = ({ setSubtitle, addsubTitle }) => {
  const [subTitle, setsubtitile] = useState("");

  const handleChange = (e) => {
    setsubtitile(e.target.value);
    if (subTitle) {
      addsubTitle(subTitle);
    }
  };
  console.log("SUBTITLE", subTitle);
  return (
    <div className={styles.subTitle}>
      <input
        type="text"
        value={subTitle}
        onChange={(e) => handleChange(e)}
        placeholder="Subtitle will Come Here"
      />
      <button className={styles.editBtn} onClick={() => setSubtitle(false)}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addsubTitle: (subTitle) => dispatch(addSubTitle(subTitle)),
  };
};

export default connect(null, mapDispatchToProps)(SubTitle);
