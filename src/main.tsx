
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"// to make app.tsx the router
import AuthProvider from "./context/AuthContext"
import { QueryProvider } from "./lib/react-query/QueryProviders"


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <QueryProvider>
       <AuthProvider>
         <App />
        </AuthProvider> 
    </QueryProvider>
        
    </BrowserRouter>
)