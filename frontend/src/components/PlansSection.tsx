import SectionWrapper from "./SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
];

const PlansSection = () => {
  return (
    <SectionWrapper id="planos">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Planos
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
          Escolha a experiência <span className="text-gradient-gold">ideal</span>
        </h2>
        <Separator className="w-16 bg-primary mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative rounded-xl p-8 border transition-all duration-500 hover:translate-y-[-4px] ${
              plan.highlighted
                ? "bg-card border-primary/40 glow-gold"
                : "bg-card border-border hover:border-primary/20"
            }`}
          >
            {plan.badge && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-0 px-4 py-1 text-xs tracking-wider uppercase font-body">
                {plan.badge}
              </Badge>
            )}

            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground font-light">
                {plan.description}
              </p>
            </div>

            <Separator className="bg-border mb-8" />

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#orcamento" className="block">
              <Button
                variant={plan.highlighted ? "accent" : "outline"}
                className="w-full"
              >
                Solicitar Orçamento
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PlansSection;
