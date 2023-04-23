var Adm = require('../models/adm');


const AdmControler = {
  index: function(req, res, next) {
    res.send(Adm.todos());
  }
}

module.exports = AdmControler;