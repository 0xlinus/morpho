import { getVaultAction } from '@/actions/vaults'
import Vault from '@/sections/vault/Vault'
import { notFound } from 'next/navigation'
import { isAddress } from 'viem'

type VaultPageProps = {
	params: {
		chainId: string
		vaultAddress: string
	}
}

const VaultPage = async ({ params }: VaultPageProps) => {
	const { chainId, vaultAddress } = await params

	if (!isAddress(vaultAddress) || !chainId) {
		return notFound()
	}

	const result = await getVaultAction({ chainId, address: vaultAddress })

	if (!result?.data) {
		return notFound()
	}

	return <Vault vault={result.data} />
}

export default VaultPage
