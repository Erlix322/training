import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchJson} from './backend/Backend';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: null
    }
  }

  
  componentDidMount() {
    fetchJson('/user').then((todos) =>
        this.setState({data:todos})
    );
  }
  
  render() {
    var data = null;
    if(this.state.data === null) data = <p> waiting for data </p>;
    else data = (this.state.data.map((x) => {
      return <li key={x.id} >{x.first}</li>
    }));
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Data</h1>
        {data}
      </div>
    );
  }
}

export default App;
