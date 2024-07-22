import React from "react"
import { MdSearch } from "react-icons/md"

const Seacrh = ({ handleSearchNote }) => {
	return (
		<div className="flex items-center bg-gray-200 rounded-xl p-2 mb-4 mt-2">
			<MdSearch className="text-gray-600" size="1.3em" />
			<input
				onChange={(event) => handleSearchNote(event.target.value)}
				className="bg-gray-200 outline-none ml-2"
				type="text"
				placeholder="Search"
			></input>
		</div>
	)
}

export default Seacrh
