import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Carousel = (props) => {
	const items = [1, 2, 3, 4, 5, 6, 7, 7, 8, 98, 9, 85, 43, 56, 2]
	return (
		<div className="relative h-[340px] w-full overflow-hidden">
			<div
				className="grid place-items-center gap-4 overflow-x-auto lg:grid-cols-2 2xl:grid-cols-4"
				style={{ scrollBehavior: 'smooth' }}
			>
				{items.map((item, index) => (
					<div
						key={index}
						className="w-[328px] overflow-hidden rounded-2xl border border-zinc-700"
					>
						<Skeleton className="h-[220px] rounded-b-none" />
						<div className="h-28 p-3">
							<Skeleton className="h-6 w-1/2 rounded-full " />
							<div className=" mt-4 flex w-full items-center justify-between">
								<Skeleton className="h-10 w-1/2 rounded-full" />
								<Skeleton className="h-10 w-1/6 rounded-full" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
