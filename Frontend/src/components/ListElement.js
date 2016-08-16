import React, {Component} from 'react';
import './ListComponent.css';

class componentName extends Component {
    render() {
        const {content,name} = this.props.item;
        return (
            <div className='list-element-container'>
                <div className='list-element-item'>
                    {content}    
                    <button onClick={this.props.handler} className='btn-delete'>Delete</button>
                </div>
                
            </div>
        );
    }
}

export default componentName;