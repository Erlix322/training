import React, {Component} from 'react';
import ListView from './ListView';
import './ListComponent.css';
import {sendJson} from '../backend/Backend';
import ListAddElement from './ListAddElement';
/*
*   ListContainer repräsentiert einen StateContainer
*   für die Listenkomponente
*   Zu verwaltende Zustände:
*                           -> data : list
*                           -> isDetail   : number
*
*   
*/
class ListContainer extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data,
            isDetail : null,
            addView:false
        }
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.returnHandler = this.returnHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
        
    deleteHandler(id){       
        sendJson('post','/delete',{id:id}).then((todos) =>
        this.setState({data:todos})
        );
    }

    addHandler(){
        this.setState({addView:true})        
        console.log("something to add");
    }

    submitHandler(todo){  
        sendJson('post','/todo',{id:Date.now(),title:todo,content:todo}).then((todos)=> {
            this.setState({data:todos})
        });
        this.setState({addView:false});      
        console.log(todo);
    }

    returnHandler(){
        this.setState({addView:false});
    }

    render() { 
        var somethingToRender;
        var addView;
        if(this.state.isDetail === null) somethingToRender = <ListView addItem={this.addHandler} handler={this.deleteHandler} data={this.state.data}/>;
        if(this.state.addView === true) somethingToRender = <ListAddElement submit={this.submitHandler} returnHandler={this.returnHandler} />;     
        return (
            <div>
                <div className="list-container">
                    {somethingToRender}
                </div>
                {/*<div>
                {addView}
                </div>*/}
            </div>
        );
    }
}

export default ListContainer;