import { useRoutes, BrowserRouter } from 'react-router-dom'    
import { CartContextProvider } from '../../Context'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import Navbar from '../../componentes/Navbar'

// Declaración Rutas
const AppRoutes = () => {
    let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/contacto', element: <Contact/>},
      {path: '/*', element: <NotFound/>}
    ])  
    return routes
}

const App = () => {
  return (
    <CartContextProvider>
        <BrowserRouter>
            <AppRoutes/>
            <Navbar/>
        </BrowserRouter>
    </CartContextProvider>

)
}
export default App