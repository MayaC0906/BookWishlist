import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/style/main.scss'
import { store } from './store/store'
import { BookWishlistIndex } from './pages/BookWishlistIndex'

function App() {
  return (
    <Provider store={store}>
    <Router>
        <section>
            <main>
                <Routes>
                    <Route element={<BookWishlistIndex />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>
 </Provider>
  )
}

export default App
