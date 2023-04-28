import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export const Home = () => {
  const { posts } = usePosts();

  return (
    <div>
      <Link to="/new" className="text-white">Create new Post</Link>
      <div className="grid grid-cols-3 gap-2" >

      {posts.length ? (
        posts.map((post) =>
          post.image ? (
            <div >
              <PostCard post={post} key={post._id} />
            </div>
          ) : (
            <div>
              <PostCard post={post} key={post._id} />
            </div>
          )
        )
      ) : (
        <div className="flex flex-col justify-center">
          <VscEmptyWindow className="w-48 h-48 text-black" />
          <h1>NO POSTS YET</h1>
        </div>
      )}

      </div>
    </div>
  );
};
