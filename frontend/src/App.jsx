import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import AdminPage from './Pages/AdminPage';
import PatientsPage from './Pages/PatientsPage';
import AuthPage from './Pages/AuthPage';

function App() {
  const path = createBrowserRouter([{
    path:'/',
    element: <PatientsPage/>
  },
  {
    path:'/admin',
    element:<AdminPage/>
  },{
    path:'/auth',
    element:<AuthPage/>
  }
])
  return (
    <RouterProvider router={path}>

    </RouterProvider>
  )
}

export default App
