'use client'

import { useQuery } from 'react-query'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import LazyLoadingCarousel from '../GameCards/LoadingFallback'
import { getGamesFromQuery } from '@/utilities/utilities'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function GameCards(props) {
	const { queryKey, queryUrl, headingText } = props
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
		<div className="flex w-full flex-col justify-center ">
			<p className="my-4 pl-2 text-2xl sm:text-4xl">{headingText}</p>
			{/* <Glider
        hasArrows
        slidesToShow={1.2}
        slidesToScroll={1}
        scrollLock
        responsive={[
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3.2,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1580,
            settings: {
              slidesToShow: 4.2,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 2080,
            settings: {
              slidesToShow: "auto",
              slidesToScroll: "auto",
            },
          },
        ]}
      >
        {filteredGames.map((game, index) => (
          <GameCard game={game} key={index} />
        ))}
      </Glider> */}
			{/* <Swiper className="h-[300px]">
				{filteredGames.map((game, index) => (
					<SwiperSlide className="h-[300px] w-full" key={index}>
						<GameCard game={game} />
						<p>hi</p>
					</SwiperSlide>
				))}
			</Swiper> */}
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className="border border-red-800 bg-white text-black">
					Slide 1
				</SwiperSlide>
				<SwiperSlide className="border border-red-800 bg-white text-black">
					Slide 2
				</SwiperSlide>
				<SwiperSlide className="border border-red-800 bg-white text-black">
					Slide 3
				</SwiperSlide>
				<SwiperSlide className="border border-red-800 bg-white text-black">
					Slide 4
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default GameCards

{
	/* <Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={true}
				className=""
				containerClass="container h-full"
				customLeftArrow={false}
				customRightArrow={false}
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={true}
				partialVisible={false}
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={true}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 4,
						partialVisibilityGutter: 80,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 50,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass="h-full"
				itemClass=""
				slidesToSlide={1}
				swipeable={false}
			>
				{filteredGames.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</Carousel> */
	;<Swiper></Swiper>
}
