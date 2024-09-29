'use client'

import Link from 'next/link'
import {
  House,
  LogOut,
  Menu,
  ShoppingCart,
  UserRoundCog,
  X,
} from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { bottomMenuItems, topMenuItems } from '@/data/menuItems'
import { useSelector } from 'react-redux'
import { selectAuth } from '@/features/auth/redux/authSlice'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import MainSearch from '../MainSearch'

function TopMenuItems() {
  return (
    <nav className='flex flex-col lg:items-center gap-6 lg:flex-row'>
      {topMenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

function BottomMenuItems() {
  return (
    <nav className='flex-1 flex flex-col lg:items-center gap-6 lg:flex-row lg:justify-between'>
      {bottomMenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

function AuthMenuItems() {
  return (
    <nav className='flex flex-col lg:items-center gap-6 lg:flex-row'>
      <Link
        href={'/auth/login'}
        className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
      >
        Login
      </Link>
      <Link
        href={'/auth/register'}
        className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
      >
        Register
      </Link>
    </nav>
  )
}
export default function Header() {
  const { isAuthenticated } = useSelector(selectAuth)

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <nav className='flex items-center justify-between gap-6 px-4 lg:px-6 h-16'>
        <div className='flex items-center gap-4'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'outline'} size={'icon'} className='lg:hidden'>
                <span className='sr-only'>Open Navigation</span>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='w-full max-w-xs space-y-6'>
              <div className='w-full text-end'>
                <SheetClose asChild>
                  <Button variant={'outline'} size={'icon'}>
                    <span className='sr-only'>Close Navigation</span>
                    <X />
                  </Button>
                </SheetClose>
              </div>
              <div className='w-full'>
                <MainSearch />
              </div>
              <TopMenuItems />
              <BottomMenuItems />
              {!isAuthenticated && <AuthMenuItems />}
            </SheetContent>
          </Sheet>

          <Link href={'/'} className='flex items-center gap-1'>
            <House size={24} />
            <span className='font-bold'>HomeBite</span>
          </Link>
        </div>

        <div className='flex-1 max-w-lg hidden lg:block'>
          <MainSearch />
        </div>

        <nav className='flex gap-4 flex-row items-center'>
          <button className='inline-flex items-end'>
            <span className='sr-only'>Shopping Cart</span>
            <ShoppingCart size={28} />

            <span className='text-xs font-bold'>10</span>
          </button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className='bg-foreground justify-center items-center'>
                  <AvatarFallback className='bg-foreground text-background font-extrabold'>
                    AH
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent side='right'>
                <DropdownMenuLabel>Logged as Asmaa Hamid</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserRoundCog size={24} className='mr-2' />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut size={24} className='mr-2' />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='hidden lg:block'>
              <AuthMenuItems />
            </div>
          )}
        </nav>
      </nav>

      {/* Bottom Navigation */}
      <div className='hidden lg:flex items-center px-4 lg:px-6 h-16 border-t'>
        <div className='flex items-center max-w-5xl mx-auto h-full'>
          <BottomMenuItems />
        </div>
      </div>
    </header>
  )
}
