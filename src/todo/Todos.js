import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { getTodos } from "../store/actions/todoActions";

const Todos = () => {
  const limit = 10
  const dispatch = useDispatch()
  const { items: todoItems, isLoading, totalPages } = useSelector(state => state.todo)
  const params = useParams()

  useEffect(() => {
    const { page } = params
    const start = page * limit
    dispatch(getTodos(start, limit))
  }, [params])

  const Item = ({ title, completed, id }) => {
    return (
      <div className="block">
        <div className="title">{title}</div>
        <div className="status">Статус: <span>{completed ? 'готово' : 'не готово'}</span></div>
        <div className="btn-place">
          <button className="primary">Изменить</button>
          <button className="danger">Удалить</button>
        </div>
      </div>
    )
  }

  return (
    <div className="todo">
      <h3>Список задач</h3>
      {todoItems.map(item => <Item key={item.id} {...item} />)}
      <div className="paginate">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  )
}

export default Todos