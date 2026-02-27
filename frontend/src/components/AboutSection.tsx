import SectionWrapper from "./SectionWrapper";
import { Separator } from "@/components/ui/separator";
import { GlassWater, Star, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Calendar, value: "15+", label: "Anos de Experiência" },
  { icon: GlassWater, value: "500+", label: "Eventos Realizados" },
  { icon: Users, value: "50k+", label: "Convidados Atendidos" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="sobre">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Sobre Nós
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            A arte da <span className="text-gradient-gold">coquetelaria</span> premium
          </h2>
          <Separator className="w-16 bg-primary mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-6 font-light">
            Há 15 anos, a Porto's Bar é referência em serviços de open bar para eventos 
            corporativos e sociais. Nossa equipe de bartenders especializados cria 
            experiências únicas com drinks autorais e clássicos reinventados.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Cada evento é tratado com exclusividade, do planejamento à execução. 
            Utilizamos ingredientes selecionados e técnicas de mixologia contemporânea 
            para superar todas as expectativas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors duration-500 group"
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
