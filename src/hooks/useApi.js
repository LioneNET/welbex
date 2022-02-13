import axios from "axios"

const useApi = () => {
  const $api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  })

  return $api
}

export default useApi