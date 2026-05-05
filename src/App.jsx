import Header from './components/Header'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BasicInform from '../src/components/organisms/BasicInform'
import Details from '../src/components/organisms/Details'
import Dates from '../src/components/organisms/Dates'
import './index.css'

function App() {
  return(
    <Router>
    <Header />
    <div className="container"> 
       <div className="vazio">
        </div>
        <div className="navbar">
        <NavBar />
        </div>
        <div className="conteudo">
          <Routes> 
          <Route path='/' element={<BasicInform />} />
          <Route path='/basicinform' element={<BasicInform />}/>
          <Route path='/details' element={<Details />}/>
          <Route path='/dates' element={<Dates />}/>
          </Routes>
        </div>
    </div>

    </Router>
  )  
}
export default App
