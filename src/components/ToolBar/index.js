import React from "react";
import styles from "./ToolBar.module.css";
import {
  AiOutlineHighlight,
  AiOutlineFontSize,
  AiOutlineFileImage,
  AiOutlineCode,
  AiOutlineAlignLeft,
  AiOutlineSave,
  AiOutlineEye,
} from "react-icons/ai";

const index = ({
  setParagrph,
  setAddCode,
  setAddImage,
  setSubtitle,
  setIsClick,
  isClick,
}) => {
  const handleClick = () => {
    setAddImage(true);
    setIsClick(!isClick);
  };
  return (
    <div className={styles.toolBar}>
      <button className={styles.editBtn} onClick={() => setParagrph(true)}>
        <AiOutlineAlignLeft />
      </button>
      <button className={styles.editBtn} onClick={() => setSubtitle(true)}>
        <AiOutlineFontSize />
      </button>
      <button className={styles.editBtn} onClick={handleClick}>
        <AiOutlineFileImage />
      </button>
      <button className={styles.editBtn} onClick={() => setAddCode(true)}>
        <AiOutlineCode />
      </button>
      <button className={styles.editBtn}>
        <AiOutlineHighlight />
      </button>
      <button className={styles.editBtn}>
        <AiOutlineSave />
      </button>
      <button className={styles.editBtn}>
        <AiOutlineEye />
      </button>
    </div>
  );
};

export default index;
