// frontend/src/pages/Login.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginService, register as registerService } from "../services/auth.service"

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

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #2A2A2A",
    backgroundColor: "#1A1A1A",
    color: "#F5F5F5",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ========== MESH GRID BACKGROUND ========== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid dourado */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Pontos nos cruzamentos */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Pontos vermelhos espaçados */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(193, 18, 31, 0.08) 1px, transparent 1px)`,
            backgroundSize: "180px 180px",
            backgroundPosition: "30px 30px",
          }}
        />
        {/* Glow dourado central */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ backgroundColor: "rgba(212, 175, 55, 0.05)" }}
        />
        {/* Glow vermelho sutil */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(193, 18, 31, 0.03)" }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      {/* ========== BOTÃO VOLTAR ========== */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 transition-colors duration-300"
        style={{ color: "#D4AF37" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E8D48B")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#D4AF37")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Voltar ao Início
      </button>

      {/* ========== CARD DE LOGIN ========== */}
      <div
        className="relative z-10 w-full max-w-sm mx-4 rounded-xl p-8"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1
            className="text-xl font-bold tracking-wider mb-2"
            style={{ color: "#D4AF37" }}
          >
            PORTO'S BAR
          </h1>
          <h2
            className="text-2xl font-bold"
            style={{ color: "#F5F5F5" }}
          >
            {isRegister ? "Criar Conta" : "Entrar"}
          </h2>
          <div
            className="w-12 h-[2px] mx-auto mt-3"
            style={{ backgroundColor: "#D4AF37" }}
          />
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "#D4AF37"
                e.target.style.boxShadow = "0 0 10px rgba(212, 175, 55, 0.15)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#2A2A2A"
                e.target.style.boxShadow = "none"
              }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#D4AF37"
              e.target.style.boxShadow = "0 0 10px rgba(212, 175, 55, 0.15)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#2A2A2A"
              e.target.style.boxShadow = "none"
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = "#D4AF37"
              e.target.style.boxShadow = "0 0 10px rgba(212, 175, 55, 0.15)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#2A2A2A"
              e.target.style.boxShadow = "none"
            }}
          />

          {/* Mensagem de erro */}
          {error && (
            <p
              className="text-sm text-center py-2 px-3 rounded-md"
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(193, 18, 31, 0.2)",
                border: "1px solid rgba(193, 18, 31, 0.3)",
              }}
            >
              {error}
            </p>
          )}

          {/* Mensagem de sucesso */}
          {success && (
            <p
              className="text-sm text-center py-2 px-3 rounded-md"
              style={{
                color: "#D4AF37",
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
              }}
            >
              {success}
            </p>
          )}

          {/* Botão submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold rounded-md transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            style={{
              backgroundColor: "#C1121F",
              color: "#FFFFFF",
              boxShadow: "0 0 20px rgba(193, 18, 31, 0.3)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.backgroundColor = "#D4343F"
                e.target.style.boxShadow = "0 0 30px rgba(193, 18, 31, 0.5)"
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#C1121F"
              e.target.style.boxShadow = "0 0 20px rgba(193, 18, 31, 0.3)"
            }}
          >
            {loading
              ? (isRegister ? "Cadastrando..." : "Entrando...")
              : (isRegister ? "Cadastrar" : "Entrar")
            }
          </button>

          {/* Divisor */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-[1px]" style={{ backgroundColor: "#2A2A2A" }} />
            <span className="text-xs" style={{ color: "#8A8A8A" }}>ou</span>
            <div className="flex-1 h-[1px]" style={{ backgroundColor: "#2A2A2A" }} />
          </div>

          {/* Toggle login/register */}
          <p className="text-center text-sm" style={{ color: "#8A8A8A" }}>
            {isRegister ? "Já tem conta?" : "Não tem conta?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister)
                setError("")
                setSuccess("")
              }}
              className="underline transition-colors duration-300"
              style={{ color: "#D4AF37" }}
              onMouseEnter={(e) => (e.target.style.color = "#E8D48B")}
              onMouseLeave={(e) => (e.target.style.color = "#D4AF37")}
            >
              {isRegister ? "Fazer login" : "Criar conta"}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}