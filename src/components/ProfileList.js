import React from "react"


const ProfileList = ({replies}) => {
    var js = []
    replies.forEach((user) => {
        user.forEach((curr, i) => {
            if(i === 0){
                js.push(
                    <div>
                        <b>{curr.name}</b>
                        <div>
                            {`${String(curr.attendance)} `}
                            {curr.summary}
                        </div>
                    </div>
                )
            }
            else{
                js.push(
                    <div>
                            {`${String(curr.attendance)} `}
                            {curr.summary}
                    </div>
                )
            }
            return
        }) 
    })
    return js
}

export default ProfileList