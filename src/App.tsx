import './App.css'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Liberation from './pages/liberation'
import News from './pages/News'
import Warbonds from './pages/Warbonds'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path ='/Liberation' element = {<Liberation/>}/>
          <Route path = '/News' element = {<News/>}/>
          <Route path = '/Warbonds' element = {<Warbonds/>}/>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
