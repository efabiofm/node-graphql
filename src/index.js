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

app.listen(
  process.env.PORT,
  () => console.info(`Server running on http://localhost:${process.env.PORT}`)
);
