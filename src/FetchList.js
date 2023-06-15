import axios from 'axios'

const getAllLists = (setList) => {
    axios.get('https://to-do-list-3ll4.onrender.com')
    .then(({data}) => {console.log(data)
        setList(data)
    })
}

const addList = (name, setName, setList) => {
    axios.post('https://to-do-list-3ll4.onrender.com/saveToDoList', { name })
    .then((data) => {
        console.log(data)
        setName('')
        getAllLists(setList)
    })
}

const editToDoList = (listId, name, setName, setList, setEditing) => {
    axios.post('https://to-do-list-3ll4.onrender.com/editToDoList', { _id: listId, name })
    .then((data) => {
        console.log(data)
        setName('')
        setEditing(false)
        getAllLists(setList)
    })
}

const deleteToDoList = (_id, setList) => {
    axios.post('https://to-do-list-3ll4.onrender.com/deleteToDoList', {_id} )
    .then((data) => {
        console.log(data)
        getAllLists(setList)
    })
}

export { getAllLists, addList, editToDoList, deleteToDoList  }


