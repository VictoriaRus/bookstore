import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import AccountPage from "./pages/AccountPage";
import SearchPage from "./pages/SearchPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
      <Routes>
          <Route element={ <Layout /> } >
              <Route path='/' element={ <Navigate replace to="/main" /> } />
              <Route path='/main' element={ <MainPage /> } />
              <Route path='/book' element={ <BookPage /> } />
              <Route path='/cart' element={ <CartPage /> } />
              <Route path='/favorites' element={ <FavoritesPage /> } />
              <Route path='/account' element={ <AccountPage /> } />
              <Route path='/search' element={ <SearchPage /> } />
              <Route path='/sign-in' element={ <SignInPage /> } />
              <Route path='/sign-up' element={ <SignUpPage /> } />
          </Route>
      </Routes>
  );
}

export default App;
