import { GraphQLString } from 'graphql';
import { UserType } from './User';
import { createToken } from '../middleware';
import UserModel from '../models/User';

const signin = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (_, { email, password }) => {
    try {
      let isMatch;
      const userDoc = await UserModel.findOne({ email });
      if (userDoc) {
        isMatch = await userDoc.comparePassword(password);
      }
      if (!isMatch) {
        throw new Error('Invalid email or password');
      }
      const userJSON = userDoc.toJSON();
      userJSON.token = createToken(userJSON._id);
      return userJSON;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

export default {
  signin
};
