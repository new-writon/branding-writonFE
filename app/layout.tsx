import type { Metadata } from 'next'
import '@/styles/global.css'

export const metadata: Metadata = {
	title: 'Writon',
	description: '글과 회고로 함께 성장하는 공간 : writon',
	icons: {
		icon: '/image/icon/writon_w.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	)
}
