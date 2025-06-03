import { Outlet } from 'react-router'

//Components
import { Navigation } from '../../shared/navigation/Navigation';
import { Footer } from '../../shared/footer/Footer';
import { NavigationFase2 } from '../../shared/navigation/NavigationFase2';

//CSS
import './App.css';

function App() {

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={ <Layout /> }>

  //           {/* Basic routes */}
  //           <Route index element={ <Home />} />
  //           <Route path='register' element={<Register />} /> 

  //           {/* Error pages */}  
  //           <Route path='*' element={ <Error />} />

  //           {/* Policy routes */}
  //           <Route path='/policies/'>
  //             <Route path='privacy' element={<Privacy />} />
  //             <Route path='cookies' element={<Cookies />} />
  //           </Route>
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // )

  return(
    <>
      {/* <NavigationFase2 /> */}
      <Navigation/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
