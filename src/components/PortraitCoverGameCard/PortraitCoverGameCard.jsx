import React from 'react'
import Platforms from '@/utilities/Platforms'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GenreChips } from '@/utilities/UtilityComponents'
import Image from 'next/image'

function PortraitCoverGameCard({ game }) {
	return (
		<div className="mx-1 max-h-fit w-[480px] rounded-xl  bg-transparent sm:h-full sm:max-h-[480px] ">
			<div className="flex flex-col overflow-hidden rounded-xl bg-zinc-800 pb-2 sm:h-full sm:flex-row sm:pb-0">
				<Image
					width="355"
					height="476"
					src={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover?.image_id}.jpg`}
					alt={`${game.name}'s game cover`}
					className="hidden max-w-[50%] rounded-t-xl object-cover sm:block sm:rounded-l-xl"
					loading="eager"
				/>
				<Image
					width="355"
					height="476"
					layout="responsive"
					src={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover?.image_id}.jpg`}
					alt={`${game.name}'s game cover`}
					className="max-w-[50%] rounded-t-xl object-cover sm:hidden sm:rounded-l-xl"
					loading="eager"
				/>
				<div className="-mt-12 flex flex-col justify-between bg-opacity-20 py-2 backdrop-blur-lg backdrop-filter sm:mt-0">
					<div className="flex flex-col gap-2">
						<div className="px-4 pt-4">
							<p className="name line-clamp-2 text-2xl font-semibold ">
								{game.name}
							</p>
							<div className="line-clamp-3 text-gray-300 sm:line-clamp-6">
								{game?.summary}
							</div>
						</div>
						<div className="mt-1 flex items-center gap-1 px-4">
							<span className="rating">Rating:</span>
							<div className="rating-icon">
								{/* Replace this with your preferred rating representation */}
								{Array.from({
									length: Math.floor(game?.aggregated_rating / 20),
								}).map((_, index) => (
									<span key={index} className="text-amber-500">
										★
									</span>
								))}
							</div>
						</div>
						<GenreChips genres={game?.genres} className="mt-2 px-4" />
					</div>
					<div className="mt-4 flex w-full items-center justify-between px-4 py-1 @container">
						<Platforms platforms={game?.platforms} />
						<Link href={`/${game.id}?api=igdb`}>
							<Button
								variant="ghost"
								className="rounded-full border border-amber-500 text-amber-500 hover:bg-amber-500 @[230px]:w-[120px]"
							>
								<p className="mr-1 hidden @[230px]:inline ">Check Out</p>
								<FiArrowUpRight />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortraitCoverGameCard
