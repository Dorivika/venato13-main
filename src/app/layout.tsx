import './globals.css'
import ProfileCard from '../components/Sidebar/ProfileCard'
import Link from 'next/link'
import Providers from './Providers'
import { SearchBar, UserAvatar } from '@/utilities/UtilityComponents'
import Sidebar from '@/components/Sidebar/Sidebar'

import { Ubuntu } from 'next/font/google'
import DrawerSidebar from '@/components/DrawerSidebar'

export const metadata = {
	title: 'Venato',
	description: 'Your game manager',
}

const ubuntu = Ubuntu({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={ubuntu.className}>
			<body className="flex h-screen flex-col overflow-hidden">
				<Providers>
					<div className="flex h-full flex-col">
						<header className="flex items-center justify-between gap-3 p-3 px-6 shadow-md shadow-zinc-800">
							<div className="flex items-center gap-4">
								<DrawerSidebar />
								<Link
									href="/"
									className="hidden text-4xl font-bold text-yellow-500 min-[500px]:flex "
								>
									Venato
								</Link>
							</div>
							<SearchBar />

							<UserAvatar text="SM" />
						</header>
						<div className="flex h-[calc(100vh-110px)]">
							<nav className="my-6 ml-6 hidden h-full w-60 min-w-[300px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-4 lg:flex">
								<div className=" flex flex-col ">
									<Sidebar className="" />
								</div>
							</nav>
							<main className="my-6 h-full w-full overflow-y-auto text-white">
								<div className=" h-full">{children}</div>
							</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
