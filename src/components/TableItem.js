import React, {Component} from "react"

export default class TableItem extends Component {
    render(){
        return(<div>
            <h2>{`${this.props.response.name} | ${this.props.response.response}`}</h2>
        </div>)
    }
}