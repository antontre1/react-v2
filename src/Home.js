import { useState } from 'react'
import Bloglist from './Bloglist';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My First Blog', body: 'Lorem, ipsum dolor...', author: 'mario', id: 1},
    {title: 'My luigi Blog', body: 'Lorem, ipsum dolor...', author: 'luigi', id: 2},
    {title: 'My Yoknify Blog', body: 'Lorem, ipsum dolor...', author: 'yoshi', id: 3}
  ])


  return (
    <div className="home">
      <Bloglist blogs={blogs} title={ "all blogs" }/>
    </div>
   );
}

export default Home;
