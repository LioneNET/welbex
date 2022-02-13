import { Link, Outlet } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar">
        <Link to='/main' >Главная</Link>
        <Link to='/todos' >Сисок задач</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar