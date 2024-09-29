import React from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function MainSearch() {
  return (
    <form className='flex items-center rounded-full border border-primary p-1 gap-2'>
      <input
        type='text'
        className='px-3 min-h-8 rounded-full flex-1 outline-none focus:outline-none bg-transparent text-body2 placeholder:text-body4 md:placeholder:text-body3 placeholder:text-grayscale-5'
        placeholder='Search for products'
      />
      <Button className='h-10 w-10 p-2 rounded-full'>
        <span className='sr-only'>Search</span>
        <Search />
      </Button>
    </form>
  )
}
