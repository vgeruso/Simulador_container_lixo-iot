import net from 'net';

import Container from './app/models/Container';
import moks from './moks';

export default class App {
  constructor() {
    // tcp://2.tcp.ngrok.io:16417
    this.client = net.createConnection({
      host: '2.tcp.ngrok.io',
      port: '16417',
    });

    this.container = new Container(1);
    if (!this.container.getIsCheio()) {
      this.encheContainer(this.container);
    }
  }

  encheContainer(container) {
    moks.forEach((lixo) => {
      const math = Math.floor(Math.random() * 10 + 1);
      const sec = `${math}000`;
      setTimeout(() => {
        const ret = container.setLixo(lixo);
        if (!ret) {
          container.setCheio(true);
          this.client.write(`CHEIO ${container.getContainer().id}`);
        }
      }, sec);
    });
  }

  getServer() {
    return net.createServer((con) => {
      con.on('data', (data) => {
        if (data.split(' ')[0] === 'CHEGUEI_CONTAINER') {
          this.container.esvazia();
        }
      });
    });
  }
}
