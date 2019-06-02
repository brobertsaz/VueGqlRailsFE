import gql from 'graphql-tag'

export const BILLS_QUERY = gql`
  query BillsQuery($first: Int) {
    allBills(first: $first) {
      nodes {
        id
        number
        title
        breakdown
      }
    }
  }
`

export const BILL_QUERY = gql`
  query BillQuery($billId: ID!) {
    bill(id: $billId) {
      id
      number
      title
      breakdown
    }
  }
`
