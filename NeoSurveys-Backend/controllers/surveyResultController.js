
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