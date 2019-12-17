import React from "react";
import axios from "axios";



import Sidebar from "./Sidebar"; 
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Main from "./Main"; 
import "./App.css";
import Backdrop from "./Backdrop/Backdrop"; 
import Library from './Library';





class App extends React.Component {
  state = { books: [], selectedBook: null, favorites:[] , isClicked:false,
                sideDrawerOpen: false ,br:'0', sbooks:[]};

  
     drawerToggleClickHandler = () => {
       this.setState((prevState)=>{return{sideDrawerOpen: !prevState.sideDrawerOpen};});
};

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

    clickHandler = () => {
      this.setState({br:'3'}); 
          console.log(this.state);

}
     
   clickHandler1 =() => {
  this.setState({br:'1'}); 
      console.log(this.state);

}

onLibraryHandler =async() => {

  const response =await axios.get("http://localhost:3001/books"); 

      this.setState({sbooks:response.data});
      console.log(response.data);
      this.setState({br:9});

      


};      

  onTermSubmit = async term => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      { params: { q: term, key: "AIzaSyAZfPLyry2M4w1eOOLIBuWAiOU2ybNoNao" } }
    );

    console.log(term);
    this.setState({ books: response.data.items});
    console.log(response.data.items);
  };

  onBookSelect = book => {                                     //onBook SElect - tu smo stavili 
    console.log("From the App", book); 
    this.setState({selectedBook: book});
  };



   onHeartClick = book =>{
    this.state.favorites.push(book);
    console.log("Iz App komponente ",book); 
    console.log(this.state.favorites.length);

    axios.post('http://localhost:3001/books', {
      id: book.volumeInfo.id ,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
     
  }).then(resp => {
      console.log(resp.data);
  }).catch(error => {
      console.log(error);
  });   
     
   };

   
   deleteItem = index => {
    this.setState(prevState => ({
      favorites: [
        ...prevState.favorites.slice(0, index),  //
        ...prevState.favorites.slice(index + 1)  //krene od indexa dalje -index ne dira
      ]
      
    }));
  };

  render() {
       let sideDrawer;
       let backdrop; 
       let main;
       let div;
        let libr; 


        if (this.state.sideDrawerOpen){
          sideDrawer=<SideDrawer/> ;
           backdrop=<Backdrop click={this.backdropClickHandler}/> ; 
        }


        if(this.state.br==='1'){
         

          this.onLibraryHandler();
          
           libr= <Library sbooks={this.state.sbooks}/>
        };
        if(this.state.br==='1'){ 
           libr= <Library sbooks={this.state.sbooks}/>
        };


    if(this.state.br==='3')
           {
                main = <div className="container">

                <Main state={this.state} onFormSubmit={this.onTermSubmit} onBookSelect={this.onBookSelect} books={this.state.books} onHeartClick={this.onHeartClick} isClicked={this.state.isClicked}/>I have{" "} 
                {this.state.books.length} books.
              
                <Sidebar favorites ={this.state.favorites} onBookSelect={this.onBookSelect} onDelete={this.deleteItem}/>
              
                  I have {" "}{this.state.favorites.length} favorita.  
                </div>  ;  
                
               div = <div>{this.state.sbooks}</div>;   
           }

    return (
        <div className="app-clasa">
         <Toolbar drawerClickHandler= {this.drawerToggleClickHandler} state={this.state} clickHandler={this.clickHandler} clickHandler1={this.clickHandler1} />
               {sideDrawer}
               {backdrop}
                {main}
                {div}
                {libr}
                
        </div>

          );
    }

    
      
          
  
}


export default App;
