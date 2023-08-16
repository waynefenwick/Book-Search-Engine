module.exports = {
  authMiddleware: function (context) {
    const authHeader = context.req.headers.authorization;

    if (!authHeader) {
      console.log('No authorization header found');
      return context;
    }

    try {
      const token = authHeader.split(' ')[1];
      const decodedToken = jwt.verify(token, secret);
      console.log('Decoded token:', decodedToken);
      context.user = decodedToken.data;
    } catch (error) {
      console.log('Invalid token:', error);
    }

    return context;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// Changes made to the updated auth.js:

// Instead of destructuring {req} from the parameter, use the context object directly.
// Remove the check for req.body.token and req.query.token since these are typically not used in GraphQL. The token is usually passed through the Authorization header.
// Modify how the token is extracted from the Authorization header.
// Instead of modifying the req object directly, set context.user to the decoded user data.
// Please note that the exact implementation might depend on how your GraphQL server is structured and how authentication is handled in your GraphQL resolvers.
// Make sure to integrate this updated auth.js according to your specific GraphQL setup.

// TESTED NPM START ON CLIENT AND SERVER: BOTH LOADED SUCESSFULLY WITH CHANGES