import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import F1 from "./pages/f1"
import NBA from "./pages/nba"
import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/f1"
          element={
            <ProtectedRoute>
              <F1 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/nba"
          element={
            <ProtectedRoute>
              <NBA />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        {/* Redirect all unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}