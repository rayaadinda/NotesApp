import Note from "./Note"
import NewNote from "./NewNote"
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					Date={note.Date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<NewNote handleAddNote={handleAddNote} />
		</div>
	)
}

export default NotesList
