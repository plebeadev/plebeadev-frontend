import Index from "@/pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
