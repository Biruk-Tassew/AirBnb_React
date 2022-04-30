import React from "react";
import nature from "../images/im.webp"

export default function Hero(){
    return(
        <div className="div--hero">
            <img className="div--hero--image" src={nature}></img>
            <h2 className="div--hero--h2">Online Experiences</h2>
            <p className="div--hero--para">Eu sit exercitation consequat sunt enim irure est consequat reprehenderit pariatur dolor exercitation adipisicing.</p>
        </div>
    )
}