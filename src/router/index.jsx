import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../components/Contact'
import Service1 from '../pages/Service1'
import Services from '../pages/Services'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/service1' element={<Service1 />} />
    </Routes>
  )
}

export default App
