'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import { refreshVaultAction } from '@/actions/vaults'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const RefreshButton = () => {
	const params = useParams()
	const chainId = params.chainId as string
	const vaultAddress = params.vaultAddress as string
	const [mounted, setMounted] = useState(false)

	const handleRefresh = async () => {
		await refreshVaultAction({ chainId, address: vaultAddress })
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<Button size='circle' onClick={handleRefresh} disabled={!mounted}>
			<Image
				src='/images/icons/double-arrow.svg'
				alt='Refresh'
				width={24}
				height={24}
			/>
		</Button>
	)
}

export default RefreshButton
