import React from "react";
import "../App.css"
import { FaStar } from "react-icons/fa";

export default function Lower(props){
    let badgeText 
    if(props.item.location === "o"){
        badgeText = "ONLINE"
        
    }else if(props.item.openSpot === "0"){
        badgeText = "SOLD OUT"
    }
    return(
        <div className="div--lower">
                {badgeText && <div className="div--lower--badge">{ badgeText }</div>}
                <img className="div--lower--img" src={ props.item.img }></img>
                <div className="div--lower--inner--text">
                    <p className="div--lower--para"><FaStar className="FaStar"/> { props.item.rate }<span className="div--span"> { props.item.code }</span></p>
                    <p className="div--lower--para"> { props.item.disc }</p>
                    <p className="div--lower--para">From { props.item.price }/person</p>
                </div> 
        
        </div>
    )
}