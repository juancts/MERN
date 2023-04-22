import { Routes, Route } from "react-router-dom";
import { Home, NotFound, PostForm } from "./views";
import {PostContainer} from "./context/PostContext.jsx";
import "./index.css";

function App() {
  return (
    <div className="bg-neutral-400 min-h-screen flex items-center">
      <div className="px-10' container bg-red-50 m-auto">
        <PostContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  );
}

export default App;
