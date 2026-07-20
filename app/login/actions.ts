'use server'

import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

function messageFor(error: { message: string }) {
  return encodeURIComponent(error.message)
}

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login?error=${messageFor(error)}`)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const headerStore = await headers()
  const origin = headerStore.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data: signUpData, error } = await supabase.auth.signUp({
    ...data,
    options: {
      data: {
        first_name: formData.get('first-name') as string,
        last_name: formData.get('last-name') as string,
        role: formData.get('role') as string,
      },
      emailRedirectTo: `${origin}/auth/confirm`,
    },
  })

  if (error) {
    redirect(`/register?error=${messageFor(error)}`)
  }

  revalidatePath('/', 'layout')
  if (signUpData.session) {
    redirect('/dashboard')
  }

  redirect('/login?message=Check%20your%20email%20to%20confirm%20your%20account.')
}
