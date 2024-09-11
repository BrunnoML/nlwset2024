const { select, input, checkbox } = require('@inquirer/prompts'); 
const { type } = require('os');

let meta = {
  value: 'Tomar 3L de água por dia',
  checked: false,
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

const listarMetas = async () => {
  const respostas = await checkbox({
    message: 'Use as setas para mudar de meta, o espaço para selecionar e o enter para confirmar',
    choices: [...metas],
    instructions: false,
  });
// Essa parte do código estava após o if, ocasionando um erro, pois não desmarcava todas as metas, sempre exigia que pelo menos uma meta ficasse selecionada
// Ao colocar aqui em cima, ele desmarca todas as metas, e só marca as que o usuário escol
// A função forEach percorre o array de metas e define a propriedade checked de cada uma como false. Isso garante que todas as metas estejam desmarcadas.
  metas.forEach((m) => {
    m.checked = false;
  })

  if(respostas.length == 0){
    console.log("Você não selecionou nenhuma meta!");
    return;
  }

  

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })
    
    meta.checked = true;
  
})

    console.log("Meta(s) marcadas como concluída(s)");
}

const metasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked
})

  if(realizadas.length == 0){
    console.log("Você não realizou nenhuma meta ainda! :(");
    return;
  }

  await select({
    message: 'Metas realizadas: ' + realizadas.length,
    choices: [...realizadas],
})
}

const metasAbertas = async () => {
  const abertas = metas.filter((meta) => {
    return meta.checked != true
  })

  if (abertas.length == 0) {
    console.log("Não existem metas abertas :)")
    return
  }

  await select({
    message: "Metas Abertas " + abertas.length,
    choices: [...abertas],
})
}
// Função principal
// Tem que ter o async para poder usar o await e esperar a escolha do usuário
const start = async () => {

// Loop infinito
  while(true){

    // Mostra as opções para o usuário, usando await para esperar a escolha
    // Temos que usar as palavras message e choices, pois são padrões do inquirer
    const opcao = await select({
      message: 'Menu >',
      choices: [
        { name: 'Cadastrar meta', value: 'cadastrar' },
        { name: 'Listar metas', value: 'listar' },
        { name: 'Metas realizadas', value: 'realizadas' },
        { name: 'Metas abertas', value: 'abertas' },
        { name: 'Sair', value: 'sair' }
      ]
    });

    switch(opcao){
      case "cadastrar":
        await cadastrarMeta();
        console.log("Metas cadastradas: ", metas);
        break;
      case "listar":
        await listarMetas();
        break;
      case "realizadas":
        await metasRealizadas();
        break;
      case "abertas":
        await metasAbertas();
        break;
      case "sair":
        console.log("Até a próxima!")
        return;
    }
  }
}

start();