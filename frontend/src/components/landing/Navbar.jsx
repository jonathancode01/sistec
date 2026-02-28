import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// ✅ Troque pelo logo do seu projeto
// import logo from "@/assets/logo-portos-bar.jpeg"

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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#hero" className="flex items-center gap-3">
          {/* <img src={logo} alt="Porto's Bar" className="h-10 w-10 rounded-full object-cover" /> */}
          <span className="font-bold text-lg tracking-wider text-primary">
            PORTO'S BAR
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#orcamento">
            <Button size="sm">
              Solicitar Orçamento
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-foreground p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-72">
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg tracking-wide text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#orcamento" onClick={() => setOpen(false)}>
                <Button className="w-full mt-4">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export default Navbar