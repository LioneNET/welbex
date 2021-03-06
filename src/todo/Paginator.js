import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Paginator = ({ setShowItems }) => {

  const limit = 15
  const items = useSelector(state => state.todo.items)
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const tempItems = items.slice((currentPage - 1) * limit, currentPage * limit)
    const totalPages = Math.ceil(items.length / limit)
    setShowItems(tempItems)
    const arr = []
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1)
    }
    setPages(arr)
  }, [items, currentPage])

  const changePage = page => {
    setCurrentPage(page)
  }

  return (
    <div className="paginate">
      {pages.map(page => (
        <button onClick={() => changePage(page)}
          className={currentPage === page ? 'active' : ''}
          key={`page_${page}`}>{page}</button>
      ))}
    </div>
  )
}

export default Paginator