import React from "react";

export default function Water({onMouseDown, onMouseUp, wateringCanImg}) {
    return (
        <>
            <div className="absolute top-40 right-[320px] w-[200px]" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                <img src={wateringCanImg} alt="water" />
            </div>
        </>
    )
}