import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { getTodos } from "./store/actions/todoActions"


const Navbar = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)

  useEffect(() => {
    if (!items.length) {
      dispatch(getTodos())
    }

  }, [])

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