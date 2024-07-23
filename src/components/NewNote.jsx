import { useState } from "react"

const NewNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("")
	const characterLimit = 200

	const colors = ["#c084fc", "#fb7185", "#a3e635", "#38bdf8"]
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)]
	}

	const [backgroundColor, setBackgroundColor] = useState(getRandomColor())

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value)
		}
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText, backgroundColor)
			setNoteText("")
			setBackgroundColor(getRandomColor())
		}
	}

	return (
		<div
			className="rounded-lg p-4 mb-3 flex flex-col items-center"
			style={{ backgroundColor }}
		>
			<textarea
				className="border-none resize-none w-full h-40 placeholder-white"
				rows={4}
				cols={10}
				placeholder="Enter your note"
				value={noteText}
				onChange={handleChange}
				style={{ backgroundColor }}
			></textarea>
			<div className="flex items-center justify-between w-full">
				<small>{characterLimit - noteText.length} Remaining</small>
				<button
					className="bg-white text-black px-4 py-1 rounded-xl"
					onClick={handleSaveClick}
				>
					Save
				</button>
			</div>
		</div>
	)
}

export default NewNote
