import React, { Component } from 'react'

export default class testSnipt extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            name : ''
        }

        this.hello = this.hello.bind(this);

        this.setName = this.setName.bind(this);
    }

    hello(params) {
        var name = this.refs.name.value;

    }

    setName(name)
    {
        this.setState({
            name : name
        });
    }

   

    render() {
        return (
            <div>
                <h1> Hello you {this.state.name}</h1> 

                <input type="text" name="name" ref="name" />  
                {<button onClick={this.hello}>Click Me !</button>}    

                        
            </div>
        )
    }
}
