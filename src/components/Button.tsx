import { cva } from 'class-variance-authority'

type ButtonProps = {
	iconRight?: React.ReactNode
	variant?: 'light' | 'primary'
	size?: 'default' | 'md'
	className?: string
	children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva(
	'inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-background hover:opacity-80 transition ease-out duration-500 font-semibold',
				light:
					'bg-bgButtonLight text-[#191D20F2] rounded-[3px] pr-[2px] pl-[8px] py-[3px] flex flex-row items-center h-[26px] leading-[16px]'
			},
			size: {
				default: 'h-10 px-4 py-2',
				md: 'h-11 rounded-md px-8 text-[11px] font-medium'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	}
)

const Button = ({
	iconRight,
	variant,
	size,
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<button className={buttonVariants({ variant, size, className })} {...props}>
			{children}
			{iconRight ? <span className='ml-[2px]'>{iconRight}</span> : null}
		</button>
	)
}

export default Button
