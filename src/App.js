import {useState, useEffect} from "react";

function App() {


  useEffect(async () => {
    try{
      const response = await fetch(j);
      const data = await response.json();
      console.log({data});
    }
  },[]);

  return (
    <div className="App">
        Hello
    </div>
  );
}

export default App;
