const { select, input } = require('@inquirer/prompts') 

let meta = {
  value: 'Tomar 3L de água por dia',
  checked: false
}

let metas = [ meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: 'Digite a meta:' });

  // Verifica se a meta não é vazia usando o length igual a 0 caracteres
  if(meta.length == 0) {
    console.log("A meta não pode ser vazia!");
    return;
  }

  metas.push({ value: meta, checked: false });
}
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
        await cadastrarMeta();
        console.log("Metas cadastradas: ", metas);
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