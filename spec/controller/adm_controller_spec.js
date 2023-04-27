const { response } = require('express');
var request = require('request-promise');
const host = "http://localhost:3000";

describe("Adm controller", () => {
	describe("GET /adm.json - deve retornar lisa de administradores", function() {
		it("deve retornar o status code de 200", (done) => {
      let options = {
        method: 'GET',
        uri: `${host}/adm.json`,
        resolveWithFullResponse: true 
    };
      request(options).then(response => {
          console.log("*****************************");
          expect(response.statusCode).toBe(200);
          console.log("============================");
        })
        .catch(function (err) {
         throw err.message;
        });
        done();
      });

      it("deve retornar dados na API", (done) => {
        let options = {
          method: 'GET',
          uri: `${host}/adm.json`,
          resolveWithFullResponse: true 
      };
        request(options).then(response => {
            console.log("*****************************");
            expect(response.statusCode).toBe([
                      {
                        id: 2, 
                        nome: "Silva",
                        senha: "123456789",
                      },
                      {
                        id: 3, 
                        nome: "Wsilva",
                        senha: "12345678910",
                      }
                    ]);
            console.log("============================");
          })
          .catch(function (err) {
           throw err.message;
          });
          done();
        });
      // request.get(host + "/adm.json", (error, response, body) => {
      //   if(response === undefined){
      //     console.log("Não consegui localizar o servidor");
      //     expect(503).toBe(200);
      //   }
      //   else{
      //     expect(response.statusCode).toBe(200);
      //   }
      //   done();
      // });
   

      // it("deve retornar dados na API", (done) => {
      //   request.get(host + "/adm.json", (error, response, body) => {
      //     if(response === undefined){
      //       console.log("Não consegui localizar o servidor");
      //       expect(503).toBe(200);
      //     }
      //     else{
      //       expect(response.body).toBe([
      //         {
      //           id: 2, 
      //           nome: "Silva",
      //           senha: "123456789",
      //         },
      //         {
      //           id: 3, 
      //           nome: "Wsilva",
      //           senha: "12345678910",
      //         }
      //       ]);
      //     }
      //     done();
      //   });
      // });
    });
	});

// describe('Adm Controller', function() {
//   it('Deve retornar uma lista de adms', function() {
//     expect(dados !== undefined).toBe(true);
//   });
// });