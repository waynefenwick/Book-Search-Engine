import { gql } from '@apollo/client';

// Mutation to add a user
export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
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
}
`;

// Mutation to log in a user
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
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
}
`;

// Mutation to remove a book
export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
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

// Mutation to save a book
export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
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

// NOTE:
// Just to recap:

// LOGIN_USER mutation is for logging in a user and retrieves a token and user data.
// ADD_USER mutation is for adding a new user and retrieves a token and user data.
// SAVE_BOOK mutation is for saving a book and retrieves user data with updated saved books.
// REMOVE_BOOK mutation is for removing a book and retrieves user data with updated saved books.
// Your mutations request the necessary data you need from the server, including user details,
// saved books, and relevant book information.
