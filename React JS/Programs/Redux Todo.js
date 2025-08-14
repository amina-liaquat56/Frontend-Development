1. create a new project 
   npx create-react-app <projectName>
   
2. install react-redux
   npm install @reduxjs/toolkit react-redux

3. Create Folders & Files for actions, reducers, store and components
     store-->store.js
	 features/todo --> todoSlice.js
	 components--> ToDoList.js , ToDo.js, AddToDo.js 
	 
4. Create a Redux Store
    import { configureStore } from '@reduxjs/toolkit'
	export const store = configureStore({
		reducer: {todoReducer:todoReducer}
	})

5. Provide the Redux Store to React(index.js)
    <Provider store={myStore}>
      <App />
    </Provider>
	
6. Create a Redux "slice" reducer with createSlice , Export the generated slice reducer and action creators	
	import { createSlice } from '@reduxjs/toolkit';
	const initialState = {
		todoList: [
			{ id: 1, text: "Learn React", isCompleted: false },
			{ id: 2, text: "Complete Java Assignments", isCompleted: true },
		]
	}
	// slice = reducers + action_creators
	export const todoSlice = createSlice({
		name: 'todo',
		initialState,
		reducers: {
			addToDo: {
				reducer: (state, action) => {
					state.todoList.push(action.payload);
				},
				prepare: (text) => ({
					payload: {
						id: Math.random() * 20,
						text,
						completed: false,
					}
				})
			},
			deleteToDo: (state, action) => {
				state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
				return state;
			},
			toggleToDo: (state, action) => {
				state.todoList = state.todoList.map((toDo) =>
					toDo.id === action.payload ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
				);
				return state;
			}
		}
	})
	// Action creators are generated for each case reducer function
	export const { addToDo, deleteToDo, toggleToDo } = todoSlice.actions; // Action Creators
	export default todoSlice.reducer;
   
7. Read data from the store with the useSelector hook (ToDoList.js)
    import { useSelector } from 'react-redux'
	import ToDo from './ToDo';
	import AddToDo from './AddToDo';
	export default function ToDoList() {
		const todoArr = useSelector((state) => state.todoReducer.todoList);
		const CompletedToDos = todoArr.filter(todo => todo.isCompleted);
		return <>
			<div className='col-sm-4 offset-4'>
				<div className='p-3 m-3 border border-3 rounded-3'>
					<h2 className='text-center'>ToDo List Using REDUX</h2>
					<hr />
					<AddToDo />
					<hr/>
					{todoArr.map((todoObj, ind) => {
						return <ToDo todoObj={todoObj} ind={ind} />
					})}
					<hr />
					{CompletedToDos.length}/{todoArr.length} are completed
				</div>
			</div>
		</>
	}


9. ToDo.js
	import { useDispatch } from 'react-redux'
	import { deleteToDo, toggleToDo } from '../features/todo/todoSlice';
	export default function ToDo({ todoObj }) {
		const dispatch = useDispatch();
		const deleteMyTodo = (id) => {
			const actionObj = deleteToDo(id);
			dispatch(actionObj)
		}
		const toggleMyTodo = (id) => {
			const actionObj = toggleToDo(id);
			dispatch(actionObj)
		}
		return <>
			<li>
				<span style={{ textDecoration: todoObj.isCompleted ? 'line-through' : 'none' }}>
					{todoObj.text}
				</span> &nbsp;
				<button onClick={() => { deleteMyTodo(todoObj.id) }}>DELETE</button> &nbsp;
				<button onClick={() => { toggleMyTodo(todoObj.id) }}>TOGGLE</button> &nbsp;
			</li>
		</>
	}


10. AddToDo.js
	import React, { useRef } from 'react'
	import { useDispatch } from 'react-redux';
	import { addToDo } from '../features/todo/todoSlice';
	export default function AddToDo() {
		const dispatch = useDispatch();
		const myRef1 = useRef();
		const addNewToDo = () => {
			const actionObj = addToDo(myRef1.current.value);
			dispatch(actionObj);
			myRef1.current.value = '';
		};
		return <>
			<input ref={myRef1} /> &nbsp;
			<button onClick={addNewToDo}>Add New ToDo</button>
		</>
	}
