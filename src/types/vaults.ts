export type Vault = {
  name: string
  address: string
  image: string
  chainId: string
}

export type VaultState = {
  owner: string
  totalAssetsUsd: number
  netApy: number
}

export type VaultFull = Vault & {
  curators: string[]
  state: VaultState
}