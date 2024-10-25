import { Route, Routes } from 'react-router-dom';
import './global.css';
import SignInForm from './_auth/forms/sign-in-form';
import Home from './_root/pages/home';
import SignUpForm from './_auth/forms/sign-up-form';
import AuthLayout from './_auth/auth-layout';
import RootLayout from './_root/root-layout';

const App = () => {
  return (
    <main>
      <Routes>
        {/* !!! public routes */}
        <Route element={<AuthLayout  />}>
          <Route path="/sign-in" element={<SignInForm />}/>
          <Route path="/sign-up" element={<SignUpForm />}/>
        </Route>

        {/* !!! privete routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App