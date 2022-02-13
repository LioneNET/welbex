import { BrowserRouter, Routes, Route } from "react-router-dom"
import Todos from './todo/Todos'
import Home from './todo/Home'
import Navbar from "./Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Main" element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App