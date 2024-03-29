
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import {Home} from './_root/pages';
import './globals.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"//to make toast

const App = () => {
    
  return (
    <main className="flex h-screen">
        <Routes>
            //public Routes
            <Route element={<AuthLayout />}>
                <Route path='/signin' element={<SigninForm />} />
                <Route path='/signup' element={<SignupForm />} />
            </Route>
            //private Routes
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
        
    </main>
  )
}

export default App