import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import { getTodos } from "./store/actions/todoActions"


const Navbar = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)
  const nav = useNavigate()
  const params = useParams()
  console.log(params)
  useEffect(() => {
    if (!items.length) {
      dispatch(getTodos())
    }
    nav('/main')
  }, [])

  return (
    <div className="main">
      <div className="navbar">
        <NavLink to='/main' >Главная</NavLink>
        <NavLink to='/todos' >Сисок задач</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar