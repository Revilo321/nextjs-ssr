'use server'

import { createClient } from '../../utils/supabase/server'

export async function createTodo(formData: FormData) {
  const supabase = createClient()

  const title = formData.get('title')
  const description = formData.get('description')

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, description }])

  if (error) throw error
}

export async function editTodo(todoId: number, formData: FormData) {
  const supabase = createClient()
  const title = formData.get('title')
  const description = formData.get('description')
  const { data, error } = await supabase
    .from('todos')
    .update({ title, description })
    .match({ id: todoId })

  if (error) throw error
}
