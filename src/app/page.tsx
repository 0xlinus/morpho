import Card from '@/components/Card'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card>
				<Card.Header>Header</Card.Header>
				<Card.Body>Body</Card.Body>
				<Card.Footer>Footer</Card.Footer>
			</Card>
		</div>
	)
}
