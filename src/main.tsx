
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"// to make app.tsx the router
import AuthProvider from "./context/AuthContext"
import { QueryProvider } from "./lib/react-query/QueryProviders"
import React from "react"


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryProvider>
      </BrowserRouter>
    </React.StrictMode>
  );