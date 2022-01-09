export const ListFormSubmissions = `query ListFormSubmissions($nt: String) {
  listFormSubmissions(limit: 100, nextToken: $nt) {
    nextToken
    items {
      id
      name
      email
      phone
      message
      has_contacted
      is_interested
      notes
      createdAt
    }
  }
}`

export const UpdateHasContacted = `mutation UpdateFormSubmissions(
  $id: ID!, 
  $has_contacted: Boolean!
) {
  updateFormSubmission(
    input: {
      id: $id,
      has_contacted: $has_contacted
    }
  ){
    id
    name
    email
    phone
    message
    has_contacted
    is_interested
    notes
    createdAt
  }
}`

export const UpdateIsInterested = `mutation UpdateFormSubmissions(
  $id: ID!, 
  $is_interested: Boolean!
) {
  updateFormSubmission(
    input: {
      id: $id,
      is_interested: $is_interested
    }
  ){
    id
    name
    email
    phone
    message
    has_contacted
    is_interested
    notes
    createdAt
  }
}`

export const UpdateNotes = `mutation UpdateFormSubmissions(
  $id: ID!, 
  $notes: String!
) {
  updateFormSubmission(
    input: {
      id: $id,
      notes: $notes
    }
  ){
    id
    name
    email
    phone
    message
    has_contacted
    is_interested
    notes
    createdAt
  }
}`