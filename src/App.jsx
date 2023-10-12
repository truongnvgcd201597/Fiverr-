import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { Gig } from "./pages/gig/Gig";
import { Gigs } from "./pages/gigs/Gigs";
import { Message } from "./pages/message/Message";
import { Messages } from "./pages/messages/Messages";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Orders } from "./pages/orders/Orders";
import { Add } from "./pages/add/Add";
import MyGigs from "./pages/myGigs/myGigs";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig",
          element: <Gig />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
