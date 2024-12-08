import Error from '@/shared/layout/Error'

export default function NotFound() {
	return (
		<Error
			title='Not Found'
			message='We could not find the page you were looking for.'
			variant='small'
		/>
	)
}
