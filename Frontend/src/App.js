import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchJson} from './backend/Backend';
import ListContainer from './components/ListContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: null
    }
  }
  
  componentDidMount() {
    fetchJson('/todo').then((todos) =>
        this.setState({data:todos})
    ).catch((e) => {
      console.log("huhu"+e);
    })
  }
  
  render() {
    var data = null;
    if(this.state.data === null) data = <p> waiting for data </p>;
    else data = <ListContainer data={this.state.data}/>;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo as a Service</h2>
        </div>       
        {data}
      
      </div>
     
    );
  }
}

export default App;
