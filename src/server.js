import App from './App';

const application = new App();

const serv = application.getServer();

const PORT = 3000;

serv.listen(PORT);
