const express = require('express');
const router = express.Router();
const {readDB, appendDB} = require('../controllers/dataBaseController');
const {validateSurvey} = require('../middleware/InputValidation');

/**
 * get the list of stored surveys
 */
router.get('/', async (req, res)=>{
    const surveyList = await readDB();
    res.send(surveyList);
});


/**
 * get a survey by its id
 */
router.get('/:id', async (req, res)=>{
    const idSurvey = parseInt(req.params.id);
    const surveyList = await readDB();
    const survey = surveyList.find(survey => survey.id === idSurvey);

    if(!survey) return res.status(404).send("A survey with such id does not exist");

    res.send(survey);
});

/**
 * get the result of a survey
 * @param: req contains the response of the user on a survey
 */
router.post('/:id/result', (req, res)=>{
    res.send('the result of a survey for someone');
});

/**
 * create a survey
 * @param: req contains the survey object to store
 */
router.post('/create', (req, res)=>{
    const {error, value} = validateSurvey(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    // appendDB(req.body);
    res.send(req.body);
});

module.exports = router;