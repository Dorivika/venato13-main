import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import React from 'react'
import { cn } from '@/lib/utils'

export default function StarRating(props) {
	const { rating, className } = props
	// console.log({ rating })
	const fullStars = Math.round(rating)
	const halfStars = Math.round((rating - fullStars) * 2)
	const emptyStars = 5 - fullStars - halfStars

	let starList = []
	for (let i = 0; i < fullStars; i++) {
		starList.push(<AiFillStar color="white" />)
	}
	for (let i = 0; i < halfStars; i++) {
		starList.push(<BsStarHalf color="white" />)
	}
	for (let i = 0; i < emptyStars; i++) {
		starList.push(<AiOutlineStar />)
	}
	return (
		<div className={cn('ratings flex text-2xl', className)}>{starList}</div>
	)
}
