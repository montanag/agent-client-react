import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout/PublicLayout'
import SignIn from './pages/SignIn/SignIn'
import ProtectedLayout from './layouts/ProtectedLayout/ProtectedLayout'
import Home from './pages/Home/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unauthenticated layout - no sidebar */}
        <Route element={<PublicLayout />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Authenticated layout - contains sidebar */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
