import { gql } from '@apollo/client';

// Define the GraphQL query
export const GET_ME = gql`
     query me {
     me {
          _id
          username
          email
     }
     }
`;
