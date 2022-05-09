import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import BPMN from './components/Bpmn-modeler'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BPMN />
	</React.StrictMode>
)
