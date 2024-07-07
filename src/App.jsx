import { Route, Routes } from 'react-router-dom'
import SiteNav from './layout/SiteNav'
import './sass/App.scss'
import About from './views/About'
import Home from './views/Home'
import Products from './views/Products'
import ErrorPage from './views/ErrorPage'

function App() {

  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>

  )
}

export default App
