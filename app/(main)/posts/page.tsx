import BackButton from '@/components/BackButton'
import PostsPagination from '@/components/posts/PostsPagination'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const page = () => {
  return (
<>
<BackButton text='Go Back' link='/'/>
<PostsTable/>
<PostsPagination/>
</>
  )
}

export default page
