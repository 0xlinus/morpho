import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<div className='flex flex-row bg-background z-50 h-[50px] py-3 px-10 items-center justify-between border-b border-borderPrimary absolute top-0 left-0 right-0'>
			<div className='flex flex-row items-center w-[134px] justify-between'>
				<Image
					src='/images/logo.svg'
					width={24}
					height={24}
					alt='Logo'
					className='h-6'
				/>
				<Link
					href='/'
					className='text-[13px] text-textPrimary leading-[16px] cursor-pointer'
				>
					Morpho Test
				</Link>
			</div>
			<Button
				variant='light'
				size='md'
				iconRight={
					<Image
						src='/images/icons/arrow-right-up.svg'
						alt='Arrow right up'
						width={20}
						height={20}
					/>
				}
			>
				<Link href='https://github.com/0xlinus/morpho' target='_blank'>
					Go to Github Repo
				</Link>
			</Button>
		</div>
	)
}

export default Header
