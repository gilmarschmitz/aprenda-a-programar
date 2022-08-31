let nome =  "Gilmar"
let email =  "gilmarschmitz89@gmail.com"
let profissao =  "programador de supervisorio"
let idade =  33
let local =  "Paris"

let mensagem = ('  Olá, ' + nome + ' !\n ') +
  ( ' Somos aqui da agência de turismo Viagem dos Sonhos.\n') +
  ( '  Estamos te escrevendo este email, \n') +
  ( '  pois acabamos de confirmar as compras das passagens aéreas para ' + local + ',\n ') +
  ( ' Confirma pra gente alguns dados?\n') +
  ( '  A sua idade é ' + idade + ' anos,\n ') +
  ( ' você é ' + profissao + ' e o seu email é ' + email + ' ?\n ') +
  ( ' Ficamos no aguardo.\n ') +
  ( ' Muito obrigado e boa viagem! :D ' )

console.log(mensagem)
