var Adm = require('../../app/models/adm');

const AdmControler = {
  index: function(req, res, next) {
    const adm = new Adm({nome: 'Kitten'});
    adm.save(error => {
      res.send(error);

    });

  //   adm.save().then((err, dado) => {
  //     console.log(err);
  //     console.log(dado);
  //     res.send([]);
  //   }).then(() => {
  //     Adm.find().then(dado => {
  //       res.send(dado);
  //     });
  //   });
  }
}

module.exports = AdmControler;