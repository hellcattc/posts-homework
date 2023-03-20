import React, { FC } from 'react'
import Post from './Post'

const Posts: FC<{posts: PostArray, deletePost: (arg1: number) => () => void}> = ({posts, deletePost}) => {
  return (
    <div>
        {posts.map((elem) => {
            const id = elem.id
            return (
                <Post key={id} header={elem.header} text={elem.text} deleteSelf={deletePost(id)}/>
            )
        })}
    </div>
  )
}

export default Posts