//Passo 1:
    //Importando o módulo que contém o construtor do aluno:
    const aluno = require('./aluno');

    //Criando um aluno na variável aluno1 e aluno2:
    let aluno1 = new aluno("Guilherme",1,[10, 9, 10]);
    let aluno2 = new aluno("Amanda",2,[8, 8, 7]);

//Passo 2:
    //Método adicionado no módulo "aluno"

//Passo 3:
    let curso = {
        nomeCurso: 'Programação Imperativa',
        notaAprovacao: 7,
        faltasMaximas: 2,
        listaEstudantes: [aluno1, aluno2],
//Passo 4:
        adicionarAlunos: function (nome, faltas, notas){
            let novoAluno = new aluno(nome, faltas, notas);
            this.listaEstudantes.push(novoAluno);
        },
//Passo 5:
        aprovacao: function(alunox){
            let media = alunox.calcularMedia();
            if (media>=this.notaAprovacao && alunox.totalFaltas < this.faltasMaximas){
                return true;
            } else if (alunox.totalFaltas == this.faltasMaximas && media>this.notaAprovacao*1.1) {
                return true;
            } else{
                return false;
            }
        },
//Passo 6:
        aprovacaoListaEstudantes(){
            let listaAprovacao = [];
            for (let i2=0; i2<this.listaEstudantes.length; i2++){
                listaAprovacao.push(`${this.listaEstudantes[i2].nome}: ${this.aprovacao(this.listaEstudantes[i2])}`);
            }
            return listaAprovacao;
        }
    }

//Impressões no console:
    console.log(`--------------Passo 1 - Criação dos alunos:--------------`);
    console.log(aluno1);
    console.log(aluno2);

    console.log(`--------------Passo 2 - Incluir método calcularMedia e Faltas:--------------`)
    console.log(`O aluno ${aluno1.nome} tem média ${aluno1.calcularMedia()} e ${aluno1.totalFaltas} falta(s)`);
    console.log(`Após aplicar o método faltas() o aluno ${aluno1.nome} passou a ter ${aluno1.faltas()} falta(s)`);
    console.log(`O aluno ${aluno2.nome} tem média ${aluno2.calcularMedia()} e ${aluno2.totalFaltas} falta(s)`);
    console.log(`Após aplicar o método faltas() o aluno ${aluno2.nome} passou a ter ${aluno2.faltas()} falta(s)`);

    console.log(`--------------Passo 3 - Criar o objeto curso:--------------`);
    console.log("Objeto curso:");
    console.log(curso);
    console.log("Lista de estudantes dentro do objeto curso");
    console.log(curso.listaEstudantes);

    console.log(`--------------Passo 4 - Criar o método adicionar alunos dentro da lista de estudantes:--------------`);
    console.log("Adicionando o aluno Débora com o método adicionarAlunos()");
    curso.adicionarAlunos("Débora",2,[10, 9, 10]); // Adiciona o aluno Débora
    console.log(`Aluno ${curso.listaEstudantes[curso.listaEstudantes.length-1].nome} adicionado com sucesso!`)
    console.log("Nova lista de estudantes do objeto curso:");
    console.log(curso.listaEstudantes); //Imprime somente a lista de objetos listaEstudantes

    console.log(`--------------Passo 5 - Criar método para verificação da aprovação por aluno:--------------`);
    console.log(`O aluno ${aluno1.nome} foi aprovado(a)? ${curso.aprovacao(aluno1)}`);
    console.log(`O aluno ${aluno2.nome} foi aprovado(a)? ${curso.aprovacao(aluno2)}`);

    console.log(`--------------Passo 6 - Criar método para verificação da aprovação da lista de estudantes do objeto curso:--------------`);
    console.log(`Lista de aprovação (true - Aprovado / false - Reprovado):`)
    console.log(curso.aprovacaoListaEstudantes());


    console.log(`--------------Passo 7 - Incluir lista de estudantes do módulo estudantes para ser verificada:--------------`);

//Passo 7:
    const estudantes = require('./estudantes');
    curso.listaEstudantes = estudantes;

    console.log(`Lista de aprovação (true - Aprovado / false - Reprovado):`);
    console.log(curso.aprovacaoListaEstudantes());
