import Card from '@/components/Card'
import Error from '@/shared/layout/Error'

const NoVault = () => {
	return (
		<Card className='w-[365px] h-[435px]'>
			<Card.Body>
				<Error
					title='Oops!'
					message='Something went wrong, please try again.'
				/>
			</Card.Body>
		</Card>
	)
}

export default NoVault
