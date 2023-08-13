const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (context) {
    const authHeader = context.req.headers.authorization;

    if (!authHeader) {
      return context;
    }

    try {
      const token = authHeader.split(' ')[1];
      const decodedToken = jwt.verify(token, secret);
      context.user = decodedToken.data;
    } catch (error) {
      console.log('Invalid token');
    }

    return context;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};