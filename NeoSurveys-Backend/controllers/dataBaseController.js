const fs = require('fs');
const mz = require('mz/fs');

/**
 * @constant: json file to store surveys
 */
const surveysData = "./data/surveys.json";

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
}

/**
 * appendDB: a function that appends new data to the surveys json database
 * @param {json} data new json object to add to the database 
 */
module.exports.appendDB = (data)=>{
    fs.readFile(surveysData, (err, fsData)=>{
        if(!err) {
            let dbData = JSON.parse(fsData);
            dbData.push(data);
            strData = JSON.stringify(dbData);
            fs.writeFile(surveysData, strData, (err, result)=>{});
        }
    });
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