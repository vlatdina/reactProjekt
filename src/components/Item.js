
import React from "react";
import "./BookItem.css";


const Item = ({ key ,index ,book}) => {
  return (
    <div key={key} index={index} >
      <div className="content">
 <div className="header">{book.title}</div></div>
        {book.author}

 </div>
  );



  };


export default Item;

