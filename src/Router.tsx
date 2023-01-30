import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Post } from './pages/Post/Post'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}