export const schema = gql`
  type Record {
    id: Int!
    date: String!
    group: String!
    location: String!
    data: String!
  }

  type Query {
    records: [Record!]! @skipAuth
    record(id: Int!): Record @skipAuth
  }

  input CreateRecordInput {
    date: String!
    group: String
    location: String!
    data: String!
  }

  input UpdateRecordInput {
    date: String
    group: String
    location: String
    data: String
  }

  type Mutation {
    createRecord(input: CreateRecordInput!): Record! @skipAuth
    updateRecord(id: Int!, input: UpdateRecordInput!): Record! @requireAuth
    deleteRecord(id: Int!): Record! @requireAuth
  }
`
