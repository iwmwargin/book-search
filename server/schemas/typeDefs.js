// import the gql tagged template function
const { gql } = require('apollo-server-express');
// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }
type Auth {
  token: ID!
  user: User
}
type Book {
  bookId: ID
  authors: [String]
  description: String
  image: String
  link: String
  title: String
}
type Query {
    me: User
  }
  type Mutation {
    login(email: String, username: String, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String],
      description: String!,
      bookId: String,
      image: String,
      link: String,
      title: String!
      ): User
    removeBook(bookId: ID): User
  }
`;

// export the typeDefs
module.exports = typeDefs;