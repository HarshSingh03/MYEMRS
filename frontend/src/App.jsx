import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import AdminPage from './Pages/AdminPage';
import PatientsPage from './Pages/PatientsPage';
import AuthPage from './Pages/AuthPage';
import ContextStore from './context/contextStore';

function App() {
  let data = {
    username: "",
    status: "loggedOUT"

  }
  const path = createBrowserRouter([{
    path: '/',
    element: <PatientsPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  }, {
    path: '/auth',
    element: <AuthPage />
  }
  ])
  return (

    <ContextStore.Provider value={data}>
      <RouterProvider router={path} />
    </ContextStore.Provider>

  )
}

export default App
