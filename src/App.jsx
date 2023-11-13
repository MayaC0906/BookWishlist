import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/style/main.scss'
import { BookWishlistIndex } from './pages/BookWishlistIndex'

function App() {
  return (
    <Router>
        <section>
            <main>
                <Routes>
                    <Route element={<BookWishlistIndex />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>
  )
}

export default App
