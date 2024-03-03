import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/Home/App.tsx";
import "./index.css";
import Landing from "./pages/Landing/Landing.tsx";
import Note from "./components/Note.tsx";
import FlashCard from "./components/FlashCard.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: (
    //   <div className="flex h-screen items-center justify-center">
    //     No such note exists
    //   </div>
    // ),
    children: [
     
      {
        path: "notes/:id",
        element: <Note />,
      },
      {
        path: "*",
        element: (
          <div className="flex h-screen items-center justify-center">
            No such note exists
          </div>
        ),
      },
    ],
  },
  {
    path: "flash-cards/:id",
    element: <FlashCard />
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
