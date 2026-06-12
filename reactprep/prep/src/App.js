import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Comp1 from "./Comp1";
import { useState } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={() => setCount(count - 1)}>-</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }

// function InputBox() {
//     const [text, setText] = useState("");

//     function handleChange(event) {
//         setText(event.target.value);
//     }
//     const remaining = 300 - text.length;
//     const countercolor = remaining < 20 ? "red" : "black";
//     return (
//         <>
//             <textarea
//                 style={{ height: "300px", width: "300px", marginTop: "30px" }}
//                 value={text}
//                 placeholder="Start"
//                 onChange={handleChange}
//             />
//             <p style={{ color: countercolor }}>remaining char = {remaining}</p>
//         </>
//     );
// }

function Toggle() {
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handleClick}>
                {show ? "Hide the Secret" : "Show the Secret"}
            </button>
            {/* <p> {show ? "HELLO" : ""}</p> */}
            {show && <p>Hello</p>}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            {/* <h1>Ehjkbfh</h1> */}
            {/* <Comp1 name="Mahi" age={[1, 2, 5]} /> */}
            {/* <Counter /> */}
            {/* <InputBox /> */}
            <Toggle />
        </div>
    );
}

export default App;
