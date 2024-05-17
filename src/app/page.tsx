import Link from 'next/link'
import { createClient } from '../../utils/supabase/server'
import { Form } from './components/form'
import { TodoList } from './components/todoList'

async function getData() {
  const supabase = createClient()
  const { data: todos, error } = await supabase.from('todos').select('*')
  if (error) {
    console.error(error)
  }
  return todos as any
}

export default async function Home() {
  const data = await getData()

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3'>
        <TodoList todos={data} />
      </div>
    </div>
  )
}
