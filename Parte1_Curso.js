//Passo 3 e Passo 4:
const aluno = require('./aluno');
let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [],
    adicionarAlunos: function (nome, faltas, notas){
        let novoAluno = new aluno(nome, faltas, notas);
        this.listaEstudantes.push(novoAluno);
    }
}

//Testando método adicionarAlunos:

curso.adicionarAlunos('Guilherme',0,[10,10,9]); // Adiciona o aluno Guilherme

console.log("Objeto curso com o aluno Guilherme:")
console.log(curso); // Imprime o objeto curso com o aluno Guilherme

curso.adicionarAlunos('Amanda',2,[8,8,7]); // Adiciona o aluno Amanda

console.log("Objeto curso com o aluno Guilherme e Amanda:")
console.log(curso); // Imprime o objeto curso com o aluno Guilherme e Amanda

console.log("Lista de Estudantes:")
console.log(curso.listaEstudantes); //Imprime somente a lista de objetos listaEstudantes
