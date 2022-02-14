import useApi from "../../hooks/useApi"

const loadingIsStart = () => ({ type: 'todo/set.is.loading', data: true })
const loadingIsStop = () => ({ type: 'todo/set.is.loading', data: false })
const setTodoItems = items => ({ type: 'todo/set.items', data: items })

const getTodos = () => dispatch => {
  const $api = useApi()
  dispatch(loadingIsStart())
  $api.get(`todos`)
    .then(res => {
      dispatch(setTodoItems(res.data))
    })
    .finally(() => dispatch(loadingIsStop()))
}

export { getTodos, setTodoItems }