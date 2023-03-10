const {News} = require("./models")

News.findAll()
    .then(data => console.log(data))
    .catch(err => console.log(err))