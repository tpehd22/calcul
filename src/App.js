import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = { //jason => object javascript
    a : null,
    b : null,
    result :0
  }

  changeValue = (e)=>{
  
    this.setState({
    a : e.target.value
   });
  }

  changeValueB = (e)=>{
    this.setState({
      b : e.target.value
    });
  }
  

  calCul = (status) =>{
    //console.log(status);
    if(status == "add"){
      this.setState({
        value : parseInt(this.state.a) + parseInt(this.state.b)
        });
    }
    else if(status == "sub"){
      this.setState({
        value : parseInt(this.state.a) - parseInt(this.state.b)
        });
    }
    else if(status == "mul"){
      this.setState({
        value : parseInt(this.state.a) * parseInt(this.state.b)
        });
    }
    else if(status == "div"){
      this.setState({
        value : parseInt(this.state.a) / parseInt(this.state.b)
        });
    }
  }
  render(){
   
    
    return(
      <div>
        <h1>계산기 만들기</h1>
        <input value = {this.state.a} onChange={this.changeValue}/>
        <br></br>
        <input value = {this.state.b} onChange = {this.changeValueB}/>
        <br></br>
        <button onClick = {this.calCul.bind(this, "add")}>더하기</button>
        <button onClick = {this.calCul.bind(this, "sub")}>빼기</button>
        <button onClick = {this.calCul.bind(this, "mul")}>곱하기</button>
        <button onClick = {this.calCul.bind(this, "div")}>나누기</button>
        <p>결과 : {this.state.value}</p>
      </div>
    );
  }
}

export default App;
