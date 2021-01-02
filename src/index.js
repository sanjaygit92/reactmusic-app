import React from "react";
import ReactDOM from "react-dom";
import Card   from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
 
function ncard(put)
{
   return(

      <Card 
     key={put.id}
      imgsrc={put.imgsrc}
      title={put.title}
      sname={put.sname}
      link={put.link}
   />

   )
}
 

ReactDOM.render(

  <>
  <h1 className="heading">Gallery of top bollywood songs</h1>
{Sdata.map(ncard)};



   </>,
  document.getElementById("root")  
);
