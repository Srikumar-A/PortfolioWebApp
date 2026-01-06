"use client"

import {useTypewriter,Cursor} from "react-simple-typewriter";

export default function TypedText(){
    const [text]=useTypewriter({
        words:[
            "I build scalable applications.\nI work with ML, DL and computer vision systems.\nThis portfolio auto updates from GitHub."
        ],
        loop:false,
        typeSpeed:50,
        deleteSpeed:0,
        delaySpeed:2000
    })

    return(
        <p className="text-gray-400 text-lg max-w-xl">
            {text}
            <Cursor cursorStyle=">" />
        </p>
    )
}