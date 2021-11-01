export const listFormSubmissions = `query ListFormSubmissions($nt: String) {
  listFormSubmissions(limit: 100, nextToken: $nt) {
    nextToken
    items {
      id
      message
      name
      phone
      email
      createdAt
    }
  }
}`