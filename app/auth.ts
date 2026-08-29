'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '../lib/auth'

export async function signUpAction(formdata: FormData) {
  const name = formdata.get('name') as string
  const email = formdata.get('email') as string
  const password = formdata.get('password') as string

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    })
  } catch (error) {
    return {
      success: false,
      error: 'Не удалось создать аккаунт',
    }
  }
  return {
    success: true,
  }
}

export async function signInAction(formdata: FormData) {
  const email = formdata.get('email') as string
  const password = formdata.get('password') as string

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    })
  } catch (error) {
    return {
      success: false,
      error: 'Неверный email или пароль',
    }
  }
  redirect('/')
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  })

  redirect('/')
}
