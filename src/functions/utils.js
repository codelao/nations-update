import moment from 'moment';
import react from "react"
import { matchPath } from "react-router";
import history from "../components/history";
import api from "../functions/api";
const {getEvents} = api;
var now = moment()


/*
created: "YYYY-MM-DDTHH:mm:SS.mmmz"
creator: {email:"", displayName:""}
description:""
end:{dateTime: "YYYY-MM-DDTHH:mm:ss+01:00"}
start ^^ same format
htmlLink: ""
status: "confirmed"
responseStatus: "needsAction"
summary:""
id:""
*/

const getMatchPath = () => {
    const {pathname} = history.location;
    return matchPath(pathname, {
        path:"/meeting/:meeting_id",
        exact: true
    }).params.meeting_id
}

const getSpecificEvent = () => {
    return getEvents().then((res)=> {
        const events = res.data
        return events.find(event => event.id === getMatchPath())
    })
}

const isInFuture = (date) => {
    return now.isAfter(date)
}

const convertDateToMoment = (date) => {
    return moment(date).toDate()
}

/*const addAgendaLinks = (agendaHTMLElements, events) => {
    agendaHTMLElements.forEach(element => {
        onClick
    })
}*/

const formatDateForDisplay = (start, end) => {
    start =  JSON.stringify(moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a"))
    end = JSON.stringify(moment(end).format("h:mm:ss a"))
    return `${start} to ${end}`
}

const formatEvent = (event) => {
    const email = localStorage.getItem("email")
    event.start = convertDateToMoment(event.start.dateTime);
    event.end = convertDateToMoment(event.end.dateTime);
    event.title = event.description;
    event.id = event.id;
    event.isReach = false
    if(!event.attendees){
        return event
    }
    if(event.extendedProperties){
        event.isReach = event.extendedProperties.shared.shared === "true"
    }
    let currentUserResponse = event.attendees.find(attendee => attendee.email === email)
    event.hasAccepted = currentUserResponse === "accepted"
    return event
}

const parseEvents = (events) => {
    const upcomingEvents = events.filter(isInFuture);
    const reachEvents = events.filter(event => event.isReach)
    const mentorEvents = events.filter(event => !event.isReach)
    const pastEvents = events.filter(!isInFuture)
    const eventsUserHasAttended = pastEvents.filter(event => event.hasAccepted)
    const numberOfEventsAttended = `${eventsUserHasAttended} / ${pastEvents}` 
    return {upcomingEvents, reachEvents, mentorEvents, pastEvents, numberOfEventsAttended}
}

export {isInFuture, 
        convertDateToMoment, 
        formatEvent,
        getMatchPath, 
        getSpecificEvent, 
        formatDateForDisplay, 
        parseEvents}