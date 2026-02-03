import Home from './pages/home.jsx'
import Hunt from './pages/hunt.jsx'
import Catch from './pages/catch.jsx'
import Lifestyle from './pages/lifestyle.jsx'
import { Route, Routes} from 'react-router-dom'
import './css/App.css'
import Header from './components/header.jsx'

function App() {

  return (
    <>
      <main>
          <div className='box'>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/hunt" element={<Hunt/>}/>
              <Route path="/catch" element={<Catch/>}/>
              <Route path="/lifestyle" element={<Lifestyle/>}/>
            </Routes>
        </div>
      </main>
    </>
  )
}

export default App
