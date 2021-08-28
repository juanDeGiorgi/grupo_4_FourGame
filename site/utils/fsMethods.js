const fs = require("fs");
const path = require("path");
const util = require("util");

module.exports = {

    join : route => {
        return path.join(__dirname,route)
    },

    saveProducts : file => {
        fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(file,null,2),'utf-8') 
    },

    saveUsers : file => {
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(file,null,2),'utf-8') 
    },

    deleteFile : file =>{
        fs.unlinkSync(path.join(__dirname,file));
    },

    copyFile : (oldPath,newPath) => {
        let absoluteOldPath = path.join(__dirname,oldPath)
        absoluteNewPath = path.join(__dirname,newPath);
        
        var readStream = fs.createReadStream(absoluteOldPath);
        var writeStream = fs.createWriteStream(absoluteNewPath);
        
        readStream.on('error', () => console.log("error in readStream"));
        writeStream.on('error', () => console.log("error in writeStream"));
        
        readStream.pipe(writeStream);
    },
    
    renameFolder : (oldPath,newPath) => {
        fs.renameSync(path.join(__dirname,oldPath),path.join(__dirname,newPath));
    },

    moveFile : (oldPath, newPath) => {
        let absoluteOldPath = path.join(__dirname,oldPath)
            absoluteNewPath = path.join(__dirname,newPath);

        fs.rename(absoluteOldPath,absoluteNewPath, function (err) {
            if (err) {
                if (err.code === 'EXDEV') {
                    this.forceMove(absoluteOldPath,absoluteNewPath);
                } else {
                    console.log(err);
                }
                return;
            }
        })
    },

    forceMove : (oldPath,newPath,callback) => {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', () => console.log("error in readStream"));
        writeStream.on('error', () => console.log("error in writeStream"));

        readStream.on('close',() => {
            fs.unlink(oldPath, () => console.log("error unlink"));
        });

        readStream.pipe(writeStream);
    },

    createFolder : route =>{
        let absolutePath = path.join(__dirname,route)

        fs.mkdirSync(absolutePath)
    },

    deleteFolder : route => {
        let absolutePath = path.join(__dirname,route);
        
        if( fs.existsSync(absolutePath)) {
            fs.readdirSync(absolutePath).forEach(file => {
                let pathFile = absolutePath + "/" + file;
    
                if(fs.statSync(pathFile).isDirectory()) { // callback
                     deleteFolder(pathFile);
                } else { // delete file
                     fs.unlinkSync(pathFile);
                }
                
            });
            fs.rmdirSync(absolutePath);
        }
    },

}