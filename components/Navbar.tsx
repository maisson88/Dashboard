"use client"

import Image from 'next/image'
import logo from "@/public/logo.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between dark:text-white'>
      <Link href={'/'}>
      <Image src={logo} width={40} alt='logo'/>
      </Link>
   
     <div className='flex items-center'>
      <ThemeToggler/>
     <DropdownMenu>
     <DropdownMenuTrigger className=' focus:outline-none'>
     <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>MA</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
          <DropdownMenuItem ><Link href='./profile'>Profile</Link></DropdownMenuItem>
          <DropdownMenuItem ><Link href='./auth'> Logout</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
     </div>
    </div>
  )
}

export default Navbar
