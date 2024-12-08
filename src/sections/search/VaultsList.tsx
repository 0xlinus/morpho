import Card from '@/components/Card'
import { Vault } from '@/types/vaults'
import Image from 'next/image'

type VaultsListProps = {
	vaults: Vault[]
}

const VaultsList = ({ vaults }: VaultsListProps) => {
	return (
		<Card className='border-solid border-borderPrimary border w-[310px] min-h-[53px]'>
			<Card.Body className='overflow-y-auto w-full py-2'>
				{!vaults.length && (
					<p className='text-center text-textSecondary'>No results :(</p>
				)}
				{vaults.map((vault, index) => (
					<div
						key={index}
						className='flex justify-between items-center cursor-pointer transition-colors duration-150 ease-in-out w-full py-2 hover:text-textSecondary group'
					>
						<div className='flex items-center gap-2'>
							<Image
								src={vault.image}
								alt={vault.name}
								width={24}
								height={24}
							/>
							<div className='text-textPrimary text-[13px] group-hover:text-black transition-colors duration-150 ease-in-out'>
								{vault.name}
							</div>
						</div>
						<Image
							src='/images/icons/arrow-right.svg'
							alt='arrow-right'
							width={10}
							height={10}
						/>
					</div>
				))}
			</Card.Body>
		</Card>
	)
}

export default VaultsList
