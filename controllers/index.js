const {News, Category} = require("../models")

class Controller {
    static test(req, res){
        News.findAll()
        .then(data => res.send(data))
        .catch(err => res.send(err))
    }

}

module.exports = Controller