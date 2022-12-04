import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from "./components/common-components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import BookPage from "./pages/BookPage/BookPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ActivationPage from "./pages/ActivationPage/ActivationPage";
import PersistLogin from "./components/common-components/PersistLogin/PersistLogin";

const App = () => {
  return (
      <Routes>
          <Route element={ <Layout /> } >
              <Route path="/" element={ <Navigate replace to="/main" /> } />
              <Route path="/main" element={ <MainPage /> } />
              <Route path="/book/:isbn13" element={ <BookPage /> } />
              <Route path="/sign-in" element={ <SignInPage /> } />
              <Route path="/sign-up" element={ <SignUpPage /> } />
              <Route path="activate/:uid/:token" element={ <ActivationPage /> } />
              <Route element={ <PersistLogin/> }>
                  <Route path="/cart" element={ <CartPage /> } />
                  <Route path="/favorites" element={ <FavoritesPage /> } />
                  <Route path="/account" element={ <AccountPage /> } />
              </Route>
          </Route>
          <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
  );
}

export default App;
