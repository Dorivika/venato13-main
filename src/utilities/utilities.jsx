// import { Input, Avatar } from '@nextui-org/react'

const platformsArrayCreator = (platformParentArray) => {
	if (platformParentArray) {
		return platformParentArray.map((entry) => {
			return entry?.platform?.name
		})
	}
}

export const IGDBWhereQueryBuilder = (platformsFromQuery) => {
	// console.log(platformsFromQuery)
	const platforms = platformsFromQuery.join()
	let string = `(platforms !=n & platforms = {${platforms}} & aggregated_rating > 80 & rating > 80 & first_release_date > 1325397661) | `
	platformsFromQuery.forEach((platform, index) => {
		if (index == platformsFromQuery.length - 1) {
			string += ` (platforms !=n & platforms = ${platform} & aggregated_rating > 88 & rating > 80 & first_release_date > 1325397661)`
		} else {
			string += ` (platforms !=n & platforms = ${platform} & aggregated_rating > 80 & rating > 80 & first_release_date > 1325397661) |`
		}
	})
	// console.log(string)
	return string
}

export const getGamesFromQuery = (games) => {
	return games.map((game) => {
		// console.log('platform Array', platformsArrayCreator(game.parent_platforms))
		return {
			id: game.id,
			slug: game.slug,
			name: game.name,
			bgImage: game.background_image || '',
			rating: game.rating || 'TBA',
			metacritic: game.metacritic || 'TBA',
			released: game.released || 'TBA',
			platforms: platformsArrayCreator(game?.parent_platforms) || 'TBA',
			genres: game.genres || 'TBA',
			screenshots: game.short_screenshorts || 'TBA',
			api: 'rawg',
		}
	})
}
