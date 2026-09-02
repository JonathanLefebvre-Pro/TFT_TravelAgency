// import './styles/App.scss'
import { Route, Routes } from 'react-router'
import Root from './components/root'
import Error from './components/error'
import Contact from './pages/contact'
import Travels from './pages/travels'
import About from './pages/about'
import Home from './pages/home'
import s from '@styles/App.module.scss'

function App() {
  return (
    // <div className="app">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    // </div>
  )
}

export default App
