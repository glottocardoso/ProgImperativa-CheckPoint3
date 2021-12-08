const aluno = class Aluno{
    constructor(nome, faltas, notas){
        this.nome = nome;
        this.totalFaltas = faltas;
        this.notas = notas;
        };
    
    calcularMedia(){
        let soma = 0;
        for (let i=0;i<this.notas.length;i++){
            soma=soma + this.notas[i];
        };
        let media = soma/this.notas.length;
        return media;
    }

    faltas(){
        this.totalFaltas = this.totalFaltas + 1;
    };

    exibirAluno(){
        return (`nome: ${this.nome}, faltas: ${this.totalFaltas}, notas: ${this.notas}`);
    }
}

module.exports = aluno;

