import './index.css'
import { Routes, Route } from "react-router-dom";
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';

function App() {

  return (
    <main className='flex h-screen'>
      <Routes>

        {/* public routes */}
        <Route  element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />          
          <Route path="/sign-up" element={<SignupForm />} />          
        </Route>

        {/* private routes */}
        <Route>

        </Route>

      </Routes>
    </main>
  )
}

export default App
