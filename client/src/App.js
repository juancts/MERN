import { Routes, Route } from "react-router-dom";
import { Home, NotFound, PostForm } from "./views";
import {PostProvider} from "./context/PostContext.jsx";
import "./index.css";
import { PostPrueba } from "./views/FormPrueba";

function App() {
  return (
    <div className="bg-neutral-400 min-h-screen flex items-center">
      <div className="px-10' container bg-red-50 m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/new2" element={<PostPrueba />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
