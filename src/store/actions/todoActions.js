import useApi from "../../hooks/useApi"

const loadingIsStart = () => ({ type: 'todo/set.is.loading', data: true })
const loadingIsStop = () => ({ type: 'todo/set.is.loading', data: false })
const setTodoItems = items => ({ type: 'todo/set.items', data: items })
const setTotalPages = pages => ({ type: 'todo/set.total.pages', data: pages })

const getTodos = (start, limit) => dispatch => {
  const $api = useApi()
  dispatch(loadingIsStart())
  $api.get(`todos?_start=${start}&_limit=${limit}`)
    .then(res => {
      const total = Math.ceil(res.headers['x-total-count'] / limit)
      dispatch(setTotalPages(total))
      dispatch(setTodoItems(res.data))
    })
    .finally(() => dispatch(loadingIsStop()))
}

export { getTodos }