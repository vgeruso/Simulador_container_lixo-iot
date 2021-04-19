import net from 'net';

import Container from './app/models/Container';
import moks from './moks';

export default class App {
  constructor() {
    this.server = net.createServer((con) => {
      con.on('data', (data) => {
        console.log(data);
        this.container.esvazia();
        console.log(this.container.getContainer());
        this.container.setCheio(false);
        this.encheContainer(this.container);
      });
    });

    // tcp://4.tcp.ngrok.io:13152
    this.client = net.createConnection({
      host: '4.tcp.ngrok.io',
      port: '13152',
    });

    this.container = new Container('555');
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
        console.log(ret);
        if (!ret) {
          console.log('cheio!');
          container.setCheio(true);
          this.client.write(`CHEIO ${container.getContainer().id}\r\n`);
        }
      }, sec);
    });
  }
}
