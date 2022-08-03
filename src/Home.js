import { useState, useEffect } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My First Blog', body: 'Lorem, ipsum dolor...', author: 'mario', id: 1},
    {title: 'My luigi Blog', body: 'Lorem, ipsum dolor...', author: 'luigi', id: 2},
    {title: 'My Yoknify Blog', body: 'Lorem, ipsum dolor...', author: 'yoshi', id: 3},
    {title: 'My 2nd Yoknify Blog', body: 'Lorem, ipsum dolor...', author: 'mario', id: 4}
  ])

  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    console.log(newBlogs)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect ran !')
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <Bloglist blogs={blogs} title={ "All blogs" } handleDelete={ handleDelete } />
      <button onClick={() => setName('luigi')}>update name</button>
    </div>
   );
}

export default Home;
