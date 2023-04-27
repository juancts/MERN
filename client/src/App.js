import { Routes, Route } from "react-router-dom";
import { Home, NotFound, PostForm } from "./views";
import {PostProvider} from "./context/PostContext.jsx";
import "./index.css";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10' container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
