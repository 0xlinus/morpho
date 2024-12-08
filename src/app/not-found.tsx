'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex flex-col gap-3 items-center justify-center'>
			<div className='flex flex-row gap-2 items-center justify-center'>
				<Image
					src='/images/icons/alert.svg'
					alt='Alert'
					width={20}
					height={21}
				/>
				<span className='text-[15px] font-medium'>Not Found</span>
			</div>
			<p className='text-[13px] text-textSecondary'>
				We could not find the page you were looking for.
			</p>
			<Button onClick={() => router.refresh()}>Try Again</Button>
		</div>
	)
}
