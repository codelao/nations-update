import React, { Component } from 'react';
import FieldGroup from '../components/FieldGroup'
import * as Datetime from 'react-datetime';
import styled from 'styled-components';
import history from '../components/history';
import api from '../functions/api';


const EventWrapper = styled.div`
display: grid;
grid-template-columns: auto;
grid-column-gap: 5px
`
const EventForm = styled.div`
grid-column:2/3
`

export default class EventAdder extends Component{
    constructor(props){
        super(props);
        if(!Boolean(localStorage.getItem('logged'))){
            this.props.history.replace("/home")
        }
        this.state = {summary: '', date:'', description:''};
        this.handleSummary = this.handleSummary.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }
    handleSummary(event) {
        this.setState({summary: event.target.value});
    }
    handleDescription(event){
        this.setState({description: event.target.value})
    }
    handleSubmit(event){
        var nEvent = this.state
        api.writeEventData(nEvent).then((res)=> {
            console.log(res)
            history.replace('/member')
        })
        event.preventDefault()
    }
    handleDate(event){
        this.setState({date: event._d})
    }
    render(){
        return (
        <EventWrapper>
        <EventForm id="eventWrapper">
        <form onSubmit={this.handleSubmit}>
        Date<Datetime onChange={this.handleDate}/>
        <FieldGroup
        label="Summary"
        onChange={this.handleSummary}
        id="formSummary"
        type="text"
        />
         <FieldGroup
            id="formDescription"
            componentClass="textarea"
            label="Description"
            onChange={this.handleDescription}
            rows="3"
        />  
        <input type="submit" value="Submit" />
        </form>
        </EventForm>
        </EventWrapper>
        )
    }
}
