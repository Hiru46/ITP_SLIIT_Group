import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Pages/AdminDashboard/Dashboard.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Packages_Dashboard from './Pages/AdminDashboard/ServicePackages/Packages_Dashboard.jsx'
import Add_Package from './Pages/AdminDashboard/ServicePackages/Add_Package.jsx'
import Cus_Details from './Pages/AdminDashboard/ManageCustomers/Customer_Details.jsx'
import Update_Package from './Pages/AdminDashboard/ServicePackages/Update_Package.jsx'
import App from './App.jsx';
import HomeNavbar from './components/NavBar/HomeNavbar.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';
import ChangePassword from './Pages/ChangePassword/ChangePassword.jsx';
import StoreNavbar from './components/NavBar/StoreNavbar.jsx';
import Packages from './Pages/CustomerSide/ServicePackages/Packages.jsx'
import PackageDetails from './Pages/CustomerSide/ServicePackages/PackageDetails.jsx'
import UpdateCustomers from "./Pages/AdminDashboard/ManageCustomers/UpdateCustomers.jsx"
import AddCustomers from "./Pages/AdminDashboard/ManageCustomers/AddCustomers.jsx"
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Profile from './Pages/CustomerSide/CustomerProfile/Profile.jsx';
import CustomerHeader from './components/CustomerDashboard/CustomerHeader.jsx';
import CustomerSideBar from './components/CustomerDashboard/CustomerSideBar.jsx';
import EditProfile from './Pages/CustomerSide/CustomerProfile/EditProfile.jsx';
import Test from './Test.jsx';

import Offers from './Pages/Offers/Offers.jsx';
import OffersDashboard from './Pages/AdminDashboard/OffersDashboard/OffersDashboard.jsx';
import Add_Offer from './Pages/AdminDashboard/OffersDashboard/Add_Offer.jsx';
import UpdateOffers from './Pages/AdminDashboard/OffersDashboard/UpdateOffers.jsx';
import ReferralDashboard from './Pages/AdminDashboard/ReferralDashboard/ReferralDashboard.jsx';
import AddReferral from './Pages/AdminDashboard/ReferralDashboard/AddReferral.jsx';
import UpdateReferral from './Pages/AdminDashboard/ReferralDashboard/UpdateReferral.jsx';





const router = createBrowserRouter([


  // ======================== Client  Side=====================



  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/HomeContactUs",
    element: <ContactUs />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/StoreNavbar",
    element: <StoreNavbar />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/packages/:id",
    element: <PackageDetails />,
  },
  {

    path: "/Test",
    element: <Test />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/CustomerSideBar",
    element: <CustomerSideBar />,
  },
  {
    path: "/CustomerSideBar",
    element: <CustomerHeader />,
  },
  {
    path: "/EditProfile",
    element: <EditProfile />,
  },
  {
    path: "/Offers",
    element: <Offers />,
  },
  {
    path: "/add_offer",
    element: <Add_Offer />,
  },





  // ======================== Admin Side=====================



  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Homepackages",
    element: <Packages_Dashboard />,
  },
  {
    path: "/packages/addpckg",
    element: <Add_Package />,
  },
  {
    path: "/cus_details",
    element: <Cus_Details />,
  },
  {
    path: "/cus_details_update/:id",
    element: <UpdateCustomers />,
  },
  {
    path: "/cus_Add",
    element: <AddCustomers />,
  },
  {
    path: "/packages/update",
    element: <Update_Package />,
  },
  {
    path: "/offers_dash",
    element: <OffersDashboard />,
  },
  {
    path: "/update_offer/:id",
    element: <UpdateOffers />,
  },
  {
    path: "/referrals_dash",
    element: <ReferralDashboard />,
  },
  {
    path: "/add_referral",
    element: <AddReferral />,
  },
  {
    path: "/update_referral/:id",
    element: <UpdateReferral />,
  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
