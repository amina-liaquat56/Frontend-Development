export default function ToDoCRUD() {
    let initialtodos = [
        { id: 1, text: 'To Do 1', completed: true },
        { id: 2, text: 'To Do 2', completed: false },
        { id: 3, text: 'To Do 3', completed: true }
    ]
    let [todoArr, setToDoArr] = useState(initialtodos);

    let deleteToDo = (id) => {
        let filteredToDos = todoArr.filter(todo => todo.id !== id);
        setToDoArr([...filteredToDos]);
    }
    let toggleToDo = (id) => {
        let updatedToDos = todoArr.map(ele => {
            return ele.id === id ? { ...ele, completed: !ele.completed } : ele;
        })
        setToDoArr([...updatedToDos]);
    }
    let addToDo = (text) => {
        let newToDo = { id: todoArr.length + 1, text: text, completed: false };
        todoArr.push(newToDo);
        setToDoArr([...todoArr])
    }
    return <>
        <h2 className='text-center'>This is ToDo CRUD Example</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <h3 className='text-center'>ToDo List</h3>
                    <ToDoList todoArr={todoArr} deleteToDo={deleteToDo} toggleToDo={toggleToDo} />
                </div>
                <div className='col-sm-4'>
                    <h3 className='text-center'>Add To Do</h3>
                    <AddToDo addToDo={addToDo} />
                </div>
            </div>
        </div>
    </>
}
