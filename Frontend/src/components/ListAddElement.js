import React, {Component} from 'react';

class ListAddElement extends Component {
    constructor(){
        super();
        this.state = {
            todo:null
        }
    }

    onInputChange(event){
        this.setState({todo:event.target.value});
        console.log(this.state.todo);
    }

    failedEntry(){
        this.setState({failedEntry:"Please enter something"});
    }
    render() {
        return (
            <div>
                    <div><label>Add a new Todo</label></div>
                    <h3>{this.state.failedEntry}</h3>
                    <input type="text" value={this.state.todo} onChange={(e) => this.onInputChange(e)} ></input>
                    <button onClick={this.state.todo ? () =>this.props.submit(this.state.todo) : ()=>this.failedEntry()}>SUBMIT</button>
                    <button onClick={this.props.returnHandler}>Go Back</button>                
            </div>
        );
    }
}

export default ListAddElement;