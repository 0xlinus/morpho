'use client'

import Card from '@/components/Card'
import Search from '@/components/Search'
export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card className='h-[160px]'>
				<Card.Body>
					<Search
						placeholder='Search...'
						label='Vault Address or Name'
					/>
				</Card.Body>
			</Card>
		</div>
	)
}
