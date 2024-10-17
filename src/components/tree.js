import React from "react";

export default function Tree({treeImg}) {
    return (
        <>
            <div className="w-[200px]">
                <img src={treeImg} alt="tree" />
            </div>
        </>
    )
}