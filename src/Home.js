import { useState, useEffect } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    console.log(newBlogs)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return (
    <div className="home">
      {blogs && <Bloglist blogs={blogs} title={ "All blogs" } handleDelete={ handleDelete } />}
      <button onClick={() => setName('luigi')}>update name</button>
    </div>
   );
}

export default Home;
