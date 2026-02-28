import SectionWrapper from "./SectionWrapper"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic",
    description: "Para eventos intimistas",
    features: [
      "Até 100 convidados",
      "5 opções de drinks",
      "Bartender profissional",
      "Bar montado",
      "4 horas de serviço",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    description: "Nosso mais popular",
    badge: "Mais Popular",
    features: [
      "Até 300 convidados",
      "10 opções de drinks",
      "2 bartenders profissionais",
      "Bar premium montado",
      "6 horas de serviço",
      "Drinks autorais exclusivos",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Experiência completa",
    features: [
      "Convidados ilimitados",
      "Cardápio personalizado",
      "Equipe completa",
      "Bar temático exclusivo",
      "Serviço estendido",
      "Drinks com flair bartending",
      "Consultoria de menu",
    ],
    highlighted: false,
  },
]

const PlansSection = () => {
  return (
    <SectionWrapper id="planos">
      <div className="text-center mb-16">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#D4AF37" }}
        >
          Planos
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "#F5F5F5" }}
        >
          Escolha a experiência{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
            }}
          >
            ideal
          </span>
        </h2>
        <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: "#D4AF37" }} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative rounded-xl p-8 transition-all duration-500 hover:translate-y-[-4px]"
            style={{
              backgroundColor: "#0A0A0A",
              border: plan.highlighted
                ? "1px solid rgba(212, 175, 55, 0.5)"
                : "1px solid #2A2A2A",
              boxShadow: plan.highlighted
                ? "0 0 40px rgba(212, 175, 55, 0.15)"
                : "none",
            }}
          >
            {plan.badge && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs tracking-wider uppercase px-4 py-1 rounded-full font-semibold"
                style={{
                  backgroundColor: "#C1121F",
                  color: "#FFFFFF",
                }}
              >
                {plan.badge}
              </span>
            )}

            <div className="text-center mb-8">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#D4AF37" }}
              >
                {plan.name}
              </h3>
              <p className="text-sm font-light" style={{ color: "#8A8A8A" }}>
                {plan.description}
              </p>
            </div>

            <div className="h-[1px] mb-8" style={{ backgroundColor: "#2A2A2A" }} />

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className="h-4 w-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#D4AF37" }}
                  />
                  <span className="text-sm font-light" style={{ color: "#CFCFCF" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#orcamento" className="block">
              <button
                className="w-full py-3 font-semibold rounded-md transition-all duration-300 hover:scale-105"
                style={
                  plan.highlighted
                    ? {
                        backgroundColor: "#C1121F",
                        color: "#FFFFFF",
                        boxShadow: "0 0 20px rgba(193, 18, 31, 0.3)",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "#D4AF37",
                        border: "1px solid #D4AF37",
                      }
                }
              >
                Solicitar Orçamento
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default PlansSection