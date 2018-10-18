import React, { Component } from 'react';
import api from '../functions/api';
const {getEvents} = api
import {formatEvent, isInFuture, parseEvents} from '../functions/utils'
import MentorHomeEvents from '../components/MentorHomeEvents'

export default class MentorHome extends Component{
    constructor(){
        this.state = {upcomingEvents: [], numberOfEventsAttended:''}
    }
    componentDidMount(){
        const allEvents = getEvents.then((events)=> {
            return events.map(formatEvent)
        });
        const {upcomingEvents, numberOfEventsAttended} = parseEvents(allEvents)
        this.setState({upcomingEvents, numberOfEventsAttended})
    }
    render(){
        return(<div>
            MentorHomeEvents(this.state)
        </div>)
    }
}