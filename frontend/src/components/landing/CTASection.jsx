import SectionWrapper from "./SectionWrapper"
import { ArrowRight } from "lucide-react"

const CTASection = () => {
  return (
    <SectionWrapper id="contato">
      <div
        className="relative rounded-2xl p-12 md:p-20 text-center overflow-hidden"
        style={{
          backgroundColor: "#0A0A0A",
          border: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        {/* Glow dourado */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-[100px] pointer-events-none"
          style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
        />

        {/* Glow vermelho */}
        <div
          className="absolute bottom-0 right-1/4 w-[300px] h-[150px] blur-[100px] pointer-events-none"
          style={{ backgroundColor: "rgba(193, 18, 31, 0.05)" }}
        />

        <div className="relative z-10">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
          >
            Vamos conversar
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#F5F5F5" }}
          >
            Pronto para elevar o nível do{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
              }}
            >
              seu evento
            </span>
            ?
          </h2>
          <p
            className="max-w-lg mx-auto mb-10 font-light"
            style={{ color: "#CFCFCF" }}
          >
            Entre em contato e descubra como transformar seu próximo evento
            em uma experiência premium.
          </p>
          <button
            className="inline-flex items-center gap-2 px-10 py-3 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105 group"
            style={{
              backgroundColor: "#D4AF37",
              color: "#000000",
              boxShadow: "0 0 25px rgba(212, 175, 55, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(212, 175, 55, 0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.3)"
            }}
          >
            Fale Conosco
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTASection