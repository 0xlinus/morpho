import type { Metadata } from 'next'
import './globals.css'
import Header from '@/shared/layout/Header'

import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/ApolloWrapper'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Morpho Test',
	description: 'Case Study - Developing a Vault info card'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<ApolloWrapper>
					<Header />
					{children}
				</ApolloWrapper>
			</body>
		</html>
	)
}
