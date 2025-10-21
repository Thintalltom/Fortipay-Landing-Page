
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Privacy from './Pages/Privacy/Privacy'
import Solution from './Pages/Solution/Solution'
import Term from './Pages/Term_of_Use/Term'
import Contact from './Pages/Contact/Contact'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-6">Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#03377D] text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Return Home
        </button>
      </div>
    </div>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/terms" element={<Term />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router