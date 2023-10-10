import style from './CenterStage.module.scss'
import { Button } from '@/components/ui/button'
import StarRating from '@/utilities/StarRating'
import { MetacriticSquare } from '@/utilities/UtilityComponents'
import Link from 'next/link'

const GameCardCenterStage = ({ game }) => {
	let { id, slug, name, bgImage, rating, metacritic, released } = game

	const releasedDate = new Date(released).toLocaleString('en-us', {
		month: 'long',
		year: 'numeric',
	})

	return (
		<Link href={`/${game.id}?api=rawg`}>
			<div
				className={`flex h-[40vh] w-full overflow-visible p-1 pt-[2px] sm:h-[77.5vh] sm:p-2`}
			>
				<div
					style={{
						backgroundImage: `url(${bgImage})`,
						borderRadius: '16px',
					}}
					className={` game-card-content flex h-full w-full text-white ${style.bgimage} overflow-hidden outline outline-2 outline-amber-500/70`}
				>
					<div className="z-10 w-full">
						<div className="left flex h-full max-w-[1000px] flex-col items-start justify-end gap-4  ">
							<div className="flex flex-col items-start gap-2 rounded-bl-2xl rounded-tr-2xl bg-black bg-opacity-50 bg-clip-padding p-2 pb-0 pl-3 pr-4 shadow-lg backdrop-blur-md backdrop-filter sm:p-4 sm:px-6">
								<p className="text-lg font-bold sm:text-5xl">{name}</p>
								<p className="text-xs text-gray-300 sm:mb-4 sm:text-sm">
									{releasedDate}
								</p>
								<div className="flex items-center justify-center gap-4 sm:pb-2">
									<Button
										className="hidden sm:block"
										ghost
										size="lg"
										color="warning"
									>
										Check it out
									</Button>
									<StarRating className="hidden sm:flex" rating={rating} />
								</div>
							</div>
						</div>
					</div>
					<div className="right z-10 flex h-full items-start justify-end">
						<MetacriticSquare
							className="p-3 text-sm sm:p-4 sm:text-xl"
							score={parseInt(metacritic)}
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default GameCardCenterStage
