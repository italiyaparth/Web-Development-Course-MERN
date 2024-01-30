import { useState } from "react";

export default function Counter() {

    // let [ stateVariableName, setStateVariableName ] = useState(10);
    let [ count, setCount ] = useState(0);
    console.log("Component is re-rendered");
    console.log(`count= ${count}`);     // 1 after 1st click, 2 after 2nd click

    function handleIncreaseCount() {
        // setCount(count+1);
        // setCount(count+1);  // Even if you write "setCount" method multiple times,
        // setCount(count+1);  //  this method will work only one time
        // console.log(`inside handleIncreaseCount, count= ${count}`); // 0 after 1st click, 1 after 2nd click

        setCount((currentCount) => {
            return currentCount + 1;
        });
        setCount((currentCount) => {
            return currentCount + 1;
        });
    }

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={handleIncreaseCount}>Click to Increase Count</button>
        </>
    );
}