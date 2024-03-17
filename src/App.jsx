import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SingUp from './Pages/SingUp'
import Profile from './Pages/Profile'
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
