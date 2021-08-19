import React, { useState } from "react";
import styles from "./Paragraph.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { addParagraph } from "./../../redux/Actions";

const Paragraph = ({ setParagrph, addParagraph }) => {
  const [paragraph, setparagraph] = useState("");

  const handleChange = (e) => {
    setparagraph(e.target.value);
    if (paragraph) {
      addParagraph(paragraph);
    }
  };
  console.log("Paragraph", paragraph);
  return (
    <div className={styles.paragrph}>
      <input
        type="text"
        value={paragraph}
        onChange={(e) => handleChange(e)}
        placeholder="Quote will Come Here"
      />
      <button className={styles.editBtn} onClick={() => setParagrph(false)}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addParagraph: (paragraph) => dispatch(addParagraph(paragraph)),
  };
};

export default connect(null, mapDispatchToProps)(Paragraph);
