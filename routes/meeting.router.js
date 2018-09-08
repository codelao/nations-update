const router = require('express').Router()
var dynamoose = require('dynamoose');

var shortid = require('shortid');



dynamoose.AWS.config.update({
  accessKeyId: 'AKIAICHXXAWKE7PRGO6Q',
  secretAccessKey: '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',
  region: 'eu-central-1'
});
var Meeting = dynamoose.model('Meeting',{id:String, meeting:String, mentor:String})

router.get('/', (req, res)=> {
    Meeting.find().then((meetings)=> {
        res.status(200).send({meetings})
    }).catch(console.log)
})

router.get('/:meeting_id', (req, res) => {
    Meeting.findById(req.params.meeting_id).then(meeting=> {
        res.status(200).send(meeting)
    }).catch(console.log)
})

router.post('/addmeeting', (req, res) => {
    Meeting.insertMany(req.body).then((doc) => res.send(doc)).catch(console.log)
})

module.exports = router