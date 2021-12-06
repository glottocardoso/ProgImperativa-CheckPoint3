//Passo 2:
    //Importando o módulo que contém o construtor do aluno:
    const aluno = require('./aluno');

    //Criação do aluno, na variável teste:
    let teste = new aluno("Guilherme",1,[10, 9, 10]);

    //Testando o método calcularMedia:
    console.log(teste.calcularMedia());
    
    //Testando o método faltas:
    console.log(teste.faltas());