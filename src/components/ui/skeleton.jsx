import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-zinc-700/90', className)}
			{...props}
		/>
	)
}

export { Skeleton }
