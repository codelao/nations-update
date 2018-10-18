import history from "../components/history"
var API_URL = 'http://localhost:7000/api'
var gen = require('shortid').generate();
var firebase = require("firebase");
var moment = require('moment');
var api = {}
var shortid = require('shortid').generate
var CircularJSON = require('circular-json')
var users = ['sethlaolu@gmail.com','princessdami@gmail.com', "ayekod@gmail.com", "info@nationsladies.org.uk", "renee.a.sterling@gmail.com",
"adobea.atsrefi@gmail.com", "pammaugile@gmail.com", "info@nationsladies.org.uk"]
const calendarUrl = 'https://us-central1-nations-ladies.cloudfunctions.net/myCalendar/';


var config = {
    apiKey: "AIzaSyCaLP-xSucfV-BCCPHx2s00wbrXT64Az1w",
    authDomain: "nations-ladies.firebaseapp.com",
    databaseURL: "https://nations-ladies.firebaseio.com",
    projectId: "nations-ladies",
    storageBucket: "nations-ladies.appspot.com",
    messagingSenderId: "571565851553",
};
var fire = firebase.initializeApp(config);
const auth = fire.auth()

auth.onAuthStateChanged(user => {
    if(user){
        localStorage.setItem('display', user.displayName);
        localStorage.setItem('email', user.email);
        if(localStorage.getItem('logged') === 'false'){
            localStorage.setItem('logged', 'true')
            history.push('/member')
            window.location.reload(true)
        }
        console.log('logged in')
    }else{
        localStorage.setItem('logged', 'false')
        localStorage.removeItem('display');
        localStorage.removeItem('email')
        console.log('logged out')
    }
})

var minutesRef = firebase.storage().ref()

api.uploadMinutes = (files, event)=> {
    var name = files[0].name
    var newRef = firebase.storage().ref().child(name)
    var metadata = {
        customMetadata: event
    }
    newRef.put(files[0], metadata).then((res)=> {
        console.log('file uploaded')
    }).catch(console.log)
}

api.login = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar.events');
        provider.setCustomParameters({
            prompt: 'select_account'
          });
        history.push('/loading')
        return auth.signInWithRedirect(provider).then((result)=> {    
            console.log(result)
        }).catch(console.log);
}

api.logout = () => {
    localStorage.setItem('logged', false)
    auth.signOut()
}

api.checkLogin = () => {
    return localStorage.getItem('logged')
}


api.writeEventData = (event) => {
    /*var _id = shortid()
    var {date} = event
    var xsummary = event.summary
    var xdescription = event.description
    var xstart = moment(date, "ddd MMM DD HH:mm:ss Z").format("YYYY-MM-DDTHH:mm:ss+0100")
    var xend = moment(xstart).add(1, 'h').format("YYYY-MM-DDTHH:mm:ss+0100")
    const xmentor = firebase.auth().currentUser.mentor
    const xtoken = firebase.auth().currentUser.getIdToken()
    return fetch(calendarUrl + 'addmeeting', {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: CircularJSON.stringify({"end":xend, "start":xstart, "summary":xsummary, "description":xdescription, "mentor":xmentor, })
    }).catch(console.log)*/
}



api.getEvents = () => {
    return fetch(calendarUrl + 'events')
        .then((res) => {
            return res.json()
        }) 
        .catch(console.log)
}



api.update = (data) => {
    return fetch(calendarUrl + 'updatemeeting', {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: CircularJSON.stringify({response:data})
    })
}




export default api