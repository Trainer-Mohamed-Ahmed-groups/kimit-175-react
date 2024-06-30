import './sass/App.scss'
import Btn from './components/Btn';

function App() {

  return (
    <>
      <Btn />
      <Btn />
      <div className='parent'>
        <div className='test'>Hello react</div>
      </div>
      <div>Hello react</div>
    </>
    
  )
}

export default App
