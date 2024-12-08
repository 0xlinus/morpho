'use server'

import { query } from '@/lib/client';
import { vaultSearchByFullAddressQuery, vaultSearchByNameQuery } from '@/queries/vault';
import { Vault } from '@/types/vaults';
import { isAddress } from 'viem';

export async function getVaults(q: string) {
  let vaults: Vault[] = []

  if (!q) return []
  if (isAddress(q)) {
    const { data } = await query({ query: vaultSearchByFullAddressQuery, variables: { addresses: [q] } })
    vaults = data?.vaults.items as Vault[]
  } else {
    const { data } = await query({ query: vaultSearchByNameQuery, variables: { search: q } })
    vaults = data?.vaults.items as Vault[]
  }

  if (!vaults.length) {
    throw new Error('No vaults found')
  }

  return vaults
}