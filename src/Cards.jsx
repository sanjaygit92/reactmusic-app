import React from "react";

function Card(props)
{
    return(
      <>
        <div className="cards">
  <div className="card">
  <img src={props.imgsrc} alt="mypic" className="cardimg"/>
   <div className="cardinfo">
     <span className="cardcategory">{props.title}</span>
     <h3 className="cardtitle">{props.sname}</h3>
     <a href={props.link} target="_blank">
     <button>WATCH NOW</button></a>
   </div>
  </div>

        </div>
        </>
    );
}
export default Card;