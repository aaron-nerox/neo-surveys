import axios from 'axios';
const ROOT_URL = "http://localhost:8000/api/surveys";

export const services = {
    LIST_SURVEYS: `${ROOT_URL}`,
    CREATE_SURVEY: `${ROOT_URL}/create`,
    RESULT_SURVEY: `${ROOT_URL}/result`,
}

export const Get = (service, param) => {
    let url;

    if(param) 
        url = `${service}/${param}`
    else
        url = `${service}`
    
    return axios.get(url);
}

export const Post = (service, data, param)=>{
    let url;

    if(param) 
        url = `${service}/${param}`
    else
        url = `${service}`

    return axios.post(url, data);
}