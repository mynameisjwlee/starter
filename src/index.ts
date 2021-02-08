import express from 'express';
import { config as configEnv } from 'dotenv';

function startServer() {
  const app = express();
  configEnv();

  app.use(express.json());


  app.listen(process.env.PORT, () => {
    console.log('server started...');
  });
}

(() => {
  startServer();
})();
