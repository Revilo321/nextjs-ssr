'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Pagination } from './pagination'

export const TodoList = ({
  todos,
}: {
  todos: [{ id: number; title: string; description: string }]
}) => {
  return (
    <div className='container mx-auto px-4 text-black'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-700'>Todos</h1>
        <ul className='space-y-4 mt-4'>
          {todos.map((todo) => (
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
      </div>
    </div>
  )
}
