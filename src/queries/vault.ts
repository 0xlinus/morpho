import { gql } from '@apollo/client';

export const vaultSearchByFullAddressQuery = gql`
  query VaultSearchByFullAddress($addresses: [String!]) {
    vaults(first: 10, where: { whitelisted: true, address_in: $addresses }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`

export const vaultSearchByNameQuery = gql`
  query VaultSearchByName($search: String!) {
    vaults(first: 10, where: { whitelisted: true, search: $search }) {
      items {
        address
      chain {
        id
      }
      metadata {
        image
        }
        name
      }
    }
  }
`
