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

export type VaultSearchResult = {
  address: string
  chain: {
    id: string
  }
  metadata: {
    image: string
  }
  name: string
}

export type VaultSearchResultFull = {
  metadata: {
    image: string
    curators: {
      name: string
    }[]
  }
  name: string
  state: {
    owner: string
    totalAssetsUsd: number
    netApy: number
  }
}

