import Card from '@/components/Card'
import Input from '@/components/Input'
export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card className='h-[160px]'>
				<Card.Body>
					<Input
						label='Vault Address or Name'
						placeholder='Enter Vault Address or Name...'
						className='w-[310px]'
						isValid
					/>
				</Card.Body>
			</Card>
		</div>
	)
}
