import React, {Component} from 'react';
import './ListComponent.css';
import ListElement from './ListElement';
class ListView extends Component {
    render() {
        
        return (
            <div className='wrapper'>
              <div className='wrapper-head'>
                Aktuelle Daten der Todo
              </div>
               {this.props.data.map((x) =>{
                  return <ListElement handler={() => this.props.handler(x.id)} 
                                key={x.id} 
                                item={x}
                          />;
               })}
               <button onClick={this.props.addItem}>ADD NEW ITEM</button>
               
            </div>
        );
    }
}

export default ListView;