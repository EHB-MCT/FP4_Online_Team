import { BrowserRouter, Routes, Route} from 'react-router';
import axios from 'axios'

//CSS
import './App.css'

//Pages
import Cookies from './pages/Cookies.jsx';
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Privacy from './pages/Privacy.jsx';
import Register from './pages/Register.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>

            {/* Basic routes */}
            <Route index element={ <Home />} />
            <Route path='register' element={<Register />} /> 

            {/* Error pages */}  
            <Route path='*' element={ <Error />} />

            {/* Policy routes */}
            <Route path='/policies/'>
              <Route path='privacy' element={<Privacy />} />
              <Route path='cookies' element={<Cookies />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
