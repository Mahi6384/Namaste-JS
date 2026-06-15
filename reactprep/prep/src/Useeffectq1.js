import { useEffect, useState } from "react";
import React from "react";

export default function Useeffectq1() {
    const [counter, setCounter] = useState(0);
    const [restart, setRestart] = useState(false);

    useEffect(() => {
        console.log("effect ran");
        const timer = setInterval(() => {
            setCounter((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [restart]);
    function handleClick() {
        setCounter(0);
        setRestart((prev) => !prev);
    }
    return (
        <div>
            <p>Question 1</p>
            <p style={{ fontSize: "12px" }}>
                A counter that automatically increments every second using
                setInterval inside useEffect. Add a restart button that clears
                the interval.
            </p>

            <div>
                <p>{counter}</p>
                <button onClick={handleClick}>Restart</button>
            </div>
        </div>
    );
}
