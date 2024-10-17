import { useReducer } from "react";
import Tree from "../components/tree";
import Water from "../components/water";

export default function Index() {
    const initialState = {
        isWatering: false,
        wateringCount: 0,
        wateringCanImg: "img/watering-can.png",
        treeImg: "img/tree_seichou01.png"
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "start_watering":
                let tree = "img/tree_seichou01.png";
                const newWateringCount = state.wateringCount + 1;
                if (newWateringCount > 15) {
                    tree = "img/tree_seichou06.png";
                } else if (newWateringCount > 12) {
                    tree = "img/tree_seichou05.png";
                } else if (newWateringCount > 9) {
                    tree = "img/tree_seichou04.png";
                } else if (newWateringCount > 6) {
                    tree = "img/tree_seichou03.png";
                } else if (newWateringCount > 3) {
                    tree = "img/tree_seichou02.png";
                }

                return {
                    ...state,
                    isWatering: true,
                    wateringCount: newWateringCount,
                    wateringCanImg: "img/watering-can02.png",
                    treeImg: tree
                };
            case "stop_watering":
                return {
                    ...state,
                    isWatering: false,
                    wateringCanImg: "img/watering-can.png"
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div className="w-full h-[100dvh] bg-[#CFD9B6] flex justify-center items-center">
                <div className="w-[60%] min-w-[390px] h-[100dvh] bg-white relative flex justify-center items-center">
                    <Water 
                        onMouseDown={() => dispatch({ type: "start_watering" })}
                        onMouseUp={() => dispatch({ type: "stop_watering" })}
                        wateringCanImg={state.wateringCanImg}
                    />
                    <Tree treeImg={state.treeImg}/>
                </div>
            </div>
        </>
    );
}
