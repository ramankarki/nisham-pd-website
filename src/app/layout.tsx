import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'AI solutions',
}

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className}`}>{children}</body>
		</html>
	)
}
