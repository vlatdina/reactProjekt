
import React from 'react'; 

import styles from './Main.module.css';
import Library from './Library';

class Popis extends React.Component {
     
    

    render (){
         return (
           <main className={styles.containerFlexColumn}>
            <Library books={this.props.sbooks}></Library>
           
       </main>
    );
  }
  
}



export default Popis; 