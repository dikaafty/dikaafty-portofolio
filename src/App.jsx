import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll />
    
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
