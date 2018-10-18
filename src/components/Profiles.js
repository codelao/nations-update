import React, {Component} from "react"
import obj from '../functions/profiles';
import ProfilesList from './ProfileList'
const {responses, emails} = obj;
responses.forEach(response => {
    emails[response["email"]].push(response)
})
var emailAddresses = Object.keys(emails);
var replies = Object.values(emails)

export default class Profiles extends Component{
    constructor(props){
        super(props)
        //this.state = {profiles:[]}
        /*var pr = responses.map(profile => {
            return (<div>

            </div>)
        })*/
        console.log(emailAddresses, replies)
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <ProfilesList replies={replies}/>
            </div>
        )
    }
}