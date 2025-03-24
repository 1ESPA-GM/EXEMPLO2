import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
