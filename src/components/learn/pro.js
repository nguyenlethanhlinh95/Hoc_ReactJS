import React, { Component } from 'react'

export default class Pro extends Component {
    render() {
        return (
            <div>
                <div className="">Name: {this.props.name}</div>
                <div className="">Age: {this.props.age}</div>
            </div>
        )
    }
}
