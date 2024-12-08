import { cva } from 'class-variance-authority'

type ButtonProps = {
	iconRight?: React.ReactNode
	variant?: 'light' | 'primary'
	size?: 'default' | 'md' | 'circle'
	className?: string
	children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva(
	'inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary:
					'bg-buttonPrimary text-background hover:bg-buttonPrimaryHover transition ease-out duration-500 font-semibold focus:bg-buttonPrimaryFocus disabled:bg-buttonPrimaryDisabled rounded-3xl',
				light:
					'bg-bgButtonLight text-[#191D20F2] rounded-[3px] pr-[2px] pl-[8px] py-[3px] flex flex-row items-center h-[26px] leading-[16px]'
			},
			size: {
				default: 'h-[32px] px-4 py-2 text-[12px]',
				md: 'h-11 rounded-md px-8 text-[11px] font-medium',
				circle: 'w-[48px] h-[48px] p-0'
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
