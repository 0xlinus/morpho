import Card from '@/components/Card'

const LoadingVault = () => {
	return (
		<Card className='min-w-[365px] p-6 h-[485px]'>
			<Card.Header>
				<div className='flex flex-row gap-6 items-center justify-start'>
					<div className='w-[80px] h-[80px] rounded-full bg-gray-200 animate-pulse' />
					<div className='flex flex-col gap-2'>
						<div className='w-32 h-[18px] bg-gray-200 rounded animate-pulse' />
						<div className='w-24 h-[15px] bg-gray-200 rounded animate-pulse' />
					</div>
				</div>
			</Card.Header>
			<Card.Body className='flex flex-col gap-4 px-0 pt-6 items-start w-full'>
				<div className='flex flex-col gap-2'>
					<div className='w-40 h-[18px] bg-gray-200 rounded animate-pulse' />
					<div className='w-24 h-[15px] bg-gray-200 rounded animate-pulse' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='w-32 h-[18px] bg-gray-200 rounded animate-pulse' />
					<div className='w-20 h-[15px] bg-gray-200 rounded animate-pulse' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='w-28 h-[18px] bg-gray-200 rounded animate-pulse' />
					<div className='w-36 h-[15px] bg-gray-200 rounded animate-pulse' />
				</div>
			</Card.Body>
			<Card.Footer className='flex flex-row justify-end items-center w-full pr-0'>
				<div className='w-10 h-10 rounded-full bg-gray-200 animate-pulse' />
			</Card.Footer>
		</Card>
	)
}

export default LoadingVault
