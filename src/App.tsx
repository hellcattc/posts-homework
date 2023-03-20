import { useState } from 'react'
import './App.css'
import NewPost from './components/NewPost.jsx'
import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState<PostArray>([])

  const deletePost = (id: Number) => {
    return () => {
      setPosts(posts.filter(elem => elem.id != id))
    }
  }

  const createPost = (header: String, text: String) => {
    const id = Date.now()
    setPosts([...posts, {id, header, text}])
  }

  return (
    <div className="App">
      <NewPost createPost={createPost}></NewPost>
      <Posts posts={posts} deletePost={deletePost}></Posts>
    </div>
  )
}

export default App
