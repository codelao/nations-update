import React, {Component} from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import history from './history'
import { Button } from 'react-bootstrap';
import api from '../functions/api';
import {convertDateToMoment, isInFuture, formatEvent} from '../functions/utils';

const localizer = BigCalendar.momentLocalizer(moment) 


const customEventPropGetter = event => {
    return {
        className: 'special-day',
        style: {
          "backgroundColor": (event.hasAccepted ? 'red' : 'blue'),
        },
      }
}  
function EventAgenda({ event }) {
    return (
      <span>
        <em style={{ color: 'magenta' }} >{event.title}</em>
        <p>{event.desc}</p>
      </span>
    )
  }

export default class Calender extends Component{
    constructor(props){
        super(props)
        var logged = localStorage.getItem("logged")
        if(logged == "false" ){
            history.replace("/")
        }
        this.state = {data:[]}
    }
    action(event){
        localStorage.setItem('event', JSON.stringify(event))
        history.push(`/meeting/${event.id}`)
    }
    addEvent(){
        history.push("/addreach")
        window.location.reload(true);
    }
    addmmeet(){
        history.push("/addmeeting");
        window.location.reload(true);
    }
    componentDidMount(){
        api.getEvents().then(events => {       
            var {data} = events
            console.log(data)
            var formattedEvents = data.map(formatEvent)
            this.setState({data:formattedEvents})
        })   
    }
    
    render(){
        return(
        <div style={{height: '80vh', margin: '10px'}}>
            <BigCalendar
            localizer={localizer}
            events={this.state.data}
            startAccessor="start"
        endAccessor="end"
        eventPropGetter={customEventPropGetter}
        onSelectEvent={this.action}
        selectable={true}
        components={{
            agenda: {
                event: EventAgenda,
            },
        }}
            />
                <Button onClick={this.addEvent} bsStyle="primary" bsSize="large" active>
                   New Chapter Meeting
                </Button>
                <Button bsSize="large" onClick={this.addmmeet} active>
                   New Mentee Appointment
                </Button>
        </div>
        )
    }
}

