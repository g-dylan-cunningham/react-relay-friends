import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('graph server set up')
});

app.listen(port, () => console.log(`graph server listening on localhost:${port}/graphql`))