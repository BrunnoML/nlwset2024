## Linguagem de programação
Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

**Algoritmo**: Sequência de passos lógica e finita para resolução de um problema.

## Peças de uma linguagem

- Comentários
- Declaração de variáveis (const, let)
- Operadores (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (string, number, boolean)
- Estrutura de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estrutura de repetição (for, while)

# Fases da resolução de um problema

Coletar os dados
Processar os dados (manipular, alterar...)
Apresentar os dados

## Variáveis

Globais e locais
const - é uma palavra reservada para definir uma variável que não aceita alterar seu valor
let - é uma palavra que define uma variável que aceita alteração de valor

## Tipos de dados:

- [x] Strings (textos): "" '' ``
- [x] Number: 2 1.4
- [x] Bollean: verdadeiro ou falso

## Operadores

- [x] Operador de atribuição de valor =
- [x] Operador de concatenação +
- [x] Operadores de comparação: == (igual) != (diferente) < (menor) > (maior)
- [x] Spread operator: ...

## Estrutura de dados

### Arrays:

- [x] Uma lista que contém qualquer tipo de dado
- [x] Método de array: Método é toda função que está dentro de um objet
      push, [find, forEach, filter] : HOF (Higher Order Functions)

### Objetos:

- [x] Atributos e métodos
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos

### Functions

- [x] criar, passar argumentos
- [x] executar
- [x] arrow fuction // const criarMeta = () => {}
- [x] named function // function criarMeta() {}


# Função com arrow function

const criarMeta = () => {}

# Exemplos

// arrays. objetos
let meta = {
  value: 'ler um livro por mês',
  checked: false
}

console.log(meta.value)

// function // arrow function
const criarMeta = () => {
  return {
    value: 'ler um livro por mês',
    checked: false
  }
}

# Estrutura de repetição

- [x] while

# Condicionais

- [x] switch
- [x] if/else

# Importação de módulos em Node.js

- [x] Importação de módulos (require, CommonJS)
- [x] Biblioteca 'inquirer' para criar prompts interativos

Vamos instalar o inquirer

npm install inquirer

added 44 packages in 4s

6 packages are looking for funding
  run `npm fund` for details

## Vamos importar assim:

const { select } = require('@inquirer/prompts') 

# Programação assíncrona e Promises

- [x] Uso de funções assíncronas (async/await)
