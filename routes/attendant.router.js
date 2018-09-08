const router = require('express').Router()
var dynamoose = require('dynamoose');
var shortid = require('shortid');


dynamoose.AWS.config.update({
  accessKeyId: 'AKIAICHXXAWKE7PRGO6Q',
  secretAccessKey: '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',
  region: 'eu-central-1'
});
var Attendant = dynamoose.model('Attendant',{id:String, meeting:String, mentor:String})


router.get('/', (req, res) => {
    Attendant.scan().exec()
             .then((attendant) => {
                 res.status(200).send({attendant})
             }).catch(console.log)
})

router.get('/:attendant_id', (req, res) => {
    Attendant.findById(req.params.attendant_id).then(attendant=> {
        res.status(200).send({attendant})
    }).catch(console.log)
})

router.get('/mentors/:mentor_id', (req, res) => {
    Attendant.find({attendee:req.params.mentor_id}).then((attendees) => {
        res.status(200).send({attendees})
    }).catch(console.log)
});
router.get('/meetings/:meeting_id', (req, res)=> {
    Attendant.find({meeting:req.params.meeting_id}).then((attendees) => {
        res.status(200).send({attendees})
    }).catch(console.log)
})

router.post('/addAttendee', (req, res) => {
    Attendant.insertMany(req.body).then((doc) => {
        res.status(201).send(doc)
    }).catch(console.log)
})

module.exports = router