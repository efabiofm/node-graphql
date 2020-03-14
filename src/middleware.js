import jwt from 'jwt-simple';
import moment from 'moment';

// function decodeToken(token) {
//   return jwt.decode(token, process.env.TOKEN_SECRET);
// }

function createToken(userId) {
  return jwt.encode({
    sub: userId,
    iat: moment().unix(),
    exp: moment().add(1, 'years').unix()
  }, process.env.TOKEN_SECRET);
}

export { createToken };
