import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	isValid?: boolean
	isLoading?: boolean
	className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, error, isValid, isLoading, className, ...props }, ref) => {
		return (
			<div className='flex flex-col gap-[8px]'>
				{label && (
					<label className='text-[13px] leading-[20px] font-medium text-textSecondary'>
						{label}
					</label>
				)}

				<div className='relative'>
					<input
						ref={ref}
						className={cn(
							'h-[36px] w-full rounded-md pl-4 py-2 pr-8',
							'bg-input transition-colors',
							'border border-transparent',
							'focus:outline-none focus:ring-1',
							error
								? 'border-inputBorderError text-textError placeholder:text-textError focus:border-inputBorderError focus:ring-inputBorderError'
								: isValid
								? 'border-inputBorderValid border-[0.5px] focus:border-inputBorderValid focus:ring-inputBorderValid'
								: 'focus:border-inputBorderFocus focus:ring-inputBorderFocus',
							isLoading && 'pr-10',
							className
						)}
						{...props}
					/>
					{isLoading && !error && !isValid && (
						<div className='absolute right-3 top-1/2 -translate-y-1/2'>
							<Image
								src='/images/icons/spinner.svg'
								alt='loading'
								width={16}
								height={15}
								className='animate-spin'
							/>
						</div>
					)}

					{isValid && !error && (
						<div className='absolute right-3 top-1/2 -translate-y-1/2'>
							<Image
								src='/images/icons/check.svg'
								alt='valid'
								width={17}
								height={16}
							/>
						</div>
					)}

					{error && (
						<div className='absolute right-3 top-1/2 -translate-y-1/2'>
							<Image
								src='/images/icons/cross.svg'
								alt='error'
								width={9}
								height={8}
							/>
						</div>
					)}
				</div>

				<div className='h-[20px]'>
					{error && (
						<p className='text-right font-medium leading-[16px] text-sm text-inputErrorMessage'>
							{error}
						</p>
					)}
				</div>
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
