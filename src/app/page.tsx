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
						resultRenderer={(results) => (
							<Card className='border-borderPrimary border-[1px] min-w-[310px] max-w-[310px]'>
								<Card.Body className='max-h-[300px] overflow-y-auto'>
									{results.map((result, index) => (
										<div
											key={index}
											className='py-2 px-3 hover:bg-background/60 rounded-md cursor-pointer
									transition-colors duration-150 ease-in-out'
										>
											{JSON.stringify(result)}
										</div>
									))}
								</Card.Body>
							</Card>
						)}
					/>
				</Card.Body>
			</Card>
		</div>
	)
}
