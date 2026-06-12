import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Comp1 from "./Comp1";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function InputBox() {
    return <input style = {{width:'200px', height:100px}} placeholder="Start Typing"></input>;
}
function App() {
    return (
        <div className="App">
            <h1>Ehjkbfh</h1>
            <Comp1 name="Mahi" age={[1, 2, 5]} />
            <Counter />
        </div>
    );
}

export default App;
