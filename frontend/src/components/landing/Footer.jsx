const Footer = () => {
  return (
    <footer
      className="px-6 md:px-12 py-12"
      style={{
        borderTop: "1px solid #2A2A2A",
        backgroundColor: "#000000",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="font-bold text-sm tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              PORTO'S BAR
            </span>
          </div>
          <p
            className="text-xs font-light tracking-wide"
            style={{ color: "#8A8A8A" }}
          >
            © {new Date().getFullYear()} Porto's Bar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer