'use client'

import Input from '@/components/Input'
import Card from '@/components/Card'
import React, { useState, useCallback } from 'react'
import debounce from 'lodash/debounce'
import { Vault } from '@/types/vaults'

interface SearchProps {
	results?: Vault[]
	isLoading?: boolean
	onSearch?: (value: string) => void
	placeholder?: string
	debounceMs?: number
	label?: string
	error?: string
}

const Search: React.FC<SearchProps> = ({
	results = [],
	isLoading,
	onSearch,
	placeholder = 'Search...',
	debounceMs = 300,
	label,
	error
}) => {
	const [value, setValue] = useState('')

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSearch = useCallback(
		debounce((searchTerm: string) => {
			onSearch?.(searchTerm)
		}, debounceMs),
		[onSearch, debounceMs]
	)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setValue(newValue)
		debouncedSearch(newValue)
	}

	return (
		<div className='relative w-full min-w-[310px]'>
			<Input
				label={label}
				value={value}
				onChange={handleInputChange}
				isLoading={isLoading}
				placeholder={placeholder}
				isValid={results?.length > 0}
				error={error}
			/>

			<div
				id='results'
				className={`
          absolute mt-[8px] z-50
					transition-all duration-200 ease-in-out
					${
						results.length > 0
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-2 pointer-events-none'
					}
				`}
			>
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
			</div>
		</div>
	)
}

export default Search
