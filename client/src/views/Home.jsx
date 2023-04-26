import { usePosts } from "../context/PostContext";
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

export const Home = () => {
  const { posts } = usePosts();

  

  return (
    <div >
      <Link to="/new">Create new Post</Link>
      <Link to="/new2">Create new Post</Link>
      {posts.length ? posts.map((post) =>
         post.image ? (
          <div className="flex flex-col justify-center" key={post._id}>
            <div>
              <img src={post.image.url} />
            </div>{" "}
            {post.title}
          </div>
        ) : (
          <div key={post._id}>{post.title}</div>
        )
      ) : <div className="flex flex-col justify-center">
      
      <VscEmptyWindow className='w-48 h-48 text-black'/>
      <h1>NO POSTS YET</h1>
      </div>
      }
      
    </div>
  );
};
