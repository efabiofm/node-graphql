import express from 'express';
import expressGraphQL from 'express-graphql';
import dbConnect from './database';
import schema from './schemas';

const app = express();

dbConnect();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(3001, () => console.info('Server running on http://localhost:3001'));
