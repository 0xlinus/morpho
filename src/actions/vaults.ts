'use server'

import { NotFoundError } from '@/errors/NotFound';
import { query } from '@/lib/client';
import { baseActionClient } from '@/lib/safe-actions';
import { vaultSearchByFullAddressQuery, vaultSearchByNameQuery } from '@/queries/vault';
import { VaultSearchResult } from '@/types/vaults';
import { isAddress } from 'viem';
import { z } from 'zod';

const ZGetVaultsAction = z.object({
  q: z.string().min(0).max(45)
})

export const getVaultsAction = baseActionClient
  .schema(ZGetVaultsAction)
  .metadata({ actionName: 'getVaults' })
  .action(async ({ parsedInput: { q } }) => {
    if (!q) return []

    let vaults: VaultSearchResult[] = []

    if (isAddress(q)) {
      const { data } = await query({ query: vaultSearchByFullAddressQuery, variables: { addresses: [q] } })
      vaults = data?.vaults.items
    } else {
      const { data } = await query({ query: vaultSearchByNameQuery, variables: { search: q } })
      vaults = data?.vaults.items
    }

    if (!vaults.length) {
      throw new NotFoundError('Vault')
    }

    return vaults.map((vault: VaultSearchResult) => ({
      name: vault.name,
      address: vault.address,
      image: vault.metadata.image,
      chainId: vault.chain.id
    }))
  })
