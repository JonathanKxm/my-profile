import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Javascript from "./pages/fullstack/javascript.tsx"
import Java from "./pages/backend/java.tsx"
import Python from "./pages/backend/python.tsx"
import Node from "./pages/backend/node.tsx"
import MyReact from "./pages/frontend/myReact.tsx"
import Vue from "./pages/frontend/vue.tsx"
import CV from "./pages/cv.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cv",
    element: <CV />,
    children: [
      {
        path: "java",
        element: <Java />
      },
      {
        path: "node",
        element: <Node />
      },
      {
        path: "python",
        element: <Python />
      },
      {
        path: "react",
        element: <MyReact />
      },
      {
        path: "vue",
        element: <Vue />
      },
      {
        path: "js",
        element: <Javascript />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
