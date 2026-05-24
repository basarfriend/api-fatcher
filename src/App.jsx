import Nav from './component/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Project from './pages/project/Project'
import Education from './pages/Education/Education'
import Notfound from './pages/Notfound'
import Profile from './pages/profile/Profile'
const App = () => {
  return <>
  <Nav name="BASAR" />
  <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/About' element={<About />}  />
    <Route path='/Project' element={<Project />} />
    <Route path='/Education' element={<Education />}  />
    <Route path='*' element={<Notfound />} />
  </Routes>
  </>
}

export default App