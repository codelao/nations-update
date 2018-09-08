const router = require('express').Router()
var dynamoose = require('dynamoose');

var shortid = require('shortid');



dynamoose.AWS.config.update({
  accessKeyId: 'AKIAICHXXAWKE7PRGO6Q',
  secretAccessKey: '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',
  region: 'eu-central-1'
});
var Mentee = dynamoose.model('Mentee',{id:String, meeting:String, mentor:String})

router.get('/', (req, res)=> {
    Mentee.find().then((mentees)=> {
        res.status(200).send({mentees})
    }).catch(console.log)
})

router.get('/:mentee_id', (req, res) => {
    Mentee.findById(req.params.mentee_id).then(mentee => {
        res.status(200).send(mentee)
    }).catch(console.log)
})

router.post('/addMentee', (req, res) => {
    Mentee.insertMany(req.body)
          .then((doc)=> {
            res.send(doc)
          }).catch(console.log)
})
module.exports = router