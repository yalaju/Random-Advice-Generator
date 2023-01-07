import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import fitstimg from "./images/pattern-divider-mobile.svg";
import secondimg from "./images/icon-dice.svg";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let receivedData = await response.json();
      console.log(receivedData);
      setData(receivedData);
      setLoading(false);
    };
    fetchData("https://api.adviceslip.com/advice");
  }, []);
  return (
    <div className="App">
      {loading ? (
        <p>Loading.............</p>
      ) : (
        <div className="content">
          <div className="ptagnum">
            <p>ADVICE {data.slip.id}</p>
          </div>
          <div className="ptagcontent">
            <p>"{data.slip.advice}"</p>
          </div>
          <div className="sec1img">
            <img src={fitstimg} alt="" />
          </div>
          <div className="sec2img">
            <img src={secondimg} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
