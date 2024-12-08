import { notFound } from 'next/navigation'
import { isAddress } from 'viem'

type VaultPageProps = {
	params: {
		chainId: string
		vaultAddress: string
	}
}

const VaultPage = async ({ params }: VaultPageProps) => {
	const { chainId, vaultAddress } = params

	if (!isAddress(vaultAddress) || !chainId) {
		return notFound()
	}

	return (
		<div>
			<p>Chain ID: {chainId}</p>
			<p>Vault Address: {vaultAddress}</p>
		</div>
	)
}

export default VaultPage
