import Link from 'next/link'
import React from 'react'
import { ArrowLeftCircle } from 'lucide-react';
interface BackButtonProps{
    text:string,
    link:string,
}
const BackButton = ({text,link}:BackButtonProps) => {
  return (
  <>
  <Link href={link} className='flex items-center gap-1 text-sm text-gray-500 hover:underline mb-5'>
  <ArrowLeftCircle size={18}/>
  {text}
  </Link>
  </>
  )
}

export default BackButton
