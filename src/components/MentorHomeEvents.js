const MentorHomeEvents = ({upcomingEvents, numberOfEventsAttended}) => {
    return(
        <div>
            Attendance {numberOfEventsAttended}
            {upcomingEvents.map(event=> {
                return(
                    <div>
                        <p>{upcomingEvents.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MentorHomeEvents