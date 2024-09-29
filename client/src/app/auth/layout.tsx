import { ReactNode } from 'react'

export default function AuthLayout({
  children,
}: {
  children: Readonly<ReactNode>
}) {
  return (
    <div className='w-full h-full flex'>
      <div className='hidden lg:flex justify-center items-center flex-1 bg-foreground px-12 w-1/2'>
        <div className='max-w-md space-y-6 text-center text-background'>
          <h1 className='text-4xl font-extrabold tracking-tight'>
            Welcome to HomeBite
          </h1>
          <p className='text-lg'>
            The best place to find the best home tools and appliances.
          </p>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center px-4 py-12 sm:px-6 lg:px-8'>
        {children}
      </div>
    </div>
  )
}
