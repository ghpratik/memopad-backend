import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
        "name": "Pratik",
        "class": "5B"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Sankalp",
                "class": "7C"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;