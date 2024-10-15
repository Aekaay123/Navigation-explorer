import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Support from "./pages/Support.jsx";
import ContactLayout from "./pages/ContactLayout.jsx";
import FbInfo from "./pages/FbInfo.jsx";
import InstaInfo from "./pages/InstaInfo.jsx";
import WhatsappInfo from "./pages/WhatsappInfo.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserLayout from "./pages/UserLayout.jsx";
import Github from "./pages/Github.jsx";
import PathNotFound from "./pages/PathNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Homepage />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path='' element={<Contact/>}></Route>
        <Route path="fbinfo" element={<FbInfo />} />
        <Route path="instainfo" element={<InstaInfo />} />
        <Route path="whatsappinfo" element={<WhatsappInfo />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="support" element={<Support />} />
      <Route path="user" element={<UserLayout />}>
        <Route index element={<UserPage/>} />
        <Route path=":id" element={<UserPage />} />
      </Route>
      <Route path="github" element={<Github />} />
      <Route path="*" element={<PathNotFound />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
