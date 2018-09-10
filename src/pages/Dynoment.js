import React, {
    Component
} from "react"
//const request = require('superagent')
import Table from "../components/Table.js"
const port = process.env.PORT || 3000
console.log(port)
export default class Dynoment extends Component {
    state = {
        mentorResponses: {},
        loading: true
    }
    /*getData() {
        fetch(`http://localhost:${port}/api/response/`)
        .then((res) => {
            if(res.status === 404) throw new Error(res.statusText);
            return res.json()
        })
        .then((data)=> {
            console.log(data)
            this.setState({mentorResponses: data, loading: false})
        })
        .catch(console.log)
    }*/
    getData(){
        request
            .get('http://localhost:${port}/api/response/')
            .end((err, res)=> {
                if(res.status === 404) throw new Error(res.statusText);
            return res.json()
        })
        .then((data)=> {
            console.log(data)
            this.setState({mentorResponses: data, loading: false})
            })
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