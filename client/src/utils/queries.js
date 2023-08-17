import { gql } from '@apollo/client';

// Define the GraphQL query
export const GET_ME = gql`
query Query {
     me {
          _id
          bookCount
          email
          savedBooks {
               authors
               bookId
               description
               image
               link
               title
          }
     username
     }
}
`;

// NOTE
// This query requests the same fields that your back-end me query returns.
// You can include additional fields in this query if your back-end me query returns more information.

// You can then use this GET_ME query in your React components to fetch user data from your GraphQL
// API using Apollo Client.
// Just remember to import the query and use the useQuery hook to retrieve and work with the data.
