import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout.jsx'
import HomePage from './pages/homePage/HomePage.jsx'
import TimeLine from './pages/timeline/TimeLine.jsx'
import Stats from './pages/stats/Stats.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
 import FriendDetails from './pages/frinedDetails/FriendDetails.jsx'
import TimelineProvider from './context/TimelineProvider/TimelineProvider.jsx'
const router=createBrowserRouter([
  {
    path:'/',
   Component:RootLayout ,
   children:[
    {
    index:true,
    Component:HomePage
    },
    {
      path:'/:id',
      Component:FriendDetails

    },
    {
      path:'/timeline',
      Component:TimeLine
    }
    ,{
      path:'/stats',
      Component:Stats
    },

   ]
   ,
   errorElement:<ErrorPage/>
  } ,
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
    <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
