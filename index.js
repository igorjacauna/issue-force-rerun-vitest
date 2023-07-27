import express from 'express';
import example from './src/example';

export function start() {
  const port = 5173;
  const app = express();
  app.use('*', example);
  return app
    .listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    })
    .on('error', e => {
      console.error('Cannot start server: ', e.message);
    });
}
