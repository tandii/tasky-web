import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './components/auth/PrivateRoutes'
import { Home } from './pages/Home'
import { New } from './pages/New'
import { SignIn } from './pages/SignIn'
import { Tags } from './pages/Tags'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/home' element={<PrivateRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
                <Route path='/new' element={<PrivateRoutes />}>
                    <Route path='/new' element={<New />} />
                </Route>
                <Route path='/tags' element={<PrivateRoutes />}>
                    <Route path='/tags' element={<Tags />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}