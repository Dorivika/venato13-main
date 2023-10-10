import { NextResponse, NextRequest } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(req, res) {
	const fetchGames = async () => {
		const client_id = process.env.client_id
		const auth_token = process.env.auth_token
		const url = 'https://api.igdb.com/v4/games'
		const { searchParams } = new URL(req.url)
		const gameID = searchParams.get('gameID')

		const headers = {
			'Client-ID': client_id,
			Authorization: auth_token,
		}
		const bodyContent = `fields name, platforms, aggregated_rating, cover.image_id;where id = ${gameID};limit 10;`

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: bodyContent,
			})

			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			const games = await response.json()
			return games
		} catch (error) {
			throw error
		}
	}
	try {
		const games = await fetchGames()
		return NextResponse.json(games)
	} catch (error) {
		console.log(error)
		return NextResponse.status(500).json({ error: 'Internal Server Error' })
	}
}
