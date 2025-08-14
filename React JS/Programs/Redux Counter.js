1. create a new project 
   npx create-react-app counter-app
   
2. install redux & react-redux
   npm install redux react-redux @reduxjs/toolkit

3. Create Folders & Files for actions, reducers, store and components
    store-->store.js
	actions-->actions.js
	reducers-->reducers.js
	components-->counter.js
	
4. Create Actions (actions.js)
    export const increment = () => { // Action Creator function
		return { type: 'INCREMENT' } // action object
	}
	export const decrement = () => {
		return { type: 'DECREMENT' } 
	}
	export const reset = () => { 
		return { type: 'RESET' } 
	}

5. Add Reducer Code 
	const counterReducer = (state = 1, action) => {
	  switch (action.type) {
		case "INCREMENT":
		  return state + 1;
		case "DECREMENT":
		  return state - 1;
		case "RESET":
		  return (state = 0);
		default:
		  return state;
	  }
	};
	export default counterReducer;
	
6. create Store (store.js)   
    import { configureStore } from '@reduxjs/toolkit';
	import counterReducer from '../reducers/counter_reducer';
	const myStore = configureStore({
		reducer: {
			counter: counterReducer
		}
	});
	export default myStore;

	
7. Provide Store (index.js)
	import { Provider } from 'react-redux';	
	import mystore from './store/store'
	
	const root = ReactDOM.createRoot(document.getElementById("root"));
	root.render(
	  <React.StrictMode>
		<Provider store={mystore}>
		  <App />
		</Provider>
	  </React.StrictMode>
	);

8. Import and Dispatch the Actions(Counter.js)

	import { useDispatch, useSelector } from 'react-redux';
	import { decrement, increment, reset } from '../actions/actions'
	export default function Counter() {
		const count = useSelector((state) => state.counter)
		const dispatch = useDispatch();
		return <>
			<h3 className='text-center'>Counter Example Using REDUX</h3>
			<div className='col-md-4 offset-md-4'>
				<div className='m-3 p-3 border border-3 rounded-3 text-center'>
					<h4>Count is: {count}</h4>

					<button class="btn btn-secondary" onClick={() => dispatch(decrement())}>Decrement</button>
					<button class="btn btn-danger mx-2" onClick={() => dispatch(reset())}>Reset</button >
					<button class="btn btn-primary" onClick={() => dispatch(increment())}> Increment</button >
				</div>
			</div >
		</>
	}
