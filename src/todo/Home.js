import { useSelector } from "react-redux"

const Home = () => {
  const items = useSelector(state => state.todo.items)

  return (
    <div className='about'>
      <div className='logo'>
        <img src={require('../assets/logo.png')} alt='logo' />
      </div>
      <div className='text'>
        <p>Менеджер задач. Можно добавлять удалят и изменять задачи</p>
        <p>Всего задач: <strong>{items.length}</strong></p>
        <p>Выполнено: <strong>{items.filter(i => i.completed).length}</strong></p>
        <p>Осталось: <strong>{items.filter(i => !i.completed).length}</strong></p>
      </div>
    </div>
  )
}

export default Home