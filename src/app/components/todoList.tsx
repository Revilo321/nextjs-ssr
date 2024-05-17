'use client'
import Link from 'next/link'
import { useState } from 'react'

const pageSize = 10
const visiblePages = 5
export const TodoList = ({
  todos,
}: {
  todos: [{ id: number; title: string; description: string }]
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageCount = Math.ceil(todos.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const currentTodos = todos.slice(startIndex, startIndex + pageSize)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const paginationRange = () => {
    const current = currentPage
    const total = pageCount
    const visible = visiblePages

    if (total <= visible) {
      return [...Array(total).keys()].map((n) => n + 1)
    }
    let start = Math.max(1, current - Math.floor(visible / 2))
    let end = start + visible - 1

    if (end > total) {
      end = total
      start = end - visible + 1
    }

    return [...Array(end - start + 1).keys()].map((n) => n + start)
  }

  return (
    <div className='container mx-auto px-4 text-black'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-700'>Todos</h1>
        <ul className='space-y-4 mt-4'>
          {currentTodos.map((todo) => (
            <li key={todo.id} className='bg-gray-100 p-4 rounded-lg shadow'>
              <h3 className='font-semibold text-lg'>{todo.title}</h3>
              <p className='text-gray-600'>{todo.description}</p>
              <Link
                className='text-blue-500 hover:text-blue-700'
                href={`/${todo.id}`}>
                Edit
              </Link>
            </li>
          ))}
        </ul>
        {pageCount > 1 && (
          <div className='flex justify-center space-x-2 mt-4'>
            {paginationRange().map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === number
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300'
                }`}>
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
