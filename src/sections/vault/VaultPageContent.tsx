import { getVaultAction } from '@/actions/vaults'
import { VaultFull } from '@/types/vaults'
import Vault from './Vault'
import { notFound } from 'next/navigation'
import { VaultPageProps } from '@/app/[chainId]/[vaultAddress]/page'
import { isAddress } from 'viem'

const VaultContent = async ({ params }: VaultPageProps) => {
	let vault: VaultFull | undefined
	const { chainId, vaultAddress } = await params

	if (isAddress(vaultAddress) && (chainId === '1' || chainId === '8453')) {
		try {
			const result = await getVaultAction({
				chainId,
				address: vaultAddress
			})

			if (!result?.data) {
				return notFound()
			}

			vault = result.data
		} catch {
			vault = undefined
		}
	}

	return <Vault vault={vault} />
}

export default VaultContent
