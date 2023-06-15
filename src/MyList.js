import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

export const MyList = ({text, updatingInInput, deleteToDoList}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick={deleteToDoList}></AiFillDelete>
        </div>
    )
}