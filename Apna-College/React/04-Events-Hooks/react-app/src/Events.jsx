function handleClickForHello() {
    console.log("Hello!");
}

function handleClickForBye() {
    console.log("Bye!");
}

function handleMouseOver() {
    console.log("Mouse Hovered!");
}

function handleDoubleClick() {
    console.log("Double Clicked!");
}

export default function Events() {
    return (
        <>
            <button onClick={handleClickForHello}>Click Me! hello</button>
            <p onClick={handleClickForBye}>Click Me! bye</p>

            <h3 onMouseOver={handleMouseOver}>Hover the Mouse</h3>
            <button onDoubleClick={handleDoubleClick}>Double Click Me!</button>
        </>
    );
}