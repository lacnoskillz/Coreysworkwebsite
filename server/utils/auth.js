const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id, role, reviews }) {
    const payload = { email, username, _id , role, reviews};
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
