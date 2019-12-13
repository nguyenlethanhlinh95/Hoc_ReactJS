import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            comments : '',
            topic: ''
        }
    }
    
    handleUserName = (event) => {
        this.setState({
            username: event.target.value,        
        });
    }

    handleComment = (event) => {
        this.setState({
           comments:  event.target.value
        });
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        alert(this.state.username + ' ' + this.state.comments + ' ' + this.state.topic);
    }
   

    render() {
        return (
            <div>
                <div className="App mgt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input 
                                        type="text" 
                                        onChange={ this.handleUserName} 
                                        value={this.state.username} 
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Comment</label>
                                    <textarea className="form-control" id="exampleInputPassword1" placeholder="Password"
                                        value={this.state.comments}
                                        onChange= {this.handleComment}
                                         />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Topic</label>
                                    <select 
                                    className="form-control"
                                    value={this.state.topic}
                                    onChange={this.handleTopic}
                                    >
                                        <option value="">Chon</option>
                                        <option value="react">React</option>
                                        <option value="angular">Angular</option>
                                        <option value="vue">Vue</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        )
    }
}
