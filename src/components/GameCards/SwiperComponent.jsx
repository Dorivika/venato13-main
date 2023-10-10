'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'

import { useQuery } from 'react-query'
import { Skeleton } from '@/components/ui/skeleton'
import GameCard from './GameCard'
import LazyLoadingCarousel from '../GameCards/LoadingFallback'
import { getGamesFromQuery } from '@/utilities/utilities'
import axios from 'axios'

const SwiperComponent = (props) => {
	const { queryKey, queryUrl, headingText } = props.category
	// console.log(headingText, queryKey, queryUrl)
	const queryFn = async () => {
		return axios.get(queryUrl)
	}
	const { data, isLoading, error } = useQuery({ queryKey, queryFn })

	// console.log(data)
	if (isLoading) {
		return (
			<div>
				<div className="container mx-auto h-full w-full gap-4 p-3 pb-0">
					<Skeleton className="mb-3 mt-5 h-10 w-64 rounded-full" />
					<LazyLoadingCarousel />
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex h-[350px] items-center justify-center rounded-xl bg-zinc-700 text-2xl text-slate-200">
				{error.message}
			</div>
		)
	}

	const games = data.data
	const filteredGames = getGamesFromQuery(games.data.results)
	return (
		<div>
			<p>{headingText}</p>

			<div className="hidden sm:block">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1280: {
							slidesPerView: 3,
						},
						1600: {
							slidesPerView: 4,
						},
					}}
				>
					{filteredGames.map((game, index) => (
						<SwiperSlide key={index}>
							<GameCard game={game} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sm:hidden">
				<Swiper
					navigation={true}
					effect={'fade'}
					modules={[Navigation, EffectFade]}
				>
					{filteredGames.map((game, index) => (
						<SwiperSlide key={index}>
							<GameCard game={game} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default SwiperComponent
