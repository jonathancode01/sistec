// frontend/src/pages/Login.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginService, register as registerService } from "../services/auth.service"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import bgLogin from "@/assets/elgin-background.png"

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
        await registerService(name, email, password)
        setSuccess("Conta criada! Faça login.")
        setIsRegister(false)
        setName("")
        setEmail("")
        setPassword("")
      } else {
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
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* ✅ BOTÃO VOLTAR PARA HOME */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 
                   text-white/80 hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Voltar ao Início
      </button>

      <Card className="relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            {isRegister ? "Criar Conta" : "Login"}
          </CardTitle>
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

            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-500">{success}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? isRegister ? "Cadastrando..." : "Entrando..."
                : isRegister ? "Cadastrar" : "Entrar"
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