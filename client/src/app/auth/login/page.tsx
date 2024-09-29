'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { FormEvent } from 'react'
import useLogin from '@/features/auth/hooks/useLogin'
import { TLoginRequest } from '@/types/authTypes'

export default function Login() {
  const { login, loading } = useLogin()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const credentials: TLoginRequest = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    login(credentials)
  }

  return (
    <div className='mx-auto max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-extrabold tracking-tight text-foreground'>
          Sign in to your account
        </h1>
        <p className='mt-2 text-sm text-foreground'>
          Don't have an account?
          <Link
            href='/auth/register'
            className='ml-2 font-semibold text-primary hover:underline'
          >
            Register
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <div className='grid gap-1.5 w-full'>
            <label htmlFor='email' className='text-sm font-medium'>
              Email
            </label>
            <Input
              name='email'
              type='email'
              id='email'
              placeholder='john@example.com'
            />
          </div>
          <div>
            <label htmlFor='password' className='text-sm font-medium'>
              Password
            </label>
            <Input
              name='password'
              type='password'
              id='password'
              placeholder='********'
            />
          </div>
          <div>
            <Button type='submit' className='w-full' disabled={loading}>
              Sign in
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
