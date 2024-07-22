import { MdDeleteForever } from "react-icons/md"

const Note = ({ id, text, Date, handleDeleteNote }) => {
	return (
		<div className="flex flex-col justify-between bg-yellow-300 mb-3 rounded-lg p-4 min-h-40">
			<span> {text}</span>
			<div className="flex items-center justify-between">
				<small>{Date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className="text-black cursor-pointer"
					size={20}
				></MdDeleteForever>
			</div>
		</div>
	)
}

export default Note
