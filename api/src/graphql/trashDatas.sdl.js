export const schema = gql`
  type TrashData {
    id: Int!
    data: String!
  }

  type Query {
    trashData(transcript: String!): TrashData @skipAuth
  }
`
