const { select, input, checkbox } = require('@inquirer/prompts'); 

let mensagem = "App de Metas";

let meta = {
  value: 'Tomar 3L de água por dia',
  checked: false,
}

let metas = [ meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: 'Digite a meta:' });

  // Verifica se a meta não é vazia usando o length igual a 0 caracteres
  if(meta.length == 0) {
    mensagem = "A meta não pode ser vazia!";
    return;
  }

  metas.push({ value: meta, checked: false });

  mensagem = "Meta cadastrada com sucesso!";
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
    mensagem = "Você não selecionou nenhuma meta!";
    return;
  }

  

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })
    
    meta.checked = true;
  
})

    mensagem = "Meta(s) marcada(s) como concluída(s)";
}

const metasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked
})

  if(realizadas.length == 0){
    mensagem = "Você não realizou nenhuma meta ainda! :(";
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
    mensagem = "Não existem metas abertas :)";
    return
  }

  await select({
    message: "Metas Abertas: " + abertas.length,
    choices: [...abertas],
})
}

const deletarMetas = async () => {
  const metasDesmarcadas = metas.map((meta) => {
    return { value: meta.value, checked: false }
  })

  const itensADeletar = await checkbox({
    message: 'Selecione item para deletar',
    choices: [...metasDesmarcadas],
    instructions: false,
  });

    if(itensADeletar.length == 0){
      mensagem = "Você não selecionou nenhuma meta para deletar!";
      return;
    }

    itensADeletar.forEach((item) => {
      metas = metas.filter((meta) => {
        return meta.value != item
      });

      
    });

    mensagem = "Metas deletadas com sucesso!";

}

const mostrarMensagem = () => {
  console.clear();

  if(mensagem != "") {
    console.log(mensagem);
    console.log("");
    mensagem = "";
  }
}

// Função principal
// Tem que ter o async para poder usar o await e esperar a escolha do usuário
const start = async () => {
  
// Loop infinito
  while(true){
    mostrarMensagem();
    

    // Mostra as opções para o usuário, usando await para esperar a escolha
    // Temos que usar as palavras message e choices, pois são padrões do inquirer
    const opcao = await select({
      
      message: 'Menu >',
      choices: [
        { name: 'Cadastrar meta', value: 'cadastrar' },
        { name: 'Listar metas', value: 'listar' },
        { name: 'Metas realizadas', value: 'realizadas' },
        { name: 'Metas abertas', value: 'abertas' },
        { name: 'Deletar metas', value: 'deletar' },
        { name: 'Sair', value: 'sair' }
      ]
    });

    switch(opcao){
      case "cadastrar":
        await cadastrarMeta();
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
      case "deletar":
        await deletarMetas();
        break;
      case "sair":
        console.log("Até a próxima!")
        return;
    }
  }
}

start();