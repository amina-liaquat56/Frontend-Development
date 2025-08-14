1. add target div in index.html
   <div id="modal-root"></div> <!--Root Element for Portal-->
   
2. Create a Portal Component
   import React from 'react';
	import ReactDOM from 'react-dom';
	const styles = {
		overlay: {
			display: 'flex', justifyContent: 'Center', alignItems: 'center',
		},
		modal: {
			background: '#fff', padding: '20px', borderRadius: '5px'
		}
	}
	export default function MyModal({ children }) {
		return ReactDOM.createPortal(
			<div style={styles.overlay}>
				<div style={styles.modal}>
					{children}
				</div>
			</div>,
			document.getElementById('modal-root')
		)
	}
	
3. Use the Portal Component in a parent component
    import { useState } from 'react';
	import MyModal from './components/MyModal';
	function App() {
	  const [showModal, setShowModal] = useState(false);
	  return <>
		<h1>Let's Learn Portals</h1>
		<button className='btn btn-primary' onClick={() => setShowModal(true)}>Open Modal</button>
		{showModal &&
		  <MyModal>
			<h2>This is a Modal</h2>
			<button className='btn btn-primary' onClick={() => setShowModal(false)}>Close Modal</button>
		  </MyModal>
		}
	  </>
	}
	export default App;
