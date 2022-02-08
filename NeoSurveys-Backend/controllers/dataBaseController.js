const fs = require('fs');
const mz = require('mz/fs');

/**
 * @constant: json file to store surveys
 */
const surveysData = "./data/surveys.json";

/**
 * @constant: json file to store survey answers
 */
const answersData = "./data/surveyAnswers.json"


/**
 * a function to check if the files exist
 * depending on file existence w can append an empty array or just leave the file
 */
module.exports.checkDB = ()=>{
    let emptyArr = [];
    fs.access(surveysData, (err)=>{
        if(err) {
            fs.appendFile(surveysData, JSON.stringify(emptyArr)
                , (fileError, result)=>{});
        }
    });
    fs.access(answersData, (err)=>{
        if(err) {
            fs.appendFile(answersData, JSON.stringify(emptyArr)
                , (fileError, result)=>{});
        }
    });
}

/**
 * appendDB: a function that appends new data to the surveys json database
 * @param {json} data new json object to add to the database 
 * @param {string} key an indicator of which table to append to in the database.
 */
module.exports.appendDB = async (key, data)=>{
    let path;
    if(key === "KEY_SURVEY"){
        path = surveysData;
    }else{
        path = answersData;
    }

    try{
        let fsData = await mz.readFile(path);
        let dbData = JSON.parse(fsData);
        data.id = dbData.length + 1;

        dbData.push(data);
        strData = JSON.stringify(dbData);

        fs.writeFile(path, strData, (err, result)=>{});
        return data;
    }catch(err){
        console.log(err);
    }
}


/**
 * 
 * @returns the whole surveys json file data
 */
module.exports.readDB = async () =>{
    try{
        let data = await mz.readFile(surveysData);
        return JSON.parse(data);
    }catch(err){
        console.log(err);
    }
}