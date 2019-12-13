import React from 'react';
import Greate from '../page/greate';

class test_refs extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      name : 'linh',
      age : 24
    }  

    this.getName = this.getName.bind(this);
  }

  // getName = () => {
  //   var data = this.refs.name.value;
  //   alert(data);
  // }

  getName()
  {
    alert(this.refs.name.value);
  }

  render() {
    return (
        <div className="">
            <h1>Hello world a!</h1>

            <label htmlFor="" >Name</label>
            <input type="text" name="" id="" ref="name" />

            <button onClick={ this.getName }>Click me</button>

            <p id="a">test</p>

            <Greate name="abc" ></Greate>
            <Greate name="abcd"></Greate>
        </div>
    );
  }
}

export default test_refs;