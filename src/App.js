import React, { Component } from 'react';
import {Header, Logo} from './component/Header';
import Footer from './component/Footer';
import './App.css'
import FormPropsTextFields from './component/TextField';
import Hooks from './component/Hooks';


// className Header extends Component{
//   render(){
//     return(
//       <div classNameName='header'> 
//         <h2>header</h2>
//       </div>
//     )
//   }
// }

// className Footer extends Component{
//   render(){
//     return(
//       <div classNameName='footer'>
//         <h2>footer</h2>
//       </div>
//     )
//   }
// }
class App extends Component {
  constructor(){
    super()
    this.state={
      name:"umer ",
      email:"8743@gmail.com",
      value:""
    }
  }

  // set_email=()=>{
  //   console.log(this.state.email)
  // }

  // get_name=()=>{
  //   console.log(this.state.name)
  // }
  // set_name=()=>{
  //   this.setState({
  //     name:"ali"
  //   })
  // }

  set_name=()=>{
    this.setState({
      name:this.state.value
    })
  }


  set_value=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }


  render() {
    
    
    
    // let name = "umer";
    // let obj = [{ text: "ali" }, { text: "umer" }, { text: "zain" }, { text: "ain" }, { text: "umdeener" }];
    return (


      <div> 
        
        <Header />
        <div className='text-center'><Hooks /></div>
        <h1 classNameName='main' style={{backgroundColor:'lightblue ',fontSize:40,textAlign:"center"}}>My name is {this.state.name}</h1>
        <h3 classNameName='main' style={{backgroundColor:'lightgreen',fontSize:40,textAlign:"center"}}>My email is {this.state.email}</h3>
        {/* <button onClick={this.get_name}>getname</button>
        <button onClick={this.set_name}>setname</button> */}
       <div className='text-center '>

       {/* direct method to take input  <input type="text" name='name' onChange={(e)=>this.setState({name:e.target.value})} placeholder='enter your value' /> */}
       
       {/* on click then chane <input type="text" name='name' onChange={(e)=>this.setState({value:e.target.value})} placeholder='enter your value' /> */}
       {/* <button onClick={this.set_name}>one</button> */}

       <input className='my-2 mx-3' type="text" name='email'  onChange={(e)=>this.set_value(e)} placeholder='enter your email' />
  
       <input className='my-1' type="text" name='name' onChange={(e)=>this.set_value(e)} placeholder='enter your name' />
       </div>


        <div className='text-center'>
        <FormPropsTextFields />
 
          <button type="button" className=" mx-2 my-3 btn btn-primary">Primary</button>
          <button type="button" className="mx-2 my-3  btn  btn-danger">Danger</button>
          <button type="button" className="mx-2 my-3  btn btn-dark">Dark</button>
        </div>
        <Footer></Footer>
      </div>
      // <div>
      //   <h1>hello {name}</h1>
      //   <ul>{obj.map((item, index) => {
      //     return <li key={index}>{item.text}</li>
      //   })}</ul>
      //   <ol>
      //     <li>{obj[0].text}</li>
      //     <li>{obj[1].text}</li>
      //     <li>{obj[2].text}</li>
      //     <li>{obj[3].text}</li>
      //   </ol>
      // </div>
    )
  }
}



// function App(){
// return(
//   <div>
//     <h1>hello world</h1>
//   </div>
// )}



export default App;
