import React from 'react';
import Item from './Item';
import './Main.module.css';

const Library = ({ sbooks }) => {         
    const renderedList = sbooks.map((book, index) => { return <Item key={index} book={book} />  });
    

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default Library; 

 



