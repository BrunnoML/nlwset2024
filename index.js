const { select } = require('@inquirer/prompts') 

// Função principal
// Tem que ter o async para poder usar o await e esperar a escolha do usuário
const start = async () => {

// Loop infinito
  while(true){

    // Mostra as opções para o usuário, usando await para esperar a escolha
    // Temos que usar as palavras message e choices, pois são padrões do inquirer
    const opcao = await select({
      message: 'O que deseja fazer?',
      choices: [
        { name: 'Cadastrar meta', value: 'cadastrar' },
        { name: 'Listar metas', value: 'listar' },
        { name: 'Sair', value: 'sair' }
      ]
    });

    switch(opcao){
      case "cadastrar":
        console.log("Cadastrando...");
        break;
      case "listar":
        console.log("Listando...");
        break;
      case "sair":
        console.log("Até a próxima!")
        return;
    }
  }
}

start();