'use client'

import { useQuery } from 'react-query'
import axios from 'axios'

const fetchGames = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	console.log('fetchGames')
	return response.json()
}

const GameList = () => {
	const { data, error, isLoading } = useQuery('posts', async () => {
		return axios.get('http://localhost:3000/api/games')
	})
	if (isLoading) {
		return <p>Loading... the games bruh</p>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div>
			<h1>Game List</h1>
			{JSON.stringify(data)}
		</div>
	)
}

export default GameList
