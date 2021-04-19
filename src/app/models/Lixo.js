export default class Lixo {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  getLixo() {
    return {
      nome: this.nome,
      tipo: this.tipo,
    };
  }
}
