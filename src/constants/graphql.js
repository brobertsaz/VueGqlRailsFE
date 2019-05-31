import gql from 'graphql-tag'

export const BILLS_QUERY = gql`
  query BillsQuery {
    allBills(first: 30) {
      nodes {
        id
        number
        title
        breakdown
      }
    }
  }
`
