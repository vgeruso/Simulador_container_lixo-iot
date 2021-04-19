import App from './App';

const application = new App();

const serv = application.server;

const PORT = 3000;

serv.listen(PORT);
