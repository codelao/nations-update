const router = require('express').Router()

const attendantRouter = require('./attendant.router');
const meetingRouter = require('./meeting.router');
const menteeRouter = require('./mentee.router');
const mentorRouter = require('./mentor.router');
const responseRouter = require('./response.router')

router.use('/attendants', attendantRouter);
router.use('/meetings', meetingRouter);
router.use('/mentees', menteeRouter);
router.use('/mentors', mentorRouter);
router.use('/response', responseRouter)

module.exports = router
