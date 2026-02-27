// frontend/src/pages/Login.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginService, register as registerService } from "../services/auth.service"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  const navigate = useNavigate()

  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      if (isRegister) {
        // REGISTRO
        await registerService(name, email, password)
        setSuccess("Conta criada! Faça login.")
        setIsRegister(false)
        setName("")
        setEmail("")
        setPassword("")
      } else {
        // LOGIN
        const data = await loginService(email, password)
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        navigate("/dashboard")
      }
    } catch (err) {
      setError(isRegister ? err.message : "Email ou senha inválidos")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{isRegister ? "Criar Conta" : "Login"}</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            {isRegister && (
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {success && (
              <p className="text-sm text-green-500">{success}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? (isRegister ? "Cadastrando..." : "Entrando...")
                : (isRegister ? "Cadastrar" : "Entrar")
              }
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {isRegister ? "Já tem conta?" : "Não tem conta?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsRegister(!isRegister)
                  setError("")
                  setSuccess("")
                }}
                className="text-primary underline hover:text-primary/80"
              >
                {isRegister ? "Fazer login" : "Criar conta"}
              </button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}