import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import Root from "./pages/Root/Root";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import Services from "./pages/Services/Services";

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage/>,
      },
      {
        path: "services/:serviceName",
        element: <Services />,
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
