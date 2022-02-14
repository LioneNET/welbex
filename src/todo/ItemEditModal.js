import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTodoItems } from "../store/actions/todoActions"


const ItemEditModal = ({ item = null, setModalContent }) => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)

  const [fields, setFields] = useState({
    title: item?.title,
    completed: item ? item.completed : false
  })

  const handleCansel = () => {
    setModalContent(false)
  }

  const handleApply = () => {
    if (item) {
      const editingItem = { ...item, title: fields.title, completed: fields.completed }

      dispatch(setTodoItems([
        ...items.map(i => {
          if (i.id === item.id) {
            return editingItem
          } else {
            return i
          }
        })
      ]))
    } else {
      dispatch(setTodoItems([...items, { id: Date.now(), ...fields }]))
    }
    handleCansel()
  }

  return (
    <div className="modal-window">
      <div className="modal">
        <div className="title">Задача</div>
        <div className="body">

          <div className="input-group">
            <label className="label" htmlFor='task'>Описание</label>
            <input
              onChange={e => setFields({ ...fields, title: e.target.value })}
              type='text'
              id="task"
              defaultValue={fields?.title} />
          </div>

          <div className="input-group">
            <label className="label" htmlFor='resolve'>Задача</label>
            <input
              onChange={e => setFields({ ...fields, completed: e.target.checked })}
              type='checkbox'
              className="inp-checkbox"
              id="resolve"
              checked={fields.completed} />
          </div>
        </div>
        <div className="footer">
          <button className="primary" onClick={handleApply}>Применить</button>
          <button className="danger" onClick={handleCansel}>Отмена</button>
        </div>
      </div>
    </div>
  )
}

export default ItemEditModal