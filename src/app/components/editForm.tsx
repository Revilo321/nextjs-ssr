'use client'
import { useState } from 'react'
import { editTodo } from '../actions'

export const EditForm = ({
  todo,
}: {
  todo: { id: number; title: string; description: string }
}) => {
  const [count, setCount] = useState(0)
  const updateTodoWithId = editTodo.bind(null, todo.id)
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <form
        className='w-full max-w-lg bg-white p-8 shadow-md rounded-lg'
        action={updateTodoWithId}>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Edit Todo</h2>

        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Title
          </label>
          <input
            name='title'
            id='title'
            type='text'
            defaultValue={todo.title}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='description'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            defaultValue={todo.description}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            rows={4}></textarea>
        </div>
        {count}
        <button
          onClick={() => setCount(count + 1)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Update Todo
        </button>
      </form>
    </div>
  )
}
