import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './components/home/home';
import TrackInfo from './components/trackinfo/trackinfo';
import Generate from "./components/generate/generate";
import Track from "./components/track/track";
import Admin from "./components/admin/admin";
import Contact from "./components/contact/contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
{element : <Home/>, path: "/" },
{element : <TrackInfo/>, path: "/tracking/:trackingNumber" },
{element : <Generate/>, path: "/admin/generate"},
{element : <Admin/>, path: "/admin"},
{element :<Track/>, path: "track"},
{element : <Contact/>, path: "/contact"}
    ],

  },
]);


