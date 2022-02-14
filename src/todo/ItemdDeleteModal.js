import { useDispatch, useSelector } from "react-redux"
import { setTodoItems } from "../store/actions/todoActions"


const ItemDeleteModal = ({ item, setModalContent }) => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)

  const handleCansel = () => {
    setModalContent(false)
  }

  const handleApply = () => {
    dispatch(setTodoItems([
      ...items.filter(i => i.id !== item.id)
    ]))
    handleCansel()
  }

  return (
    <div className="modal-window">
      <div className="modal">
        <div className="title">Задача</div>
        <div className="body">
          <p>Удалить задачу: {item.title}</p>
        </div>
        <div className="footer">
          <button className="primary" onClick={handleApply}>Удалить</button>
          <button className="danger" onClick={handleCansel}>Отмена</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDeleteModal