import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Contact, { contactAction } from './pages/help/Contact';
import HelpLayout from './layouts/HelpLayout';
import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/FAQ';
import App from './App';
import NotFound from './pages/NotFound';
import CareersLayout from './layouts/CareerLayout';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';
import { AuthProvider } from './libs/auth.context';
import Profile from './pages/Profile';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route
        path='profile'
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=':id' element={<CareerDetails />} loader={careerDetailsLoader} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
