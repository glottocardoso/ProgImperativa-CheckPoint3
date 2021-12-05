//Passo 7:
const aluno = require('./aluno');
const estudantes = require('./estudantes');
let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: estudantes,
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
    },
    aprovacaoListaEstudantes(){
        let listaAprovacao = [];
        for (let i2=0; i2<this.listaEstudantes.length; i2++){
            listaAprovacao.push(this.aprovacao(this.listaEstudantes[i2]));
        }
        return listaAprovacao;
    }
}

console.log(curso.aprovacaoListaEstudantes());

curso.adicionarAlunos("Guilherme",1,[10, 9, 10]);
curso.adicionarAlunos('Amanda',2,[8,8,7]);

console.log(curso.aprovacaoListaEstudantes());
