import Card from '@/components/Card'
import { Vault } from '@/types/vaults'

type VaultsListProps = {
	vaults: Vault[]
}

const VaultsList = ({ vaults }: VaultsListProps) => {
	return (
		<Card className='border-borderPrimary border-[1px] min-w-[310px] max-w-[310px]'>
			<Card.Body className='max-h-[300px] overflow-y-auto'>
				{vaults.map((vault, index) => (
					<div
						key={index}
						className='py-2 px-3 hover:bg-background/60 rounded-md cursor-pointer
									transition-colors duration-150 ease-in-out'
					>
						{JSON.stringify(vault)}
					</div>
				))}
			</Card.Body>
		</Card>
	)
}

export default VaultsList
