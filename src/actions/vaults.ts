'use server'

import { InvalidAddressError } from '@/errors/InvalidAddress';
import { NotFoundError } from '@/errors/NotFound';
import { query } from '@/lib/client';
import { baseActionClient } from '@/lib/safe-actions';
import { vaultQuery, vaultSearchByFullAddressQuery, vaultSearchByNameQuery } from '@/queries/vault';
import { VaultFull, VaultSearchResult, VaultSearchResultFull } from '@/types/vaults';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate';
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

    if (q.startsWith('0x') && !isAddress(q)) {
      throw new InvalidAddressError()
    }

    if (isAddress(q)) {
      const { data } = await query({ query: vaultSearchByFullAddressQuery, variables: { addresses: [q] } })
      vaults = data?.vaults.items
    } else {
      const { data } = await query({ query: vaultSearchByNameQuery, variables: { search: q } })
      vaults = data?.vaults.items
    }

    if (!vaults.length) {
      throw new NotFoundError(`No vault found for this ${isAddress(q) ? 'address' : 'name'}.`)
    }

    return vaults.map((vault: VaultSearchResult) => ({
      name: vault.name,
      address: vault.address,
      image: vault.metadata.image,
      chainId: vault.chain.id
    }))
  })

const ZGetVaultAction = z.object({
  chainId: z.string(),
  address: z.string()
})

export const getVaultAction = baseActionClient
  .schema(ZGetVaultAction)
  .metadata({ actionName: 'getVault' })
  .action(async ({ parsedInput: { chainId, address } }) => {
    const { data } = await query({ query: vaultQuery, variables: { address, chainId: parseInt(chainId) } })
    const vault = data?.vaultByAddress as VaultSearchResultFull
    return {
      curators: vault.metadata.curators.map((curator: { name: string }) => curator.name),
      name: vault.name,
      state: vault.state,
      image: vault.metadata.image
    } as VaultFull
  })

export const refreshVaultAction = baseActionClient
  .schema(ZGetVaultAction)
  .metadata({ actionName: 'refreshVault' })
  .action(async ({ parsedInput: { chainId, address } }) => {
    revalidatePath(`/${chainId}/${address}`)
  })