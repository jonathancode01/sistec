import { motion } from "framer-motion"

const SectionWrapper = ({ children, id, className = "", style = {} }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-20 md:py-32 px-6 md:px-12 lg:px-20 ${className}`}
      style={{ backgroundColor: "#000000", ...style }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  )
}

export default SectionWrapper