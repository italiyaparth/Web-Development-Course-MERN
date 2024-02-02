import { useState } from "react";

export default function LudoBoard() {

    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [array, setArray] = useState([]);

    let handleBlueMove = () => {
        setMoves((previousMoves) => {
            return {...previousMoves, blue: previousMoves.blue + 1};
        });

        setArray((previousArray) => {
            return [...previousArray, "blue moves"];
        });
    };

    let handleRedMove = () => {
        setMoves((previousMoves) => {
            return {...previousMoves, red: previousMoves.red + 1};
        });

        setArray((previousArray) => {
            return [...previousArray, "red moves"];
        });
    };

    return (
        <>
            <h2>Lodo Board Game</h2>
            <p>{array}</p>
            <div className="board">

                <p>Blue Moves = {moves.blue}</p>
                <button onClick={handleBlueMove} style={{backgroundColor: "blue", color: "white"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={handleRedMove} style={{backgroundColor: "red", color: "white"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green", color: "white"}}>+1</button>

            </div>
        </>
    );
}