import Card from '@/components/Card'
import { VaultFull } from '@/types/vaults'
import Image from 'next/image'
import NoVault from './NoVault'
import Link from 'next/link'
import { getExplorerUrl } from '@/utils/explorer'
import RefreshButton from './RefreshButton'

const Vault = ({ vault }: { vault?: VaultFull }) => {
	if (!vault) {
		return <NoVault />
	}

	return (
		<Card className='min-w-[365px] p-6 h-[485px]'>
			<Card.Header>
				<div className='flex flex-row gap-5 items-center justify-start'>
					<Image src={vault.image} alt={vault.name} width={80} height={80} />
					<div className='flex flex-col gap-2'>
						<div className='text-[18px] font-medium text-black'>
							{vault.name}
						</div>
						<div className='text-[15px] text-textSecondary'>
							{vault.curators.join(',')}
						</div>
					</div>
				</div>
			</Card.Header>
			<Card.Body className='flex flex-col gap-4 px-0 pt-6 items-start w-full'>
				<div className='flex flex-col gap-2'>
					<div className='text-[18px] font-medium text-black'>
						Total Supply (USD)
					</div>
					<div className='text-[15px] text-textSecondary'>
						{(() => {
							const value = vault.state.totalAssetsUsd
							if (value >= 1_000_000) {
								return `$${(value / 1_000_000).toFixed(2)}M`
							}
							return new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD'
							}).format(value)
						})()}
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='text-[18px] font-medium text-black'>
						Instant Net APY
					</div>
					<div className='text-[15px] text-textSecondary'>
						{(vault.state.netApy * 100).toFixed(2)}%
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='text-[18px] font-medium text-black'>Vault Owner</div>
					<Link
						href={getExplorerUrl(Number(vault.chainId), vault.state.owner)}
						target='_blank'
						className='flex flex-row gap-1 items-center text-[15px] text-textSecondary'
					>
						{`${vault.state.owner.slice(0, 6)}...${vault.state.owner.slice(
							-4
						)}`}
						<Image
							src='/images/icons/arrow-right-up.svg'
							alt='Vault Owner'
							width={20}
							height={20}
						/>
					</Link>
				</div>
			</Card.Body>
			<Card.Footer className='flex flex-row justify-end items-center w-full pr-0'>
				<RefreshButton />
			</Card.Footer>
		</Card>
	)
}

export default Vault
