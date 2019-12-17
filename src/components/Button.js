
import React from 'react'; 

const Button = props =>(
    <button className="toggle-button" onClick={props.click}>
      {props.ime}
</button>  
);



export default Button;
