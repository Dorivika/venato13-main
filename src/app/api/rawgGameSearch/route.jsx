import { NextRequest, NextResponse } from 'next/server'

export async function GET(req, res) {
	const fetchData = async () => {
		const key = process.env.RawgAPIKey
		const { searchParams } = new URL(req.url)
		const gameID = searchParams.get('gameID')
		const url = `https://api.rawg.io/api/games/${gameID}?key=${key}`
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}
			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error:', error.message)
			throw error
		}
	}

	const data = await fetchData()
	return NextResponse.json({ data })
}
