import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './scss/style.scss'
import store from './store'

const Initial = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Initial />, document.querySelector('#root'))