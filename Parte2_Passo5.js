//Passo 5:
const aluno = require('./aluno');
let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [],
    adicionarAlunos: function (nome, faltas, notas){
        let novoAluno = new aluno(nome, faltas, notas);
        this.listaEstudantes.push(novoAluno);
    },
    aprovacao: function(alunox){
        let media = this.calcularMedia(alunox.notas);
        if (media>=this.notaAprovacao && alunox.totalFaltas < this.faltasMaximas){
            return true;
        } else if (alunox.totalFaltas == this.faltasMaximas && media>this.notaAprovacao*1.1) {
            return true;
        } else{
            return false;
        }
    },
    calcularMedia(notas){
        let soma = 0;
        for (let i=0;i<notas.length;i++){
            soma=soma + notas[i];
        }
        let media = soma/notas.length;
        return media;
    }
}

console.log(curso.aprovacao({nome: 'Guilherme', totalFaltas: 0, notas:[ 10, 10, 9 ]}));