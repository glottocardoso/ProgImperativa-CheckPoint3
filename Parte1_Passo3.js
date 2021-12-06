//Importando o módulo que contém o construtor do aluno:
const aluno = require('./aluno');

//Criando o objeto aluno na variável teste:
let teste = new aluno("Guilherme",1,[10, 9, 10]);

//Passo 3:
let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [teste],
}

//Imprimindo o objeto curso criado:
console.log(curso);
console.log(curso.listaEstudantes);