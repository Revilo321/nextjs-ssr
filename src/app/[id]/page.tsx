import { createClient } from '../../../utils/supabase/server'
import { EditForm } from '../components/editForm'

async function getSingleTodo(id: string) {
  const supabase = createClient()
  const { data: todo, error } = await supabase
    .from('todos')
    .select('*')
    .eq('id', id)
    .single()

  return todo
}

export default async function Page({ params }: { params: { id: string } }) {
  const todo = await getSingleTodo(params.id)

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <EditForm todo={todo} />
    </div>
  )
}
