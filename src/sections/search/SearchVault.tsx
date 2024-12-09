import { useMemo } from 'react'

import { getVaultsAction } from '@/actions/vaults'
import { useState } from 'react'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { useQuery } from '@tanstack/react-query'
import VaultsList from './VaultsList'

const SearchVault = () => {
	const [searchValue, setSearchValue] = useState('')
	const [error, setError] = useState<string | undefined>(undefined)

	const { data: vaultsResult, isLoading } = useQuery({
		queryKey: ['vaults', searchValue],
		queryFn: () => getVaultsAction({ q: searchValue }),
		retry: false,
		enabled: !!searchValue || !!error
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
		<Card className='h-[160px] w-[350px]'>
			<Card.Body className='h-full flex justify-center items-center p-6 px-0'>
				<Search
					placeholder='Search...'
					label='Vault Address or Name'
					onSearch={setSearchValue}
					results={vaults}
					isLoading={isLoading}
					error={error}
					resultRenderer={(results) => (
						<VaultsList vaults={results} searchValue={searchValue} />
					)}
				/>
			</Card.Body>
		</Card>
	)
}

export default SearchVault
