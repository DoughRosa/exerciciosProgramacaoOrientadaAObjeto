// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
    itens: number;

    constructor (itens:number){
        this.itens = 0
    }

    zerar(){
        this.itens = 0
    }

    incrementar(){
        this.itens++
    }

    retornar(){
        console.log(this.itens);
    }
};

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola {
    cor: string;
    circunferencia: number;
    material: string;

    constructor(cor:string, circunferencia:number, material:string){
        this.cor = cor,
        this.circunferencia = circunferencia,
        this.material = material
    }

    trocarCor(cor:string){
        this.cor = cor
    }

    mostrarCor(){
        console.log(this.cor); 
    }
}

const bola = new Bola("preta", 50, "couro")

bola.trocarCor("azul");

bola.mostrarCor();

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

class ContaCorrente{
    numeroConta:number;
    nome:string;
    saldo:number;

    constructor(numeroConta:number, nome:string, saldo = 0){
        this.numeroConta = numeroConta,
        this.nome = nome,
        this.saldo = saldo 
    }

    alterarNome(novoNome:string){
        this.nome = novoNome
    };

    deposito(deposito:number){
        this.saldo += deposito
    }

    saque(saque:number){
        if(this.saldo-saque < 0){
            console.log(`Você não possui saldo suficiente. Seu saldo atual é ${this.saldo}`);
        } else{
            this.saldo -= saque
        }
    }
}

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora{
    historico: string[];

    constructor(historico:[]){
        this.historico = historico
    }

    somar(primeiroNumero:number, segundoNumero:number){
        const soma = primeiroNumero+segundoNumero;
        this.historico.push(`
        ${primeiroNumero} + ${segundoNumero} = ${soma}
        `)
    }

    subtracao(primeiroNumero:number, segundoNumero:number){
        const subtracao = primeiroNumero-segundoNumero;
        this.historico.push(`
        ${primeiroNumero} - ${segundoNumero} = ${subtracao}
        `)
    }

    multiplicacao(primeiroNumero:number, segundoNumero:number){
        const multiplicacao = primeiroNumero*segundoNumero;
        this.historico.push(`
        ${primeiroNumero} * ${segundoNumero} = ${multiplicacao}
        `)
    }

    divisao(primeiroNumero:number, segundoNumero:number){
        const divisao = primeiroNumero/segundoNumero;
        this.historico.push(`
        ${primeiroNumero} / ${segundoNumero} = ${divisao}
        `)
    }

    visualizarHistorico(){
        console.log(this.historico);        
    }
}

const calc = new Calculadora([])

calc.somar(2,5)

calc.visualizarHistorico()

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel

class BombaCombustivel{
    tipoCombistivel:string;
    valorLitro:number;
    quantidadeCombustivel:number

    constructor(tipoCombustivel:string, valorLitro:number, quantidadeCombustivel:number){
        this.tipoCombistivel = tipoCombustivel,
        this.valorLitro = valorLitro,
        this.quantidadeCombustivel = quantidadeCombustivel
    }

// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo

abastecerPorValor(valor:number){
    const litroAbastecidos = valor/this.valorLitro;
    console.log(litroAbastecidos);
}

// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.

abastecerPorLitro(valor:number){
    const valorAbastecido = valor*this.valorLitro;
    console.log(valorAbastecido);
}

// iii. alterarValor() – altera o valor do litro do combustível.

alterarValor(valor:number){
    this.valorLitro = valor;
}

// iv. alterarCombustivel() – altera o tipo do combustível.

alterarCombustivel(combustivel:string){
    this.tipoCombistivel = combustivel;
}

// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

alterarQuantidadeCombustivel(litrosAbastecidos:number){
    if(litrosAbastecidos > this.quantidadeCombustivel){
        console.log(
            `Não é possível abastecer esta quantidade de combustível, 
            esta bomba possui ${this.quantidadeCombustivel} de combustível 
            restantes`
        );    
    } else {
        this.quantidadeCombustivel -= litrosAbastecidos;
    }
}
}
// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.

class Carro{
    consumo:number;
    tanque:number;

    constructor(consumo:number, tanque = 0){
        this.consumo = consumo,
        this.tanque = tanque
    }
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

andar(distancia:number){
    const consumo = distancia/this.consumo
    this.tanque -= consumo
}

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

adicionarGasolina(gasolina:number){
    this.tanque += gasolina;
}

obterGasolina(){
    console.log(`Seu Veículo possui ${this.tanque}Litros`);  
}

}