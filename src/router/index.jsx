import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../components/Contact'
import Service1 from '../pages/Service1'
import Blog from '../pages/Blog'
import Services from '../pages/Services'
import Citas from '../pages/Citas'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/citas' element={<Citas />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/service1' element={<Service1 />} />
    </Routes>
  )
}

export default App
