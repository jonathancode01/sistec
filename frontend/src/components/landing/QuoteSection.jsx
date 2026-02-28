import SectionWrapper from "./SectionWrapper"
import { FileText, MessageSquare, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: MessageSquare,
    title: "Conte sobre seu evento",
    description: "Compartilhe os detalhes: data, local, número de convidados e preferências.",
  },
  {
    icon: FileText,
    title: "Receba sua proposta",
    description: "Elaboramos um orçamento personalizado com as melhores opções para você.",
  },
  {
    icon: Sparkles,
    title: "Experiência garantida",
    description: "Nossa equipe cuida de tudo para seu evento ser inesquecível.",
  },
]

const QuoteSection = () => {
  return (
    <SectionWrapper id="orcamento" style={{ backgroundColor: "#050505" }}>
      <div className="text-center mb-16">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#D4AF37" }}
        >
          Orçamento
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "#F5F5F5" }}
        >
          Orçamento{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
            }}
          >
            personalizado
          </span>
        </h2>
        <p className="max-w-xl mx-auto font-light mt-4" style={{ color: "#CFCFCF" }}>
          Cada evento é único. Por isso, criamos propostas exclusivas para atender
          exatamente o que você precisa.
        </p>
        <div className="w-16 h-[2px] mx-auto mt-8" style={{ backgroundColor: "#D4AF37" }} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, i) => {
          const IconComponent = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                }}
              >
                <IconComponent className="h-6 w-6" style={{ color: "#D4AF37" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#F5F5F5" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "#8A8A8A" }}
              >
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="text-center">
        <button
          className="px-10 py-3 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#C1121F",
            color: "#FFFFFF",
            boxShadow: "0 0 25px rgba(193, 18, 31, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#D4343F"
            e.target.style.boxShadow = "0 0 35px rgba(193, 18, 31, 0.5)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#C1121F"
            e.target.style.boxShadow = "0 0 25px rgba(193, 18, 31, 0.3)"
          }}
        >
          Solicitar Orçamento Agora
        </button>
      </div>
    </SectionWrapper>
  )
}

export default QuoteSection