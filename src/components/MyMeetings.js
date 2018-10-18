import React, { Component } from 'react';
import history from './history';
import api from '../functions/api';


const EventComp = ({events}) => {
    return events.map((event)=> {
        return(<div>
            {event.title}
        </div>)
    })
}

export default class MyMeetings extends Component{
    constructor(props){
        super(props)
        if(localStorage.getItem("logged") === "false"){
            history.replace("/home")
        }
        this.state = {data:[]}
    }
    componentWillMount(){
        api.getEvents().then(data => {
            this.setState({data:data})
            console.log(data)
        })
    }
    render(){
        return(
            <EventComp events={this.state.data}/>
        )
    }
}