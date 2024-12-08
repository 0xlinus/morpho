import LoadingVault from '@/sections/vault/LoadingVault'
import { notFound } from 'next/navigation'
import { isAddress } from 'viem'
import { Suspense } from 'react'
import VaultContent from '@/sections/vault/VaultPageContent'

export type VaultPageProps = {
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
		<Suspense fallback={<LoadingVault />}>
			<VaultContent params={params} />
		</Suspense>
	)
}



export default VaultPage
