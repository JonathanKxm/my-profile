import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import Javascript from "./pages/fullstack/javascript.tsx"
import Java from "./pages/backend/java.tsx"
import Python from "./pages/backend/python.tsx"
import Node from "./pages/backend/node.tsx"
import MyReact from "./pages/frontend/myReact.tsx"
import Vue from "./pages/frontend/vue.tsx"
import CV from "./pages/cv.tsx"
import Applications from "./pages/applications/index.tsx"
import { useEffect } from "react"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [location])

  return null
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToHash />
        <App />
      </>
    ),
  },
  {
    path: "/applications",
    element: (
      <>
        <ScrollToHash />
        <Applications />
      </>
    ),
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
