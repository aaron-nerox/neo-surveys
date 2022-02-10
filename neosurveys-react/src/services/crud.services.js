import axios from 'axios';
const ROOT_URL = "http://localhost:8000/api/surveys";

/**
 * @LIST_SURVEYS : Endpoint for getting the survey list or a survey
 * @CREATE_SURVEY : Endpoint for survey creation
 * @RESULT_SURVEY : Endpoint to submit a survey answer and get the result 
 */
export const services = {
    LIST_SURVEYS: `${ROOT_URL}`,
    CREATE_SURVEY: `${ROOT_URL}/create`,
    RESULT_SURVEY: `${ROOT_URL}/result`,
}

/**
 * Wrapper function over axios get
 * @param {*} service: Backend service endpoint
 * @param {*} param: parameter if available
 * @returns axios get request promise
 */
export const Get = (service, param) => {
    let url;

    if(param) 
        url = `${service}/${param}`
    else
        url = `${service}`
    
    return axios.get(url);
}

/**
 * Wrapper function over axios post
 * @param {*} service: Backend service endpoint
 * @param {*} data: Data to send to the backend
 * @param {*} param: parameter if available
 * @returns axios post request promise
 */
export const Post = (service, data, param)=>{
    let url;

    if(param) 
        url = `${service}/${param}`
    else
        url = `${service}`

    return axios.post(url, data);
}