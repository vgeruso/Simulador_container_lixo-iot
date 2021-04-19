import Lixo from './Lixo';

export default class Container {
  constructor(id) {
    this.id = id;
    this.lixos = [];
    this.isCheio = false;
  }

  setLixo(obj) {
    const { nome, tipo } = obj;

    const lixo = new Lixo(nome, tipo);

    this.lixos.push(lixo.getLixo());

    if (this.lixos.length >= 100) {
      return false;
    }

    return true;
  }

  esvazia() {
    while (this.lixos.length) {
      this.lixos.pop();
    }
  }

  setCheio(isCheio) {
    this.isCheio = isCheio;
  }

  getIsCheio() {
    return this.isCheio;
  }

  getContainer() {
    return {
      id: this.id,
      lixos: this.lixos,
    };
  }
}
