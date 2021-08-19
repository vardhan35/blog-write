import React from "react";
import { connect } from "react-redux";
import { addCode } from "./../../redux/Actions";
import AceEditor from "react-ace";
import styles from "./Code.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/snippets/javascript";

function AddCode({ setAddCode, setCode }) {
  const onChange = (newValue) => {
    console.log("CODE", newValue);
    setCode(newValue);
  };
  return (
    <div className={styles.editor}>
      <h1>Add youre Code Here</h1>
      <div className={styles.container}>
        <div className={styles.containerAce}>
          <AceEditor
            placeholder="Add Your Code here..."
            mode="javascript"
            theme="twilight"
            name="blah2"
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            showLineNumbers={true}
            tabSize={16}
            onChange={onChange}
          />
        </div>
        <button className={styles.editBtn} onClick={() => setAddCode(false)}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCode: (code) => dispatch(addCode(code)),
  };
};

export default connect(null, mapDispatchToProps)(AddCode);
