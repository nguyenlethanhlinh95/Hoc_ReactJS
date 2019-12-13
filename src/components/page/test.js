import React from 'react';

class Test extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            color: 'red',
            fontSize : 12
        };

        this.onSetColor = this.onSetColor.bind(this);
    }

    onSetColor(params)
    {
        this.setState({
            color: params
        });
    }

  render() {
    return (
        <div className="">
            <h1>Hello world !</h1>

            <label htmlFor="" >Name</label>
            <input type="text" name="" id="" ref="name" />

            <button onClick={ this.getName }>Click me</button>
        </div>
    );
  }
}

export default Test;