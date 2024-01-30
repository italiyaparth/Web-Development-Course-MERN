import { useState } from "react";

export default function LikeButton() {

    let [ clicksCount, setClicksCount ] = useState(0);
    let [ isLiked, setIsLiked ] = useState(false);

    function handleToggleLike() {
        setClicksCount(++clicksCount);
        setIsLiked(!isLiked);
    }

    return (
        <>
            <h3>Toggle Like Count: {clicksCount}</h3>
            <p onClick={handleToggleLike}>
                {isLiked ?
                    (<i className="fa-solid fa-heart fa-2xl" style={{color: "red"}}></i>)
                    :
                    (<i className="fa-regular fa-heart fa-2xl" style={{color: "red"}}></i>)
                }
            </p>
        </>
    );
}