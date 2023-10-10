import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest, res: NextResponse) {
	const fetchData = async () => {
		const url = 'https://api.rawg.io/api/games'
		const key = '27fdc1adf5384b60b1b4c1f20e69ecec'
		const { searchParams } = new URL(req.url)
		const gameID = searchParams.get('gameID')
		console.log(gameID)
		try {
			const response = await fetch(`${url}/${gameID}?key=${key}`)

			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			const data = await response.json()
			return data
		} catch (error: any) {
			console.error('Error:', error.message)
			throw error
		}
	}

	const data = await fetchData()
	return NextResponse.json({ data })
}
