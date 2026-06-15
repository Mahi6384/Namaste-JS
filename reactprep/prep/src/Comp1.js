import React from "react";
export default function Comp1(props) {
    {
        console.log(props);
        console.log(typeof props.age);
    }
    return (
        <div>
            <h1>Name : {props.name}</h1>
            {/* {props.age.map((item) => (
                <p>{item}</p>
            ))} */}
            <h1>Age: {props.age[0]}</h1>
        </div>
    );
}
