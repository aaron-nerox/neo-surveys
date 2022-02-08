
/**
 * 
 * @param {Survey} survey a survey object
 * @param {SurveyAnswer} answer a survey answer that is associated with the survey object 
 * @returns survey answer results
 */
module.exports.getSurveyResult = (survey,answer)=>{
    let surveyQuestions = survey.questions;
    let surveyResponses = answer.answers;
    let correctAnswersCount = 0;

    surveyQuestions.forEach((question ,index) => {
        let response = surveyResponses[index];

        if(response.answer === question.answer){
            correctAnswersCount++;
        }
    });

    let resultObject = {
        "idSurvey": survey.id,
        "idAnswer": answer.id,
        "CorrectAnswers": correctAnswersCount,
        "AnswerRatio": `${(correctAnswersCount/surveyQuestions.length)*100}%`,
    }

    return resultObject;
}


/**
 * 
 * @param {survey} survey a survey object with it answers 
 * @returns a survey object without the correct answers in it
 */
module.exports.stripSurveyAnswers = (survey)=>{
    let strippedSurvey = {
        "id": survey.id,
        "name": survey.name
    }

    let strippedQuestions = [];
    survey.questions.forEach((question)=>{
        strippedQuestions.push(question.statement)
    });

    strippedSurvey.questions = strippedQuestions;
    return strippedSurvey;
}