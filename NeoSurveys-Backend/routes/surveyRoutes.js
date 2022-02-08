const express = require('express');
const router = express.Router();
const {readDB, appendDB} = require('../controllers/dataBaseController');

/**
 * get the list of stored surveys
 */
router.get('/', async (req, res)=>{
    
});


/**
 * get a survey by its id
 */
router.get('/:id', (req, res)=>{
    res.send('a survey detail');
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
router.post('/create', (req,res)=>{
    let survey = {
        "name": "This is the second survey",
        "questions": [
            {
                "statement": "are you blind nigga?",
                "answer": "yes"
            },
            {
                "statement": "are you blind nigga?",
                "answer": "yes"
            }
        ]
    }
    appendDB(survey);
    res.send('survey created');
});

module.exports = router;