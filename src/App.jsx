import './sass/App.scss'
import { Route, Routes } from 'react-router-dom'
import UseStateExplain from './views/UseState'
import SiteNav from './layout/SiteNav'
import UseEffectExplain from './views/UseEffect'
import UseRefExplain from './views/UseRef'
import UseMemoExplain from './views/UseMemo'
import UseCallbackExplain from './views/UseCallback'

function App() {

  return (
    <>
      <SiteNav />
      <Routes>
        <Route path='/useState' element={<UseStateExplain />} />
        <Route path='/useEffect' element={<UseEffectExplain />} />
        <Route path='/useRef' element={<UseRefExplain />} />
        <Route path='/useMemo' element={<UseMemoExplain />} />
        <Route path='/useCallback' element={<UseCallbackExplain />} />
      </Routes>
    </>

  )
}

export default App
