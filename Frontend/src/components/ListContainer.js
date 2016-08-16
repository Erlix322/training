import React, {Component} from 'react';
import ListView from './ListView';
import './ListComponent.css';
import {sendJson} from '../backend/Backend';
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
            isDetail : null
        }
        this.deleteHandler = this.deleteHandler.bind(this);
    }
        
    deleteHandler(id){
       
        sendJson('post','/delete',{id:id}).then((todos) =>
        this.setState({data:todos})
        );
    }

    render() { 
        var somethingToRender;
        if(this.state.isDetail === null) somethingToRender = <ListView handler={this.deleteHandler} data={this.state.data}/>;     
        return (
            <div>
              {somethingToRender}
            </div>
        );
    }
}

export default ListContainer;