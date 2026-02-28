import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Glow dourado */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(212, 175, 55, 0.08)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(193, 18, 31, 0.05)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
            style={{ color: "#D4AF37" }}
          >
            15 Anos de Excelência em Coquetelaria
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          style={{ color: "#F5F5F5" }}
        >
          Transformamos seu evento em uma{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
            }}
          >
            experiência inesquecível
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          style={{ color: "#CFCFCF" }}
        >
          Open bar premium com bartenders especializados.
          A sofisticação que seu evento merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#planos">
            <button
              className="px-8 py-3 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#D4AF37",
                color: "#000000",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              Conhecer Planos
            </button>
          </a>
          <a href="#orcamento">
            <button
              className="px-8 py-3 text-base font-semibold rounded-md border-2 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#D4AF37",
                borderColor: "#D4AF37",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#D4AF37"
                e.target.style.color = "#000000"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "#D4AF37"
              }}
            >
              Solicitar Orçamento
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6" style={{ color: "#D4AF37" }} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default HeroSection