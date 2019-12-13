import React, { Component } from 'react';
import Pro from './pro';

export default class test extends Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: 'linh',
        age: 24
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value    
        });

        
    }

    handleSubmit(event){
        alert(this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <Pro name="Linh 123" age="24"></Pro>

                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChangeName} />
                </label>
                <input type="submit" value="Submit" />
                <p>{this.state.name}</p>

               
                
                </form>
            </div>
        )
    }
}
