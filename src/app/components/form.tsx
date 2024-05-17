'use client'

import { createTodo } from '../actions'

export const Form = () => {
  return (
    <form action={createTodo}>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Enter todo title'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block text-gray-700 font-bold mb-2'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Enter todo description'
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
        Add Todo
      </button>
    </form>
  )
}
