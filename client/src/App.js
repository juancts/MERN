
import { Routes, Route } from "react-router-dom";
import { Home, NotFound, PostForm } from "./views";
import "./index.css";

function App() {
  return (
    <div className='bg-neutral-900'>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new" element={<PostForm />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
