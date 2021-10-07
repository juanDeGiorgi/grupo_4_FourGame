const db = require("../../database/models");


module.exports = {

    listEmails : (req,res) =>{
        db.users.findAll()
        .then(users =>{

            const emails = users.map(user => user.email)

            res.json(emails)
        }).catch(err =>{
            console.log(err);
        })
    }
}