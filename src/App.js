import './App.css';
import React, {useState, useEffect} from "react";
import JokowiKgeat from './assets/jokowi-kaget.gif'
function App() {

  const [text, setText] = useState("")
  const [showImage, setShowImage] = useState(false);

  useEffect (() => {
      text == "jokowi" ? setShowImage(true) : setShowImage(false);
  }, [text])

  return (
    <div className="App">
    <h1>Live Typing</h1>
      <header className="App-header">
      {showImage ? (
          <img src={JokowiKgeat} className="JokowiKgeat" alt="img" />
        ) : (
          ""
          )
      }
        <h5>{text}</h5>
        <input type="text" className="text" placeholder="Ketik disini" onChange={(typing) => setText (typing.target.value)}/>
        <br/>
        <small>*try to type 'jokowi' 😏</small>
      </header>
    </div>
  );
}

export default App;
