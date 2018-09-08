const router = require('express').Router()
var dynamoose = require('dynamoose');
var shortid = require('shortid');



dynamoose.AWS.config.update({
  accessKeyId: 'AKIAICHXXAWKE7PRGO6Q',
  secretAccessKey: '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',
  region: 'eu-central-1'
});
var _Response = dynamoose.model('Response1',{id:String, name:String, response:String})

router.get('/', (req, res) => {
  _Response.scan().exec().then((cat)=> {
    console.log(cat)
    res.status(200).send(cat)
  }).catch((err) => {console.log(err)})
})

router.get('/delete', (req, res) => {
  _Response.delete({name:'Dave', id: '-rKgR6Vlv'}, (err) => {
    if (err) {console.log(err)};
    res.send('bye seg')
  })
})

router.post('/addResponse', (req, res) => {
  var _id = shortid.generate();
  var newResponses = new _Response({id:_id, name:req.body.name, response:req.body.response})
  newResponses.save().then((doc)=> {
    res.status(200).send(doc)
    console.log('done')
  }).catch(console.log)
})

module.exports = router
