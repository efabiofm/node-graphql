import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import User from './User';
import Auth from './Auth';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...User,
    ...Auth
  }
});

const schema = new GraphQLSchema({ query });

export default schema;
