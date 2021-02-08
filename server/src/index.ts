import { config as configEnv } from 'dotenv';
import express from 'express';

function startServer() {
  const app = express();
  configEnv();

  app.use(express.json());

  app.listen(process.env.SERVER_PORT, () => {
    console.log('server started...');
  });
}

(() => {
  startServer();
})();
