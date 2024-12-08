'use server'

import { query } from '@/lib/client';
import { gql } from '@apollo/client';

const QUERY = gql`
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

export async function getVaults(addresses: string[]) {
  const { data } = await query({ query: QUERY, variables: { addresses } })
  return data?.vaults.items
}

