import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
// core styles are required for all packages
import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product-details",
    element: <div>product details page</div>,
  },
  {
    path: "/cart-details",
    element: <div>cart details page</div>,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
