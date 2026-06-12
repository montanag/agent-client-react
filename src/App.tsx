import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout/PublicLayout'
import SignIn from './pages/SignIn/SignIn'
import ProtectedLayout from './layouts/ProtectedLayout/ProtectedLayout'
import Home from './pages/Home/Home'
import ToolsetExplorer from './pages/ToolsetExplorer/ToolsetExplorer'
import Toolset from './pages/Toolset/Toolset'
import ProviderExplorer from './pages/ProviderExplorer/ProviderExplorer'
import Provider from './pages/Provider/Provider'
import Session from './pages/Session/Session'
import SessionExplorer from './pages/SessionExplorer/SessionExplorer'


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
          <Route path="/providers" element={<ProviderExplorer />} />
          <Route path="/providers/:providerUuid" element={<Provider />} />
          <Route path="/toolsets" element={<ToolsetExplorer />} />
          <Route path="/toolsets/:toolsetUuid" element={<Toolset />} />
          <Route path="/sessions" element={<SessionExplorer />} />
          <Route path="/sessions/:sessionUuid" element={<Session />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
