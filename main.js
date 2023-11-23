class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDetalhes() {
        throw new Error("O método 'exibirDetalhes()' deve ser implementado pelas classes filhas.");
    }
}

class Cliente extends Pessoa {
    constructor(nome, idade, numeroConta, saldo) {
        super(nome, idade);
        this.numeroConta = numeroConta;
        this.saldo = saldo || 0;
    }

    exibirDetalhesCliente() {
        console.log(`Cliente: ${this.nome}, Idade: ${this.idade}, Número da Conta: ${this.numeroConta}, Saldo: R$${this.saldo}`);
    }

    exibirDetalhes() {
        this.exibirDetalhesCliente();
    }
}

class Conta {
    constructor(saldo) {
        this.saldo = saldo || 0;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    exibirDetalhes() {
        console.log(`Saldo: R$${this.saldo}`);
    }
}

// Cliente, Idade, Número da Conta, Saldo.

const cliente1 = new Cliente("Eduardo", 24, 123, 1000);
const cliente2 = new Cliente("Leonardo", 18, 456, 500);
const cliente3 = new Cliente("Isabela", 25, 789, 3000);

cliente1.exibirDetalhes();
cliente2.exibirDetalhes();
cliente3.exibirDetalhes();
