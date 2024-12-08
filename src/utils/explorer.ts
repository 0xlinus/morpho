const EXPLORER_URLS: { [key: number]: string } = {
  1: 'https://etherscan.io',
  8453: 'https://basescan.org'
}

export const getExplorerUrl = (chainId: number, address: string): string => {
  const baseUrl = EXPLORER_URLS[chainId] || EXPLORER_URLS[1] // Default to Ethereum mainnet
  return `${baseUrl}/address/${address}`
} 