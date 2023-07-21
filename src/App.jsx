import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import CartPage from "./pages/Cart.page";
import BookDetailPage from "./pages/BookDetail.page";
import DashboardPage from "./pages/Dashboard.page";
import InvalidPage from "./pages/Invalid.page";
import SharedLayout from "./components/utils/SharedLayout";
import { UserProvider } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/cartContext";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<SharedLayout />}>
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/bookDetails"
                  element={
                    <ProtectedRoute>
                      <BookDetailPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="*" element={<InvalidPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
