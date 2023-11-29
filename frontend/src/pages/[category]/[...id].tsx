import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Blog = () => {
    const router = useRouter();

    useEffect(() => {
      console.log(router.query.id);
      
    }, [router])
    

    return (
    <div>Blog {router.query.id}</div>
  )
}

export default Blog