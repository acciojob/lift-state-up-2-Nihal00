
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputValue, setInputvalue] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>

            <div className="child">
                <h2>Child Component</h2>
                <input type="text" onInput={(e) => setInputvalue(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default App
