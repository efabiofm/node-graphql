import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import User from './User';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...User
  }
});

const schema = new GraphQLSchema({ query });

export default schema;
