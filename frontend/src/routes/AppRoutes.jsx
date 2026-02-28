import { Routes, Route, Navigate } from "react-router-dom"
import Index from "@/pages/Index"
import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import { ProtectedRoute } from "@/components/ProtectedRoute"

export function AppRoutes() {
  return (
    <Routes>
      {/* Página inicial - Landing Page */}
      <Route path="/" element={<Index />} />

      {/* Autenticação */}
      <Route path="/login" element={<Login />} />

      {/* Área protegida */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Rota inexistente → volta para home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}