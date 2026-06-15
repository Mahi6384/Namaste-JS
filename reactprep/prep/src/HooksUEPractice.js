import { useEffect, useState } from "react";
export default function HooksUEPractice() {
    const [loading, setLoading] = useState(true);
    // const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [data, setData] = useState({});
    console.log("Componenet is rendered");

    //  USING EMPTY DEPENDENCY ARRAY
    // useEffect(() => {
    //     console.log("useEffect Fired");
    //     // useEffect takes a callback function as its first argument that callback is where i put the code that needs to run after react is done rendering. The second argument is an empty dependency array - which tells react to run this effect only once, when the component first mounts. So when i log inside here it alwats prints after the component log because react renders first --> paint the screen --> runs the effect
    // }, []);
    //................................................//

    //USING COUNT INSIDE DEPENDENCY ARRAY

    // useEffect(() => {
    //     console.log("count is increasing", count);
    // }, [count]);

    // cleanup function

    // "Every time count changes, useEffect re-runs and creates a new interval — but without cleanup, the old interval is never cleared. They pile up and tick faster and faster. The fix is to return a cleanup function from useEffect that calls clearInterval with the timer ID. React calls that cleanup before running the effect again — so the old interval is always cleared before a new one starts. Only one interval runs at a time."

    // useEffect(() => {
    //     console.log("Use Effect Fired");
    //     // SET INTERVAL TIMER WHERE TICK WILL BE LOGGED AFTER ONE SECOND
    //     const timer = setInterval(() => {
    //         console.log("TICK");
    //     }, 1000);
    //     // THIS IS THE CLEANUP
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [count]);

    // .//////////////////////.////////////////////. //
    // LOADING SCREEN

    // useEffect(() => {
    //     console.log("Fired");
    //     console.log(loading);
    //     setTimeout(() => {
    //         setLoading(false);
    //         setMessage("Hello Mahi");
    //     }, 2000);
    // }, []);
    // console.log(loading);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
                console.log(data);
            })
            .catch((err) => {
                setError("something went wrong");
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? <p>Loading....</p> : <p>Hello</p>}
            {/* <h1>{message}</h1> */}
            <h1>practicing UseEffect</h1>
            <p>{data.name}</p>

            {/* <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                DABA BHAII DABA {count} BAAR FIRSE
            </button> */}
        </div>
    );
}
