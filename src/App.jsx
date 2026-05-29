import Header from './components/Header'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import EventForm from './components/organisms/EventForm'

function App() {

  return(
    <Router>
          <Routes> 
          <Route path='/' element={<EventForm />} />
          </Routes>
    </Router>
  )  
}
export default App
