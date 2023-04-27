
criar folders app e dentro dele criar os folders controller e models. A view sera removida apara o folder do app

Quando mudar um folder view para outro folder:
1- em app.js verifica codifo app.set e no atributo mude o local para onde foi colocado o folder view.
2- no folder de routes, o index.js. Retire a funcao para adicionar no controler na pasta home_controller que foi criada para receber as acoes.
3- ainda no folder routes, indez.js, ajustar as variaveis e routes para o require para a HomeController. no router.get adicionar a variavel HomeControler.index para chamar a acao.


Criando um novo route
1-cria uma tag a con href route desejada e, nesse caso a tag com atributo target _blank, isso abrira uma outra janela ao clicar no link.
2-ir no routes, index.js e duplicar o route.get e adicionar os parametros da rota desejada
3- no adm_controler ajustar a condica da funcao de render para send, o qual deve passar um array com un hash chave e valor
4- volta para o route e adiciona a variavel AdmControler para um require do caminho o qual deve ser feito
IMPORTANTE, derruba o servidor e restartar de novo, para complicao. Se nao da erro.

Promise async await javascript

Ex. video 03, tiem 30 min ## Nessa caso o Promise e async await far que o codigo va buscar no file as infomacoes para colocar-los em sequencia. Pois a funcao a qual retorna o Promise faz com que isso ocorra na sequencia ordenada

let fs = require('fs');

const lerArquivo = arquivo => {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf8', (err, contents) => {
      if(err){
        reject(err);
      }
      else{
        resolve(contents);
      }
    })
  });
}

Teste Model
para rodar os testes com o jasmine no terminal fazer por exemple: npx jasmine

Test controller

criar past contorller e um file para o teste do controller
adicionar no file o as contantes para o request e tb o host
