import Link from 'next/link'
import { createClient } from '../../utils/supabase/server'
import { TodoList } from './components/todoList'
import { EditForm } from './components/editForm'

async function getData() {
  const supabase = createClient()
  const { data: todos, error } = await supabase.from('todos').select('*')
  if (error) {
    console.error(error)
  }
  return todos as any
}

export default async function Home() {
  /* const data = await getData() */

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3'>
        <Link className='text-black' href={'/test'}>
          Test
        </Link>
        <EditForm
          todo={{ id: 1, title: 'test', description: 'dette er en test' }}
        />
        {/* <TodoList todos={data} /> */}
      </div>
    </div>
  )
}
