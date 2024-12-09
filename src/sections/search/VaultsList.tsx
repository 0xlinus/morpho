import Card from '@/components/Card'
import { Vault } from '@/types/vaults'
import Image from 'next/image'
import Link from 'next/link'

type VaultsListProps = {
	vaults: Vault[]
	searchValue: string
}

const VaultsList = ({ vaults, searchValue }: VaultsListProps) => {
	return (
		<Card className='border-solid border-borderPrimary border w-[310px] min-h-[53px]'>
			<Card.Body className='overflow-y-auto w-full py-2'>
				{!vaults.length && searchValue && (
					<p className='text-center text-textSecondary'>No results :(</p>
				)}
				{vaults.map((vault, index) => (
					<Link
						key={index}
						href={`/${vault.chainId}/${vault.address}`}
						className='flex justify-between items-center cursor-pointer hover:cursor-pointer transition-colors duration-150 ease-in-out w-full py-2 hover:bg-rowHover px-4 group rounded-xl'
					>
						<div className='flex items-center gap-2 cursor-pointer'>
							<Image
								src={vault.image}
								alt={vault.name}
								width={24}
								height={24}
								className='cursor-pointer'
							/>
							<div className='text-textPrimary text-[13px] cursor-pointer'>
								{vault.name}
							</div>
						</div>
						<Image
							src='/images/icons/arrow-right.svg'
							alt='arrow-right'
							width={10}
							height={10}
							className='cursor-pointer'
						/>
					</Link>
				))}
			</Card.Body>
		</Card>
	)
}

export default VaultsList
