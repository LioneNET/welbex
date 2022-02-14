import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';

import ItemEditModal from "./ItemEditModal";
import ItemDeleteModal from "./ItemdDeleteModal";
import Paginator from "./Paginator";
import { getTodos } from "../store/actions/todoActions";

const Todos = () => {
  const { items: todoItems, isLoading } = useSelector(state => state.todo)
  const [showItems, setShowItems] = useState([])
  const [modalContent, setModalContent] = useState(false)
  const dispatch = useDispatch()

  const handleEdit = (id) => {
    setModalContent(<ItemEditModal item={todoItems.find(i => i.id === id)} setModalContent={setModalContent} />)
  }

  const handleDelete = (id) => {
    setModalContent(<ItemDeleteModal item={todoItems.find(i => i.id === id)} setModalContent={setModalContent} />)
  }

  const handleAdd = () => {
    setModalContent(<ItemEditModal setModalContent={setModalContent} />)
  }

  const Item = ({ title, completed, id }) => {
    return (
      <div className="block">
        <div className="title">{title}</div>
        <div className="status">Статус: <span>{completed ? 'готово' : 'не готово'}</span></div>
        <div className="btn-place">
          <button className="primary" onClick={() => handleEdit(id)}>Изменить</button>
          <button className="danger" onClick={() => handleDelete(id)}>Удалить</button>
        </div>
      </div>
    )
  }

  if(isLoading) {
    return (
      <h1>Загрузка</h1>
    )
  }

  return (
    <div className="todo">
      {modalContent}
      <h3>Список задач</h3>
      <button className="primary" onClick={handleAdd}>Добавить</button>
      {showItems.map(item => <Item key={item.id} {...item} />)}
      <Paginator setShowItems={setShowItems} />
    </div>
  )
}

export default Todos