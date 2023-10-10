import React from 'react'
import dayjs from 'dayjs'
import CenterStageCarousel from '../BigGameCard/BigGameCarousel'
import GameCardCarousel from '../GameCards/GameCardCarousel'
import PortraitCoverGameCardCarousel from '@/components/PortraitCoverGameCard/PortraitCoverGameCardCarousel'
import GameList from '@/utilities/Games'
import SwiperComponent from '@/components/GameCards/SwiperComponent'

function Main() {
	const today = dayjs().format('YYYY-MM-DD')
	const mainPageCategoriesArray = [
		{
			queryKey: 'NewReleasedGames',
			queryUrl: `/api/newReleased?today=${today}`,
			headingText: 'Newly Released',
		},
		{
			queryKey: 'UpcomingGames',
			queryUrl: `/api/upcomingGames?today=${today}`,
			headingText: 'Upcoming Games',
		},
	]
	const mainPageIGDBPlatformsArray = [
		{
			queryKey: 'IGDBPSExclusives',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 48 167`,
			headingText: 'Playstation Exclusives',
		},
		{
			queryKey: 'IGDBXboxExclusives',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 11 12 49 169`,
			headingText: 'Microsoft Exclusives',
		},
		{
			queryKey: 'IGDBNintendoExclusives',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 130`,
			headingText: 'Nintendo Exclusives',
		},
	]
	// these platform queries dont work cause the API is shit, refactor to use the IGDB for this part
	return (
		<div className="mx-auto min-h-screen max-w-[1500px] px-4 ">
			<div className=" main-carousel rounded-xl ">
				<CenterStageCarousel />
			</div>

			<div className="">
				{mainPageCategoriesArray.map((category, index) => {
					return <SwiperComponent category={category} key={index} />
				})}
			</div>
			<div className="mt-4 max-h-fit">
				{mainPageIGDBPlatformsArray.map((category, index) => {
					return (
						<PortraitCoverGameCardCarousel
							key={index}
							queryKey={category.queryKey}
							queryUrl={category.queryUrl}
							headingText={category.headingText}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Main
