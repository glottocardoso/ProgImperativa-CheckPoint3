//Passo 7:
const aluno = require('./aluno');
const estudantes = require('./estudantes');
let curso = {
    nomeCurso:'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: estudantes,
    adicionarAlunos: function (nome, faltas, notas){
        let novoAluno = new aluno(nome, faltas, notas);
        this.listaEstudantes.push(novoAluno);
    },
    aprovacao: function(alunox){
        let media = alunox.calcularMedia(); //Método existente dentro do objeto aluno quando este foi criado pela class Aluno
        if (media>=this.notaAprovacao && alunox.totalFaltas < this.faltasMaximas){
            return true;
        } else if (alunox.totalFaltas == this.faltasMaximas && media>this.notaAprovacao*1.1) {
            return true;
        } else{
            return false;
        }
    },
    aprovacaoListaEstudantes(){
        let listaAprovacao = [];
        for (let i2=0; i2<this.listaEstudantes.length; i2++){
            listaAprovacao.push(this.aprovacao(this.listaEstudantes[i2]));
        }
        return listaAprovacao;
    }
}
//Imprimindo o resultado da lista de estudantes presente no módulo estudantes:
console.log(curso.aprovacaoListaEstudantes());

//Adicionando mais dois alunos:
curso.adicionarAlunos("Guilherme",1,[10, 9, 10]);
curso.adicionarAlunos('Amanda',2,[8,8,7]);

//Imprimindo o resultado da lista de estudantes com os dois novos alunos:
console.log(curso.aprovacaoListaEstudantes());
