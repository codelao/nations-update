const router = require('express').Router()
var dynamoose = require('dynamoose');

var shortid = require('shortid');



dynamoose.AWS.config.update({
  accessKeyId: 'AKIAICHXXAWKE7PRGO6Q',
  secretAccessKey: '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',
  region: 'eu-central-1'
});
var Mentor = dynamoose.model('Mentor',{id:String, meeting:String, mentor:String})

router.get('/', (req, res)=> {
    Mentor.find().then((mentors)=> {
        res.status(200).send({mentors})
    }).catch(console.log)
})

router.post('/addMentor', (req, res) => {
    Mentor.insertMany(req.body)
          .then((doc)=> {
            res.send(doc)
          }).catch(console.log)
})

router.get('/:mentor_id', (req, res) => {
    Mentor.findById(req.params.mentor_id).then((mentor)=> {
        console.log(mentor)
        res.status(200).send(mentor)
    }).catch(console.log)
})

module.exports = router