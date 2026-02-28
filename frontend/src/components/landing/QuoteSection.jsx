import SectionWrapper from "./SectionWrapper"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
    <SectionWrapper id="orcamento" className="bg-card/50">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Orçamento
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Orçamento{" "}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            personalizado
          </span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-light mt-4">
          Cada evento é único. Por isso, criamos propostas exclusivas para atender
          exatamente o que você precisa.
        </p>
        <Separator className="w-16 bg-primary mx-auto mt-8" />
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="text-center">
        <Button size="lg" className="text-base px-10">
          Solicitar Orçamento Agora
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default QuoteSection