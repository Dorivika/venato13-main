'use client'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

import React from 'react'
import { useQuery } from 'react-query'

export default function Slug({ params }) {
	const { slug: gameID } = params
	const searchParams = useSearchParams()
	const api = searchParams.get('api')
	let queryFn
	let queryKey = 'game'
	if (api === 'rawg') {
		queryFn = async () => {
			return axios.get(`/api/rawgGameSearch?gameID=${gameID}`)
		}
	} else {
		queryFn = async () => {
			return axios.get(`/api/igdbGameSearch?gameID=${gameID}`)
		}
	}
	const { data, error, isLoading } = useQuery({ queryKey, queryFn })
	if (isLoading) {
		return <div className="h-full">Loading... the game bruh</div>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div className="h-full  bg-slate-700">
			{params.slug}
			{api === 'rawg'
				? JSON.stringify(data.data)
				: JSON.stringify(data.data[0])}
			{/* //! Implement the <GameDetails /> component */}
			{/* {api === 'rawg' ? (
				<GameDetails game={data.data} />
			) : (
				<GameDetails game={data} />
			)} */}
		</div>
	)
}
