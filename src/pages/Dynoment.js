import React, {
    Component
} from "react"
import Table from "../components/Table.js"
const request = require('superagent')
const port = process.env.PORT || 3000
export default class Dynoment extends Component {
    state = {
        mentorResponses: {},
        loading: true
    }
    getData() {
        fetch(`https://192.168.0.11:${port}/api/response/`)
        .then((res) => {
            if(res.status === 404) throw new Error(res.statusText);
            return res.json()
        })
        .then((data)=> {
            console.log(data)
            this.setState({mentorResponses: data, loading: false})
        })
        .catch(console.log)
    }
    componentDidMount() {
        console.log('component did mount')
        this.getData()
    }
    render() {
        if(this.state.loading){
            return <div>loading...</div>
        }
        else{
        var mentorResponses = this.state.mentorResponses
        console.log(mentorResponses[0])
        return <Table responses={mentorResponses}/>
        }
    }
}