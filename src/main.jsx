import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from '../src/components/App/App.jsx'
import "../src/main.css"

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
</React.Fragment>, 
)