import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import "./index.css"
import HomePage from './HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import NoteFoundPage from './pages/NoteFoundPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NoteFoundPage/>,
  },
  {
    path: "/create",
    element: <CreatePage/>
  },
  {
    path: "/notes/:noteId",
    element: <NoteDetailPage/>
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <Toaster/>
  </StrictMode>,
)
