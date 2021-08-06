const fs = require("fs");
const path = require("path");


module.exports = {

    join : route =>{
        return path.join(__dirname,route)
    },

    deleteFolder : path => {

        if( fs.existsSync(path)) {
            fs.readdirSync(path).forEach(file => {
                let pathFile = path + "/" + file;
    
                if(fs.statSync(pathFile).isDirectory()) { // callback
                     deleteFolder(pathFile);
                } else { // delete file
                     fs.unlinkSync(pathFile);
                }
                
            });
            fs.rmdirSync(path);
        }
    },
}