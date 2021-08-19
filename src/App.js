import "./App.css";
import React, { useState } from "react";
import ToolBar from "./components/ToolBar";
import Title from "./components/Title";
// comps conditional
import Paragrph from "./components/Paragraph";
import SubTitle from "./components/SubTitle";
import AddImage from "./components/AddImage";
import AddCode from "./components/AddCode";

function App() {
  const [paragrph, setParagrph] = useState(false);
  const [subtitle, setSubtitle] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [addCode, setAddCode] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="App">
      <Title />
      <div className="blog-content">
        {paragrph && <Paragrph setParagrph={setParagrph} />}
        {subtitle && <SubTitle setSubtitle={setSubtitle} />}
        {addImage && <AddImage isClick={isClick} />}
        {addCode && <AddCode setAddCode={setAddCode} />}
      </div>
      <ToolBar
        isClick={isClick}
        setIsClick={setIsClick}
        setParagrph={setParagrph}
        setAddCode={setAddCode}
        setSubtitle={setSubtitle}
        setAddImage={setAddImage}
      />
    </div>
  );
}

export default App;
