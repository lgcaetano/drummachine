import { useEffect, useRef, useState } from "react";


const sounds = {
      'Q':    {
      keyCode: 81,

      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
      'W':    {
      keyCode: 87,

      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
      'E':    {
      keyCode: 69,

      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
      'A':    {
      keyCode: 65,

      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
      'S':    {
      keyCode: 83,

      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
      'D':    {
      keyCode: 68,

      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
      'Z':    {
      keyCode: 90,

      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
      'X':    {
      keyCode: 88,

      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
      'C':    {
      keyCode: 67,

      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
};



export default function Button(props){

    const [clicked, setClicked] = useState(false)
    
    const info = sounds[props.keyValue]
    
    function playAudio(){

        props.onPlay(info.id)
        
        if(!audioRef.current)
            return

        if(!audioRef.current.paused){
          
          audioRef.current.pause()
        }
        audioRef.current.play()
        
    }

    useEffect(() => {
        document.addEventListener('keydown', function (e) {
            
            if (e.key.toLowerCase() === props.keyValue.toLowerCase()){

                setClicked(true)

                setTimeout(() => {
                    setClicked(false)
                }, 100)

                playAudio();
            }
        })
    }, [])
    

    const audioRef = useRef()

    const padRef = useRef()


    return (
        <button className={`drum-pad ${clicked ? "clicked" : ""}`} ref={padRef} onClick={playAudio} id={info.id}>
            {props.keyValue}
            <audio src={info.url} ref={audioRef}></audio>
        </button>
    )
}