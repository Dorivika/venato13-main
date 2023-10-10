'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
	const [game, setGame] = useState('')

	const handleInput = (e) => {
		setGame(e.target.value)
	}

	return (
		<>
			<div className="container flex items-center gap-2 w-full bg-[#fff] p-2 pl-3 rounded">
				<FontAwesomeIcon icon={faSearch} />
				<input
					type="text"
					value={game}
					onChange={handleInput}
					placeholder="Look Up A Game"
					className="w-[100%] ml-2 mt-1 border-none"
				/>
			</div>
		</>
	)
}

export default SearchBar
