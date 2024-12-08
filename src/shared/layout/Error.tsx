'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type ErrorProps = {
	title: string
	message: string
	variant?: 'default' | 'small'
}

const Error = ({ title, message, variant = 'default' }: ErrorProps) => {
	const router = useRouter()

	return (
		<div className='flex flex-col gap-3 items-center justify-center'>
			<div className='flex flex-row gap-2 items-center justify-center'>
				<Image
					src='/images/icons/alert.svg'
					alt='Alert'
					width={variant === 'small' ? 20 : 32}
					height={variant === 'small' ? 20 : 32}
				/>
				<span
					className={`text-[${
						variant === 'small' ? '16' : '24'
					}px] font-medium`}
				>
					{title}
				</span>
			</div>
			<p className='text-[13px] text-textSecondary'>{message}</p>
			<Button onClick={() => router.refresh()}>Try Again</Button>
		</div>
	)
}

export default Error
