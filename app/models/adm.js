var mongoose = require('../../db/conexao');

const Adm = mongoose.model('user', {
  nome:{ type: String, required: true },
  email:{ type: String, required: true, unique: true},
  senha:{ type: String, required: true }
});

module.exports = Adm;

// const Adm = { 
//   id: 1, 
//   nome: "Willian",
//   senha: "123456",
//   todos: () => [
//     {
//       id: 2, 
//       nome: "Silva",
//       senha: "123456789",
//     },
//     {
//       id: 3, 
//       nome: "Wsilva",
//       senha: "12345678910",
//     }
//   ]
//  }

//  module.exports = Adm;