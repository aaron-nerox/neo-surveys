import axios from 'axios';
const ROOT_URL = "http://localhost:8000/api/surveys";

const services = {
    LIST_SURVEYS: `${ROOT_URL}`,
    CREATE_SURVEY: `${ROOT_URL}/create`,
    RESULT_SURVEY: `${ROOT_URL}/result`,
}

function Get(service, params){
    return axios.get(service, {
        params: params
    });
}

function Post(service, data){
    return axios.post(service, data);
}