export const schema = gql`
  type Record {
    id: Int!
    date: String!
    group: String
    location: String!
    numberOfVolunteers: Int
    totalWeight: Int!
    trashBagsUsed: Int
    cans: Int
    drums: Int
    glass: Int
    electronics: Int
    footwear: Int
    jerryCans: Int
    plasticContainers: Int
    plasticStraws: Int
    smokingRelated: Int
    tires: Int
    other: String
  }

  type Query {
    records: [Record!]! @skipAuth
    record(id: Int!): Record @skipAuth
    getLocation(lat: Float!, long: Float!): String @skipAuth
  }

  input CreateRecordInput {
    date: String!
    group: String
    location: String!
    numberOfVolunteers: Int
    totalWeight: Int!
    trashBagsUsed: Int
    cans: Int
    drums: Int
    glass: Int
    electronics: Int
    footwear: Int
    jerryCans: Int
    plasticContainers: Int
    plasticStraws: Int
    smokingRelated: Int
    tires: Int
    other: String
  }

  input UpdateRecordInput {
    date: String
    group: String
    location: String
    numberOfVolunteers: Int
    totalWeight: Int
    trashBagsUsed: Int
    cans: Int
    drums: Int
    glass: Int
    electronics: Int
    footwear: Int
    jerryCans: Int
    plasticContainers: Int
    plasticStraws: Int
    smokingRelated: Int
    tires: Int
    other: String
  }

  type Mutation {
    createRecord(input: CreateRecordInput!): Record! @skipAuth
    updateRecord(id: Int!, input: UpdateRecordInput!): Record! @requireAuth
    deleteRecord(id: Int!): Record! @requireAuth
  }
`
