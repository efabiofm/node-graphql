import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import UserModel from '../models/User';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

const users = {
  type: new GraphQLList(UserType),
  resolve: async () => await UserModel.find()
};

const user = {
  type: UserType,
  args: {
    _id: { type: GraphQLString }
  },
  resolve: async (_, args) => await UserModel.findById(args._id)
};

export { UserType };

export default {
  user,
  users
};
