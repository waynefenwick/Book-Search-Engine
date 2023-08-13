const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express'); // Import ApolloServer
const db = require('./config/connection');
const routes = require('./routes');

// Import your GraphQL schema and resolvers
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Await the start of Apollo Server before applying middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});


// Key changes:

// Import ApolloServer from apollo-server-express.
// Import your GraphQL schema (typeDefs) and resolvers (resolvers).
// Create an instance of ApolloServer with the typeDefs and resolvers you've defined.
// Apply the Apollo Server instance as middleware using server.applyMiddleware({ app }).
// With these changes, your Express server will now have the Apollo Server middleware integrated. 
// This will allow you to handle GraphQL queries and mutations in addition to your existing routes.
// Make sure that your typeDefs and resolvers are properly defined and imported from their respective files.