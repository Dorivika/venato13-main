'use client'

import { useQuery } from 'react-query'
import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { getGamesFromQuery } from '@/utilities/utilities'
import { Skeleton } from '@/components/ui/skeleton'

function CenterStageCarousel(props) {
	const today = new Date().toLocaleString('en-CA', {
		dateStyle: 'short',
	})
	const { data, error, isLoading } = useQuery('CenterCardGames', async () => {
		return axios.get(`/api/games?today=${today}`)
	})
	if (isLoading) {
		return (
			<div className="h-[77.5vh] overflow-hidden rounded-xl">
				<Skeleton className="flex h-full w-full rounded-xl">
					<Skeleton className="left flex h-full w-[80%] items-end justify-start">
						<Skeleton className="flex flex-col rounded-none rounded-tr-xl bg-zinc-500 p-5">
							<Skeleton className="mb-2 h-10 w-[500px] bg-zinc-900" />
							<Skeleton className="h-4 w-32 bg-zinc-900" />
							<div className="mt-4 flex items-center gap-6">
								<Skeleton className="h-12 w-48 bg-zinc-900" />
								<Skeleton className="h-8 w-36 bg-zinc-900" />
							</div>
						</Skeleton>
					</Skeleton>
					<Skeleton className="right flex h-full w-[20%] items-start justify-end">
						<Skeleton className="h-16 w-16 rounded-none rounded-bl-xl bg-zinc-500" />
					</Skeleton>
				</Skeleton>
			</div>
		)
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	const games = data.data
	// console.log(games.data.results)
	const filteredGames = getGamesFromQuery(games.data.results)
	return (
		<Carousel
			className="h-[40vh] sm:h-[77.5vh]"
			indicatorContainerProps={{
				style: {
					display: 'none',
				},
			}}
			interval="5000"
		>
			{filteredGames.map((game, i) => (
				<GameCardCenterStage key={i} game={game} />
			))}
		</Carousel>
	)
}

export default CenterStageCarousel
