import { useState } from "react"
import Buttons from "./Buttons"

export default function App(){

    const [lastSound, setLastSound] = useState("Drum Kit")

    return (
        <div id="drum-machine">
            <Buttons onPlay={setLastSound}></Buttons>
            <div id="display">{lastSound}</div>
        </div>
    )
}