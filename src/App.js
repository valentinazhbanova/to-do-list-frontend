import { useEffect, useState } from 'react';
import './App.css';
import { MyList } from './MyList';
import { getAllLists, addList, editToDoList, deleteToDoList } from './FetchList';

function App() {

  const [myList, setList] = useState([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState(false);
  const [listId, setListId] = useState('')

  useEffect(() => {
    getAllLists(setList)
  }, [])

  const updatingInInput = (_id, name) => {
    setEditing(true)
    setName(name)
    setListId(_id)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    addList(name, setName, setList)
  }

  return (
    <div className="App">
      <h1>Список дел</h1>

      <form onSubmit={finalSearch}>
        <input type='text' placeholder='Добавить список дел' 
        value={name}
        onChange={(e) => setName(e.target.value)} />
      </form>


    <button disabled={!name} 
    onClick= 
    {editing ? () => editToDoList(listId, name, setName, setList, setEditing) : () => addList(name, setName, setList)}>
    {editing ? 'Изменить' : 'Добавить'}
    </button>
    
    {myList.map((list) => 
      <MyList text={list.name} key={list._id} 
      updatingInInput={() => updatingInInput(list._id, list.name)}
      deleteToDoList={() => deleteToDoList(list._id, setList)}
      />
    )}
    </div>
  );
}

export default App;



