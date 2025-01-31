import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App';
import { LazyHome, LazyContact, LazyNotFound, LazyWhy } from "../pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LazyHome />} />
        <Route path="why" element={<LazyWhy />} />
        <Route path="contact" element={<LazyContact />} />
        <Route path="*" element={<LazyNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
