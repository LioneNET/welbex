
const initState = {
  isLoading: false,
  totalPages: 0,
  items: []
}

const todoReducer = (state = initState, { type, data }) => {
  switch (type) {
    case 'todo/set.items':
      return { ...state, items: data }
    case 'todo/set.is.loading':
      return { ...state, isLoading: data }
    case 'todo/set.total.pages':
      return { ...state, totalPages: data }
    default:
      return state
  }
}

export default todoReducer