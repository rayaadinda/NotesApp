import { useEffect, useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from "nanoid"
import Seacrh from "./components/Search"
import Header from "./components/Header"

export default function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "Hello this is our first note - Raya",
			Date: "22/07/2024",
		},
	])

	const [searchText, setSearchText] = useState("")

	useEffect(() => {
		const storedNotes = JSON.parse(
			localStorage.getItem("react-notes-app-notes")
		)

		if (storedNotes) {
			setNotes(storedNotes)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem("react-notes-app-notes", JSON.stringify(notes))
	}, [notes])

	const addNote = (text) => {
		const date = new Date()
		const newNote = {
			id: nanoid(),
			text: text,
			Date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	return (
		<div className="max-w-5xl mx-auto px-4 min-h-screen">
			<Header />
			<Seacrh handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText.toLowerCase())
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	)
}
