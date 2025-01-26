import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import posts from '@/data/posts'
import { Button } from '../ui/button'
import Link from 'next/link'
import { post } from '@/types/posts'
  

interface PostsTapleProps{
    limit?:number,
    title?:string
}
const PostsTable = ({limit,title}:PostsTapleProps) => {

    const sortedPosts:post[]=[...posts].sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime())
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  return (
  <>
 <h3 className='font-semibold text-2xl mb-1 mt-4'>{title ? title :"Posts"}</h3>

 
  <Table>
  <TableCaption>A list of your recent posts.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >Title</TableHead>
      <TableHead className=" hidden md:table-cell">Author</TableHead>
      <TableHead className=" hidden md:table-cell">Date</TableHead>
      <TableHead className="text-right">view</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        filteredPosts.map((user,index)=>(
            <TableRow key={index}>
            <TableCell className="font-medium">{user.title}</TableCell>
            <TableCell className=" hidden md:table-cell">{user.author}</TableCell>
            <TableCell className=" hidden md:table-cell">{user.date}</TableCell>
            <TableCell className="text-right">
                <Link href={`/posts/edit/${user.id}`}>
                <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Edit</Button>
                </Link>
               </TableCell>
          </TableRow>
        ))
    }

  </TableBody>
</Table>

  </>
  )
}

export default PostsTable
