'use client'

import { getVaults } from '@/actions/vaults'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
export default function Home() {
	const [searchValue, setSearchValue] = useState('')
	const {
		data: vaults,
		isLoading,
		error
	} = useQuery({
		queryKey: ['vaults', searchValue],
		queryFn: () => getVaults(searchValue),
		retry: false
	})
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card className='h-[160px]'>
				<Card.Body>
					<Search
						placeholder='Search...'
						label='Vault Address or Name'
						onSearch={setSearchValue}
						results={vaults}
						isLoading={isLoading}
						error={error?.message}
					/>
				</Card.Body>
			</Card>
		</div>
	)
}
