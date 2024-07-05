import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './components/home/home';
import TrackInfo from './components/trackinfo/trackinfo';
import Generate from "./components/generate/generate";
import Track from "./components/track/track";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
{element : <Home/>, path: "/" },
{element : <TrackInfo/>, path: "/tracking/:trackingNumber" },
{element : <Generate/>, path: "/generate"},
{element :<Track/>, path: "track"}
    ],

  },
]);


