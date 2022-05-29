import React from 'react'
import { useGetPostsQuery } from '../../../redux/postsApi'

function Posts (props) {
  const {data = [], isLoading} = useGetPostsQuery;

  if (isLoading) {
    return <div>Загрузка постов ...</div>
  }

  console.log(data)

  return (
    <div>
      {data.map(post => {
        return <div key={post.id}>
          {post.title}
        </div>
      })}
    </div>
  )
}

export default Posts