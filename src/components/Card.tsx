import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

interface CardCompositionProps {
	children: ReactNode
	className?: string
}

const Header: React.FC<CardCompositionProps> = ({ children, className }) => {
	return (
		<div className={cn('flex flex-col w-full', className)}>
			{children}
			<div className='border-b border-borderPrimary w-full pt-6' />
		</div>
	)
}

const Body: React.FC<CardCompositionProps> = ({ children, className }) => {
	return <div className={cn('p-4', className)}>{children}</div>
}

const Footer: React.FC<CardCompositionProps> = ({ children, className }) => {
	return <div className={cn('p-4', className)}>{children}</div>
}

const Card: React.FC<CardProps> & {
	Header: typeof Header
	Body: typeof Body
	Footer: typeof Footer
} = ({ children, className = '' }) => {
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center bg-card rounded-2xl shadow-lg shadow-black/3',
				className
			)}
		>
			{children}
		</div>
	)
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card
