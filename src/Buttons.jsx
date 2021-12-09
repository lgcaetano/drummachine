import Button from "./Button"

export default function Buttons(props){
    return (
        <div id="drum-grid">
            <Button keyValue={"Q"} onPlay={props.onPlay}></Button>
            <Button keyValue={"W"} onPlay={props.onPlay}></Button>
            <Button keyValue={"E"} onPlay={props.onPlay}></Button>
            <Button keyValue={"A"} onPlay={props.onPlay}></Button>
            <Button keyValue={"S"} onPlay={props.onPlay}></Button>
            <Button keyValue={"D"} onPlay={props.onPlay}></Button>
            <Button keyValue={"Z"} onPlay={props.onPlay}></Button>
            <Button keyValue={"X"} onPlay={props.onPlay}></Button>
            <Button keyValue={"C"} onPlay={props.onPlay}></Button>
        </div>
    )
}