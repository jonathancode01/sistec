import SectionWrapper from "./SectionWrapper"
import { GlassWater, Star, Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { icon: Calendar, value: "15+", label: "Anos de Experiência" },
  { icon: GlassWater, value: "500+", label: "Eventos Realizados" },
  { icon: Users, value: "50k+", label: "Convidados Atendidos" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
]

const AboutSection = () => {
  return (
    <SectionWrapper id="sobre">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
          >
            Sobre Nós
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#F5F5F5" }}
          >
            A arte da{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
              }}
            >
              coquetelaria
            </span>{" "}
            premium
          </h2>
          <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: "#D4AF37" }} />
          <p className="leading-relaxed mb-6 font-light" style={{ color: "#CFCFCF" }}>
            Há 15 anos, a Porto's Bar é referência em serviços de open bar para eventos
            corporativos e sociais. Nossa equipe de bartenders especializados cria
            experiências únicas com drinks autorais e clássicos reinventados.
          </p>
          <p className="leading-relaxed font-light" style={{ color: "#CFCFCF" }}>
            Cada evento é tratado com exclusividade, do planejamento à execução.
            Utilizamos ingredientes selecionados e técnicas de mixologia contemporânea
            para superar todas as expectativas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-lg p-6 text-center transition-all duration-500 group hover:scale-105"
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #2A2A2A",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2A2A2A")}
              >
                <IconComponent
                  className="h-6 w-6 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#D4AF37" }}
                />
                <p
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: "#F5F5F5" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "#8A8A8A" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection