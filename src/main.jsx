import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import './index.css'
import Body from './Components/Body'
import Default from './Components/Default'
import Cart from './Components/Cart'
import Shimmer from './Components/Shimmer/Shimmer'
import Help from './Components/Help'
import About,{githubinfoloader} from './Components/About'

const Restaurantsmenu = lazy(() => import("./Components/Resturant/Resturantmenu"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='' element={<Default />} />
      <Route path="home" element={<Body/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="help" element={<Help/>}/>
      <Route loader={githubinfoloader} path="about" element={<About/>}/>
      <Route path='resturant/:resID' element={<Suspense fallback={<Shimmer/>}><Restaurantsmenu/></Suspense>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
