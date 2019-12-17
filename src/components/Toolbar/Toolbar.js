
import React from 'react'; 

import './Toolbar.css'; 
import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import Button from  '../Button' ;      


class Toolbar extends React.Component{
        state=this.props.state;
        

    
    render() {
 return(
    <header className ="toolbar">
         <nav className="toolbar__navigation">

<div> <DrawerToggleButton click={this.props.drawerClickHandler}/>  </div>
 <div className="toolbar__logo">< a href ="/">Bookman</a> </div>  
       <div className="spcer" ></div>
     
     <div className= "toolbar_navigation_items">
         <ul> 
             <li> <Button click={this.props.clickHandler} ime={"Pretraživanje"}></Button> </li>
             <li> <Button click={this.props.clickHandler2} ime={"Home"}></Button></li>
             <li> <Button click={this.props.clickHandler1} ime={"Moja knjižnica"}></Button> </li> 
             </ul>
 </div>
     </nav>

    </header>

       )

}
}
export default Toolbar; 
