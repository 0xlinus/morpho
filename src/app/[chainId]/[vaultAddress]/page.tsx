import LoadingVault from '@/sections/vault/LoadingVault'
import { Suspense } from 'react'
import VaultContent from '@/sections/vault/VaultPageContent'

export type VaultPageProps = {
	params: Promise<{
		chainId: string
		vaultAddress: string
	}>
}

const VaultPage = async ({ params }: VaultPageProps) => {
	return (
		<Suspense fallback={<LoadingVault />}>
			<VaultContent params={params} />
		</Suspense>
	)
}

export default VaultPage
