'use client'

import { getVaultsAction } from '@/actions/vaults'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
export default function Home() {
	const [searchValue, setSearchValue] = useState('')
	const [error, setError] = useState<string | undefined>(undefined)

	const { data: vaultsResult, isLoading } = useQuery({
		queryKey: ['vaults', searchValue],
		queryFn: () => getVaultsAction({ q: searchValue }),
		retry: false
	})

	const vaults = useMemo(() => {
		if (vaultsResult?.validationErrors?.q?._errors?.[0]) {
			setError(vaultsResult.validationErrors.q._errors[0])
			return
		} else if (vaultsResult?.serverError) {
			setError(vaultsResult.serverError)
			return
		} else if (vaultsResult?.data) {
			setError(undefined)
			return vaultsResult.data
		}
		return
	}, [vaultsResult])

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
						error={error}
					/>
				</Card.Body>
			</Card>
		</div>
	)
}
