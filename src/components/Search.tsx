'use client'

import Input from '@/components/Input'
import React, { useState, useCallback } from 'react'
import debounce from 'lodash/debounce'
import { Vault } from '@/types/vaults'

interface SearchProps<T> {
	results?: T[]
	isLoading?: boolean
	onSearch?: (value: string) => void
	placeholder?: string
	debounceMs?: number
	label?: string
	error?: string
	resultRenderer?: (results: T[]) => React.ReactNode
}

const Search: React.FC<SearchProps<Vault>> = ({
	results = [],
	isLoading,
	onSearch,
	placeholder = 'Search...',
	debounceMs = 500,
	label,
	error,
	resultRenderer
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
		<div className='relative w-[310px]'>
			<Input
				label={label}
				value={value}
				onChange={handleInputChange}
				isLoading={isLoading}
				placeholder={placeholder}
				isValid={results?.length > 0}
				error={error}
				maxLength={45}
				onBlur={() => {
					debouncedSearch('')
				}}
			/>

			<div
				id='results'
				style={{
					marginTop: !error ? '-16px' : '6px'
				}}
				className={`
          absolute z-50
					transition-all duration-200 ease-in-out
					${
						results.length > 0 || !!error
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-2 pointer-events-none'
					}
				`}
			>
				{resultRenderer?.(results)}
			</div>
		</div>
	)
}

export default Search
