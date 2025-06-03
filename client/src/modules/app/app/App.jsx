import { Outlet } from 'react-router'

//Components
import { Navigation } from '../../shared/navigation/Navigation';
import { Footer } from '../../shared/footer/Footer';

//CSS
import './App.css';

function App() {
  
  return(
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
