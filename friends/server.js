import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
console.log('graogh gtt;', graphqlHTTP)
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('graph server set up')
});

// simple resolver
const root = { hello: "this is the response for hello query" }

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log(`graph server listening on localhost:${port}/graphql`))