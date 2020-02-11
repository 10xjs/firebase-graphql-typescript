import gql from 'graphql-tag';

export const schema = gql`
  type UserIdentity {
    provider: String!
    ids: [String!]!
  }

  type User {
    id: String!
    provider: String!
    identities: [UserIdentity!]!
    picture: String
    name: String
    email: String
    emailVerified: Boolean
    phoneNumber: String
  }

  type UserError {
    message: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    test(value: String!): String!
  }
`;
