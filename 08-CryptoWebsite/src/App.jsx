import './App.css'
import {HashRouter, Routes, Route} from "react-router"
import { Home } from './pages/Home'
import {CoinDetails} from './pages/CoinDetails'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coin/:coinId" element={<CoinDetails/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
