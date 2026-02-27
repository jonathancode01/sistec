import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <SectionWrapper id="contato">
      <div className="relative rounded-2xl border border-primary/20 bg-card p-12 md:p-20 text-center overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Vamos conversar
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Pronto para elevar o nível do{" "}
            <span className="text-gradient-gold">seu evento</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 font-light">
            Entre em contato e descubra como transformar seu próximo evento 
            em uma experiência premium.
          </p>
          <Button variant="accent" size="lg" className="text-base px-10 group">
            Fale Conosco
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTASection;
