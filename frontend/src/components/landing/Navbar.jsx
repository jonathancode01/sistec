import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(20px)",
        borderColor: "#2A2A2A",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <span
            className="font-bold text-xl tracking-wider"
            style={{ color: "#D4AF37" }}
          >
            PORTO'S BAR
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-300"
              style={{ color: "#CFCFCF" }}
              onMouseEnter={(e) => (e.target.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.target.style.color = "#CFCFCF")}
            >
              {link.label}
            </a>
          ))}
          <Link to="/login">
            <button
              className="px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#C1121F",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#D4343F")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#C1121F")}
            >
              Entrar / Cadastrar
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#D4AF37" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "#0A0A0A",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg tracking-wide transition-colors"
                  style={{ color: "#CFCFCF" }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#orcamento" onClick={() => setOpen(false)}>
                <button
                  className="w-full mt-2 px-6 py-3 font-semibold rounded-md"
                  style={{ backgroundColor: "#C1121F", color: "#FFFFFF" }}
                >
                  Solicitar Orçamento
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar