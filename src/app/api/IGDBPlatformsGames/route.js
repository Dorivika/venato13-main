import { IGDBWhereQueryBuilder } from '@/utilities/utilities'
import { NextResponse, NextRequest } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(req, res) {
	const fetchGames = async () => {
		const client_id = process.env.client_id
		const auth_token = process.env.auth_token
		const url = 'https://api.igdb.com/v4/games'
		const { searchParams } = new URL(req.url)
		const platformsFromQuery = searchParams.get('platforms').split(' ')

		const headers = {
			'Client-ID': client_id,
			Authorization: auth_token,
		}
		const whereQueryPart = IGDBWhereQueryBuilder(platformsFromQuery)

		const data = `
    fields name,slug,category,platforms,aggregated_rating, rating, cover.image_id, summary, genres.name;
    sort aggregated_rating desc;
    where ${whereQueryPart}; 
    limit 20;
    `

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: data,
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
